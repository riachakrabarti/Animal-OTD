const Zoo = {
  async init() {
    const enclosure = document.getElementById('zoo-enclosure');
    const emptyMsg = document.getElementById('zoo-empty');
    const countEl = document.getElementById('zoo-count');

    try {
      const data = await API.getZoo();
      const animals = data.animals;

      countEl.textContent = `${animals.length} of ${data.total} animals discovered`;

      // Clear existing sprites (keep empty msg)
      enclosure.querySelectorAll('.zoo-sprite').forEach(el => el.remove());

      if (animals.length === 0) {
        emptyMsg.classList.remove('hidden');
        return;
      }

      emptyMsg.classList.add('hidden');
      this.placeAnimals(enclosure, animals);
    } catch (e) {
      console.error('Failed to load zoo:', e);
    }
  },

  hashStr(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    return Math.abs(hash);
  },

  placeAnimals(enclosure, animals) {
    const rect = enclosure.getBoundingClientRect();
    const w = rect.width || 800;
    const h = rect.height || 550;

    const padding = 60;
    const usableW = w - padding * 2;
    const usableH = h - padding * 2;

    const cols = Math.max(3, Math.ceil(Math.sqrt(animals.length * 1.5)));
    const rows = Math.ceil(animals.length / cols);
    const cellW = usableW / cols;
    const cellH = usableH / rows;

    animals.forEach((animal, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Seeded offset for organic feel
      const ox = (this.hashStr(animal.id + 'x') % 30) - 15;
      const oy = (this.hashStr(animal.id + 'y') % 24) - 12;

      const x = padding + col * cellW + cellW / 2 + ox;
      const y = padding + row * cellH + cellH / 2 + oy;

      const animIndex = this.hashStr(animal.id) % 5;
      const delay = (this.hashStr(animal.id + 'd') % 2000) / 1000;

      const sprite = document.createElement('div');
      sprite.className = `zoo-sprite zoo-anim-${animIndex}`;
      sprite.style.left = `${x}px`;
      sprite.style.top = `${y}px`;
      sprite.style.transform = 'translate(-50%, -50%)';
      sprite.style.animationDelay = `${delay}s`;

      // Use SVG sprite instead of emoji
      const svgMarkup = Sprites.get(animal.id, animal.color);

      sprite.innerHTML = `
        <div class="sprite-svg">${svgMarkup}</div>
        <span class="sprite-name">${animal.name}</span>
      `;

      // Click to view animal details in modal
      sprite.addEventListener('click', () => {
        Daily.showModal(animal);
      });

      enclosure.appendChild(sprite);
    });
  }
};
