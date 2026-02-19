const Daily = {
  async init() {
    const greeting = document.getElementById('greeting');
    const dateDisplay = document.getElementById('date-display');
    const cardsContainer = document.getElementById('cards-container');
    const dailyContent = document.getElementById('daily-content');
    const completeMsg = document.getElementById('day-complete-msg');
    const exhaustedMsg = document.getElementById('exhausted-msg');

    // Set greeting
    const username = API.getUsername();
    const hour = new Date().getHours();
    const timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    const displayName = username === 'elliotandria' ? 'Elliot & Ria' : username.charAt(0).toUpperCase() + username.slice(1);
    greeting.textContent = `${timeGreeting}, ${displayName}!`;

    // Set date
    const today = new Date();
    dateDisplay.textContent = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    try {
      const data = await API.getToday();

      if (data.exhausted) {
        dailyContent.classList.add('hidden');
        completeMsg.classList.add('hidden');
        exhaustedMsg.classList.remove('hidden');
        return;
      }

      if (data.completed) {
        this.renderCards(cardsContainer, data.animals, true);
        dailyContent.querySelector('.daily-subtitle').textContent = "Today's animals";
        completeMsg.classList.remove('hidden');
        return;
      }

      // Check if some are revealed
      const revealedCount = data.animals.filter(a => a.revealed).length;
      if (revealedCount > 0 && revealedCount < 3) {
        dailyContent.querySelector('.daily-subtitle').textContent = `${3 - revealedCount} more to discover today!`;
      }

      this.renderCards(cardsContainer, data.animals, false);
    } catch (e) {
      console.error('Failed to load today:', e);
    }
  },

  renderCards(container, animals, allComplete) {
    container.innerHTML = '';

    animals.forEach((animal, i) => {
      const card = document.createElement('div');
      card.className = 'animal-card' + (animal.revealed ? ' revealed' : '');
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
            <span class="mystery-icon">?</span>
            <span class="mystery-number">Animal #${i + 1}</span>
            <span class="mystery-hint">Tap to reveal!</span>
          </div>
          <div class="card-back">
            ${animal.revealed ? this.cardBackHTML(animal) : ''}
          </div>
        </div>
      `;

      if (!animal.revealed && !allComplete) {
        card.addEventListener('click', () => this.revealAnimal(card, animal.id, i));
      }

      if (animal.revealed) {
        const learnBtn = card.querySelector('.learn-more');
        if (learnBtn) {
          learnBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showModal(animal);
          });
        }
      }

      container.appendChild(card);
    });
  },

  cardBackHTML(animal) {
    return `
      <div class="card-back-image">
        <img src="/api/image/${animal.id}" alt="${animal.name}" loading="lazy">
      </div>
      <div class="card-back-info">
        <h3>${animal.name}</h3>
        <p class="card-fact">${animal.facts[0]}</p>
        <button class="learn-more">Learn More</button>
      </div>
    `;
  },

  async revealAnimal(card, animalId, index) {
    if (card.classList.contains('revealed') || card.classList.contains('revealing')) return;
    card.classList.add('revealing');

    try {
      const data = await API.reveal(animalId);
      const animal = data.animal;

      // Save progress to localStorage
      const today = new Date().toISOString().slice(0, 10);
      API.addDiscovered(animal.id);
      API.addRevealedToday(animal.id, today);

      // Populate card back
      const cardBack = card.querySelector('.card-back');
      cardBack.innerHTML = this.cardBackHTML(animal);

      // Trigger flip
      card.classList.add('revealed', 'just-revealed');
      card.classList.remove('revealing');

      // Add learn more listener
      const learnBtn = card.querySelector('.learn-more');
      learnBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showModal(animal);
      });

      // Check if day is now complete
      if (data.completed) {
        setTimeout(() => {
          const subtitle = document.querySelector('.daily-subtitle');
          if (subtitle) subtitle.textContent = "Today's animals";
          document.getElementById('day-complete-msg').classList.remove('hidden');
        }, 1200);
      } else {
        const allCards = document.querySelectorAll('.animal-card');
        const remaining = 3 - document.querySelectorAll('.animal-card.revealed').length;
        if (remaining > 0) {
          document.querySelector('.daily-subtitle').textContent = `${remaining} more to discover today!`;
        }
      }
    } catch (e) {
      card.classList.remove('revealing');
      console.error('Reveal failed:', e);
    }
  },

  showModal(animal) {
    const modal = document.getElementById('animal-modal');
    document.getElementById('modal-image').src = `/api/image/${animal.id}`;
    document.getElementById('modal-image').alt = animal.name;
    document.getElementById('modal-name').textContent = animal.name;

    const factsList = document.getElementById('modal-facts');
    factsList.innerHTML = animal.facts.map(f => `<li>${f}</li>`).join('');

    const videoContainer = document.getElementById('modal-video');
    if (animal.videoUrl) {
      videoContainer.innerHTML = `<iframe src="${animal.videoUrl}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
    } else {
      videoContainer.innerHTML = '';
    }

    modal.classList.remove('hidden');
  }
};
