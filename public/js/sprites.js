// Cute minimalist animal SVG sprites
// Each returns an inline SVG string with soft, rounded, kawaii-style illustration

const Sprites = {
  // Map of animal ID to sprite generator
  // Each sprite is ~60x60 viewBox, uses the animal's color as accent

  get(animalId, color) {
    const fn = this.animals[animalId];
    if (fn) return fn(color);
    return this.defaultSprite(color);
  },

  defaultSprite(c) {
    return `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="28" r="18" fill="${c}" opacity="0.2"/>
      <circle cx="30" cy="28" r="14" fill="${c}" opacity="0.4"/>
      <circle cx="25" cy="25" r="2.5" fill="#333"/>
      <circle cx="35" cy="25" r="2.5" fill="#333"/>
      <circle cx="26" cy="24.5" r="0.8" fill="#fff"/>
      <circle cx="36" cy="24.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="30" rx="3" ry="2" fill="#f8bbd0"/>
      <path d="M27 33 Q30 36 33 33" fill="none" stroke="#333" stroke-width="1.2" stroke-linecap="round"/>
      <text x="30" y="52" text-anchor="middle" font-size="8" fill="#999">?</text>
    </svg>`;
  },

  animals: {
    'red-panda': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="16" ry="14" fill="#d4623b"/>
      <ellipse cx="30" cy="32" rx="10" ry="9" fill="#f5deb3"/>
      <circle cx="17" cy="20" r="6" fill="#d4623b"/>
      <circle cx="43" cy="20" r="6" fill="#d4623b"/>
      <circle cx="17" cy="20" r="3.5" fill="#f5deb3"/>
      <circle cx="43" cy="20" r="3.5" fill="#f5deb3"/>
      <ellipse cx="24" cy="28" rx="4" ry="3.5" fill="#8b3a1a"/>
      <ellipse cx="36" cy="28" rx="4" ry="3.5" fill="#8b3a1a"/>
      <circle cx="24" cy="27.5" r="2.5" fill="#333"/>
      <circle cx="36" cy="27.5" r="2.5" fill="#333"/>
      <circle cx="25" cy="27" r="0.8" fill="#fff"/>
      <circle cx="37" cy="27" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="33" rx="2.5" ry="1.5" fill="#333"/>
      <path d="M27 36 Q30 38 33 36" fill="none" stroke="#333" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'axolotl': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="16" ry="12" fill="#f8bbd0"/>
      <path d="M12 18 Q8 10 14 14 Q10 8 16 14 Q14 6 18 16" fill="#e91e63" opacity="0.6"/>
      <path d="M48 18 Q52 10 46 14 Q50 8 44 14 Q46 6 42 16" fill="#e91e63" opacity="0.6"/>
      <circle cx="24" cy="28" r="3" fill="#fff"/>
      <circle cx="36" cy="28" r="3" fill="#fff"/>
      <circle cx="24" cy="28" r="2" fill="#333"/>
      <circle cx="36" cy="28" r="2" fill="#333"/>
      <circle cx="24.8" cy="27.5" r="0.7" fill="#fff"/>
      <circle cx="36.8" cy="27.5" r="0.7" fill="#fff"/>
      <path d="M27 35 Q30 37 33 35" fill="none" stroke="#c2185b" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="22" cy="34" r="2.5" fill="#f48fb1" opacity="0.4"/>
      <circle cx="38" cy="34" r="2.5" fill="#f48fb1" opacity="0.4"/>
    </svg>`,

    'quokka': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="16" ry="14" fill="#a1887f"/>
      <ellipse cx="30" cy="35" rx="10" ry="8" fill="#d7ccc8"/>
      <ellipse cx="18" cy="18" r="5" fill="#a1887f"/>
      <ellipse cx="42" cy="18" r="5" fill="#a1887f"/>
      <ellipse cx="18" cy="18" r="3" fill="#f8bbd0"/>
      <ellipse cx="42" cy="18" r="3" fill="#f8bbd0"/>
      <circle cx="24" cy="28" r="2.5" fill="#333"/>
      <circle cx="36" cy="28" r="2.5" fill="#333"/>
      <circle cx="25" cy="27.5" r="0.8" fill="#fff"/>
      <circle cx="37" cy="27.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="33" rx="2" ry="1.5" fill="#795548"/>
      <path d="M25 36 Q30 40 35 36" fill="none" stroke="#795548" stroke-width="1.2" stroke-linecap="round"/>
    </svg>`,

    'fennec-fox': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="15,28 10,6 24,22" fill="#ffe0b2"/>
      <polygon points="45,28 50,6 36,22" fill="#ffe0b2"/>
      <polygon points="16,27 12,10 23,22" fill="#ffcc80"/>
      <polygon points="44,27 48,10 37,22" fill="#ffcc80"/>
      <ellipse cx="30" cy="34" rx="16" ry="13" fill="#ffe0b2"/>
      <ellipse cx="30" cy="37" rx="9" ry="7" fill="#fff8e1"/>
      <circle cx="24" cy="30" r="2.5" fill="#333"/>
      <circle cx="36" cy="30" r="2.5" fill="#333"/>
      <circle cx="25" cy="29.5" r="0.8" fill="#fff"/>
      <circle cx="37" cy="29.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#333"/>
      <path d="M28 38 Q30 39.5 32 38" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'sea-otter': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="18" ry="14" fill="#8d6e63"/>
      <ellipse cx="30" cy="34" rx="12" ry="10" fill="#d7ccc8"/>
      <circle cx="18" cy="24" r="4" fill="#8d6e63"/>
      <circle cx="42" cy="24" r="4" fill="#8d6e63"/>
      <circle cx="24" cy="28" r="2.5" fill="#333"/>
      <circle cx="36" cy="28" r="2.5" fill="#333"/>
      <circle cx="25" cy="27.5" r="0.8" fill="#fff"/>
      <circle cx="37" cy="27.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="33" rx="3" ry="2" fill="#5d4037"/>
      <path d="M27 37 Q30 39 33 37" fill="none" stroke="#5d4037" stroke-width="1" stroke-linecap="round"/>
      <line x1="22" y1="34" x2="16" y2="33" stroke="#8d6e63" stroke-width="0.8"/>
      <line x1="22" y1="35.5" x2="16" y2="36" stroke="#8d6e63" stroke-width="0.8"/>
      <line x1="38" y1="34" x2="44" y2="33" stroke="#8d6e63" stroke-width="0.8"/>
      <line x1="38" y1="35.5" x2="44" y2="36" stroke="#8d6e63" stroke-width="0.8"/>
    </svg>`,

    'pygmy-owl': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="15" fill="#a1887f"/>
      <ellipse cx="30" cy="36" rx="10" ry="10" fill="#efebe9"/>
      <circle cx="24" cy="28" r="5" fill="#fff"/>
      <circle cx="36" cy="28" r="5" fill="#fff"/>
      <circle cx="24" cy="28" r="3" fill="#ff8f00"/>
      <circle cx="36" cy="28" r="3" fill="#ff8f00"/>
      <circle cx="24" cy="28" r="2" fill="#333"/>
      <circle cx="36" cy="28" r="2" fill="#333"/>
      <circle cx="24.7" cy="27.3" r="0.7" fill="#fff"/>
      <circle cx="36.7" cy="27.3" r="0.7" fill="#fff"/>
      <polygon points="30,32 28,34 32,34" fill="#ff8f00"/>
      <path d="M18 20 Q20 14 24 20" fill="#a1887f"/>
      <path d="M36 20 Q40 14 42 20" fill="#a1887f"/>
    </svg>`,

    'hedgehog': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="12" fill="#8d6e63"/>
      <path d="M14 30 L12 20 L18 28 L16 18 L22 26 L20 16 L26 26 L26 14 L30 24 L34 14 L34 26 L40 16 L38 26 L44 18 L42 28 L48 20 L46 30" fill="#a1887f"/>
      <ellipse cx="26" cy="38" rx="12" ry="10" fill="#ffe0b2"/>
      <circle cx="22" cy="34" r="2" fill="#333"/>
      <circle cx="32" cy="34" r="2" fill="#333"/>
      <circle cx="22.6" cy="33.5" r="0.6" fill="#fff"/>
      <circle cx="32.6" cy="33.5" r="0.6" fill="#fff"/>
      <circle cx="26" cy="38" r="1.5" fill="#333"/>
      <circle cx="20" cy="37" r="2" fill="#ffab91" opacity="0.4"/>
      <circle cx="34" cy="37" r="2" fill="#ffab91" opacity="0.4"/>
    </svg>`,

    'sugar-glider': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="14" ry="13" fill="#9e9e9e"/>
      <path d="M16 32 Q6 24 10 40 Q14 36 16 32Z" fill="#bdbdbd" opacity="0.5"/>
      <path d="M44 32 Q54 24 50 40 Q46 36 44 32Z" fill="#bdbdbd" opacity="0.5"/>
      <ellipse cx="30" cy="34" rx="8" ry="7" fill="#e0e0e0"/>
      <circle cx="14" cy="20" r="5" fill="#9e9e9e"/>
      <circle cx="46" cy="20" r="5" fill="#9e9e9e"/>
      <circle cx="14" cy="20" r="3" fill="#f8bbd0"/>
      <circle cx="46" cy="20" r="3" fill="#f8bbd0"/>
      <line x1="22" y1="26" x2="38" y2="26" stroke="#616161" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="25" cy="29" r="2.5" fill="#333"/>
      <circle cx="35" cy="29" r="2.5" fill="#333"/>
      <circle cx="25.7" cy="28.5" r="0.7" fill="#fff"/>
      <circle cx="35.7" cy="28.5" r="0.7" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="1.5" ry="1" fill="#f8bbd0"/>
    </svg>`,

    'pika': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="15" ry="13" fill="#bcaaa4"/>
      <circle cx="20" cy="18" r="5" fill="#bcaaa4"/>
      <circle cx="40" cy="18" r="5" fill="#bcaaa4"/>
      <circle cx="20" cy="18" r="3" fill="#f8bbd0"/>
      <circle cx="40" cy="18" r="3" fill="#f8bbd0"/>
      <ellipse cx="30" cy="36" rx="8" ry="7" fill="#efebe9"/>
      <circle cx="25" cy="30" r="2.5" fill="#333"/>
      <circle cx="35" cy="30" r="2.5" fill="#333"/>
      <circle cx="25.7" cy="29.5" r="0.8" fill="#fff"/>
      <circle cx="35.7" cy="29.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#f8bbd0"/>
      <path d="M28 38 Q30 40 32 38" fill="none" stroke="#795548" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'dumbo-octopus': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="26" rx="16" ry="14" fill="#f8bbd0"/>
      <ellipse cx="14" cy="22" rx="7" ry="5" fill="#f48fb1" transform="rotate(-20 14 22)"/>
      <ellipse cx="46" cy="22" rx="7" ry="5" fill="#f48fb1" transform="rotate(20 46 22)"/>
      <circle cx="24" cy="24" r="3" fill="#fff"/>
      <circle cx="36" cy="24" r="3" fill="#fff"/>
      <circle cx="24" cy="24" r="2" fill="#333"/>
      <circle cx="36" cy="24" r="2" fill="#333"/>
      <circle cx="24.7" cy="23.5" r="0.6" fill="#fff"/>
      <circle cx="36.7" cy="23.5" r="0.6" fill="#fff"/>
      <path d="M28 29 Q30 30.5 32 29" fill="none" stroke="#e91e63" stroke-width="1" stroke-linecap="round"/>
      <path d="M20 38 Q18 46 22 44 Q20 48 26 44" fill="none" stroke="#f8bbd0" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M28 38 Q28 48 30 44 Q32 48 32 38" fill="none" stroke="#f8bbd0" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M40 38 Q42 46 38 44 Q40 48 34 44" fill="none" stroke="#f8bbd0" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,

    'slow-loris': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="16" ry="15" fill="#d4a574"/>
      <circle cx="16" cy="22" r="4" fill="#d4a574"/>
      <circle cx="44" cy="22" r="4" fill="#d4a574"/>
      <circle cx="24" cy="28" r="6" fill="#5d4037"/>
      <circle cx="36" cy="28" r="6" fill="#5d4037"/>
      <circle cx="24" cy="28" r="4.5" fill="#fff"/>
      <circle cx="36" cy="28" r="4.5" fill="#fff"/>
      <circle cx="24" cy="28" r="3" fill="#333"/>
      <circle cx="36" cy="28" r="3" fill="#333"/>
      <circle cx="25" cy="27" r="1" fill="#fff"/>
      <circle cx="37" cy="27" r="1" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#333"/>
      <path d="M28 38 Q30 39 32 38" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'arctic-fox': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,30 10,10 26,24" fill="#eceff1"/>
      <polygon points="44,30 50,10 34,24" fill="#eceff1"/>
      <ellipse cx="30" cy="34" rx="16" ry="13" fill="#eceff1"/>
      <ellipse cx="30" cy="37" rx="9" ry="7" fill="#fff"/>
      <circle cx="24" cy="30" r="2.5" fill="#37474f"/>
      <circle cx="36" cy="30" r="2.5" fill="#37474f"/>
      <circle cx="25" cy="29.5" r="0.8" fill="#fff"/>
      <circle cx="37" cy="29.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#37474f"/>
      <path d="M28 38 Q30 39.5 32 38" fill="none" stroke="#546e7a" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'pangolin': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="18" ry="13" fill="#c9b38c"/>
      <path d="M16 28 Q18 26 20 28 Q22 26 24 28 Q26 26 28 28 Q30 26 32 28 Q34 26 36 28 Q38 26 40 28 Q42 26 44 28" fill="none" stroke="#a08050" stroke-width="1.5"/>
      <path d="M18 34 Q20 32 22 34 Q24 32 26 34 Q28 32 30 34 Q32 32 34 34 Q36 32 38 34 Q40 32 42 34" fill="none" stroke="#a08050" stroke-width="1.5"/>
      <ellipse cx="24" cy="32" rx="6" ry="5" fill="#ffe0b2"/>
      <circle cx="22" cy="30" r="1.5" fill="#333"/>
      <circle cx="27" cy="30" r="1.5" fill="#333"/>
      <circle cx="22.4" cy="29.6" r="0.5" fill="#fff"/>
      <circle cx="27.4" cy="29.6" r="0.5" fill="#fff"/>
      <ellipse cx="24.5" cy="33" rx="1" ry="0.7" fill="#333"/>
    </svg>`,

    'capybara': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="12" fill="#a1887f"/>
      <ellipse cx="30" cy="30" rx="14" ry="12" fill="#a1887f"/>
      <ellipse cx="30" cy="34" rx="9" ry="7" fill="#d7ccc8"/>
      <circle cx="18" cy="20" r="3" fill="#a1887f"/>
      <circle cx="42" cy="20" r="3" fill="#a1887f"/>
      <circle cx="24" cy="26" r="2.5" fill="#333"/>
      <circle cx="36" cy="26" r="2.5" fill="#333"/>
      <circle cx="24.7" cy="25.5" r="0.8" fill="#fff"/>
      <circle cx="36.7" cy="25.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="33" rx="4" ry="2.5" fill="#bcaaa4"/>
      <circle cx="29" cy="32.5" r="0.8" fill="#333"/>
      <circle cx="31" cy="32.5" r="0.8" fill="#333"/>
      <path d="M27 36 Q30 38 33 36" fill="none" stroke="#795548" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'leaf-sheep': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="10" ry="8" fill="#f5f5f5"/>
      <path d="M22 30 Q18 22 24 28" fill="#66bb6a"/>
      <path d="M26 28 Q22 18 28 26" fill="#81c784"/>
      <path d="M30 26 Q30 16 32 26" fill="#66bb6a"/>
      <path d="M34 28 Q38 18 36 26" fill="#81c784"/>
      <path d="M38 30 Q42 22 36 28" fill="#66bb6a"/>
      <circle cx="26" cy="34" r="2" fill="#333"/>
      <circle cx="34" cy="34" r="2" fill="#333"/>
      <circle cx="26.5" cy="33.5" r="0.6" fill="#fff"/>
      <circle cx="34.5" cy="33.5" r="0.6" fill="#fff"/>
      <path d="M28 38 Q30 39 32 38" fill="none" stroke="#bdbdbd" stroke-width="0.8" stroke-linecap="round"/>
      <circle cx="24" cy="37" r="1.5" fill="#f8bbd0" opacity="0.4"/>
      <circle cx="36" cy="37" r="1.5" fill="#f8bbd0" opacity="0.4"/>
    </svg>`,

    'sand-cat': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,28 12,12 24,24" fill="#ffe0b2"/>
      <polygon points="44,28 48,12 36,24" fill="#ffe0b2"/>
      <polygon points="17,27 14,16 23,24" fill="#ffcc80"/>
      <polygon points="43,27 46,16 37,24" fill="#ffcc80"/>
      <ellipse cx="30" cy="34" rx="15" ry="12" fill="#ffe0b2"/>
      <ellipse cx="30" cy="36" rx="8" ry="6" fill="#fff8e1"/>
      <circle cx="24" cy="30" r="3" fill="#fff"/>
      <circle cx="36" cy="30" r="3" fill="#fff"/>
      <circle cx="24" cy="30" r="2" fill="#333"/>
      <circle cx="36" cy="30" r="2" fill="#333"/>
      <circle cx="24.6" cy="29.5" r="0.6" fill="#fff"/>
      <circle cx="36.6" cy="29.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="2" ry="1" fill="#f8bbd0"/>
      <line x1="18" y1="34" x2="12" y2="33" stroke="#ffe0b2" stroke-width="0.8"/>
      <line x1="18" y1="35.5" x2="12" y2="36" stroke="#ffe0b2" stroke-width="0.8"/>
      <line x1="42" y1="34" x2="48" y2="33" stroke="#ffe0b2" stroke-width="0.8"/>
      <line x1="42" y1="35.5" x2="48" y2="36" stroke="#ffe0b2" stroke-width="0.8"/>
    </svg>`,

    'puffin': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="12" ry="14" fill="#333"/>
      <ellipse cx="30" cy="38" rx="8" ry="10" fill="#fff"/>
      <circle cx="25" cy="26" r="3" fill="#fff"/>
      <circle cx="35" cy="26" r="3" fill="#fff"/>
      <circle cx="25" cy="26" r="2" fill="#333"/>
      <circle cx="35" cy="26" r="2" fill="#333"/>
      <circle cx="25.5" cy="25.5" r="0.6" fill="#fff"/>
      <circle cx="35.5" cy="25.5" r="0.6" fill="#fff"/>
      <polygon points="30,30 24,34 30,33 36,34" fill="#ff6d00"/>
      <polygon points="30,30 26,33 30,32 34,33" fill="#ff8f00"/>
    </svg>`,

    'chinchilla': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="14" fill="#bdbdbd"/>
      <circle cx="16" cy="16" r="7" fill="#bdbdbd"/>
      <circle cx="44" cy="16" r="7" fill="#bdbdbd"/>
      <circle cx="16" cy="16" r="4.5" fill="#f8bbd0"/>
      <circle cx="44" cy="16" r="4.5" fill="#f8bbd0"/>
      <ellipse cx="30" cy="36" rx="10" ry="8" fill="#e0e0e0"/>
      <circle cx="24" cy="30" r="2.5" fill="#333"/>
      <circle cx="36" cy="30" r="2.5" fill="#333"/>
      <circle cx="24.7" cy="29.5" r="0.8" fill="#fff"/>
      <circle cx="36.7" cy="29.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#f8bbd0"/>
      <line x1="22" y1="34" x2="14" y2="33" stroke="#bdbdbd" stroke-width="0.6"/>
      <line x1="38" y1="34" x2="46" y2="33" stroke="#bdbdbd" stroke-width="0.6"/>
    </svg>`,

    'seahorse': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 10 Q38 14 36 22 Q38 28 34 34 Q36 40 32 46 Q28 50 26 46 Q22 44 24 40 Q20 36 24 32 Q20 26 24 22 Q22 16 30 10Z" fill="#ffcc80"/>
      <circle cx="32" cy="18" r="2" fill="#333"/>
      <circle cx="32.5" cy="17.5" r="0.6" fill="#fff"/>
      <path d="M35 20 Q37 19 36 22" fill="none" stroke="#ffcc80" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M30 12 Q32 8 34 12" fill="none" stroke="#ffa726" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="28" cy="26" r="1" fill="#ffa726" opacity="0.5"/>
      <circle cx="30" cy="32" r="1" fill="#ffa726" opacity="0.5"/>
      <circle cx="28" cy="38" r="1" fill="#ffa726" opacity="0.5"/>
    </svg>`,

    'wombat': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="13" fill="#8d6e63"/>
      <ellipse cx="30" cy="32" rx="14" ry="12" fill="#8d6e63"/>
      <circle cx="18" cy="22" r="4" fill="#8d6e63"/>
      <circle cx="42" cy="22" r="4" fill="#8d6e63"/>
      <circle cx="18" cy="22" r="2.5" fill="#a1887f"/>
      <circle cx="42" cy="22" r="2.5" fill="#a1887f"/>
      <ellipse cx="30" cy="34" rx="8" ry="6" fill="#a1887f"/>
      <circle cx="24" cy="28" r="2.5" fill="#333"/>
      <circle cx="36" cy="28" r="2.5" fill="#333"/>
      <circle cx="24.7" cy="27.5" r="0.8" fill="#fff"/>
      <circle cx="36.7" cy="27.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="3" ry="2" fill="#5d4037"/>
      <path d="M28 37 Q30 39 32 37" fill="none" stroke="#5d4037" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'blue-footed-booby': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="12" ry="14" fill="#efebe9"/>
      <ellipse cx="30" cy="34" rx="8" ry="9" fill="#fff"/>
      <circle cx="26" cy="24" r="2.5" fill="#333"/>
      <circle cx="34" cy="24" r="2.5" fill="#333"/>
      <circle cx="26.6" cy="23.5" r="0.7" fill="#fff"/>
      <circle cx="34.6" cy="23.5" r="0.7" fill="#fff"/>
      <polygon points="30,28 25,32 30,31 35,32" fill="#ffa726"/>
      <ellipse cx="24" cy="48" rx="5" ry="2" fill="#2196f3"/>
      <ellipse cx="36" cy="48" rx="5" ry="2" fill="#2196f3"/>
      <line x1="24" y1="44" x2="24" y2="48" stroke="#ffa726" stroke-width="2"/>
      <line x1="36" y1="44" x2="36" y2="48" stroke="#ffa726" stroke-width="2"/>
    </svg>`,

    'narwhal': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="34" rx="18" ry="10" fill="#b0bec5"/>
      <ellipse cx="32" cy="36" rx="12" ry="6" fill="#cfd8dc"/>
      <line x1="16" y1="30" x2="2" y2="16" stroke="#ffd54f" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="22" cy="30" r="2.5" fill="#333"/>
      <circle cx="22.6" cy="29.5" r="0.8" fill="#fff"/>
      <path d="M26 36 Q28 38 30 36" fill="none" stroke="#78909c" stroke-width="1" stroke-linecap="round"/>
      <path d="M44 30 Q50 26 48 32" fill="#90a4ae"/>
    </svg>`,

    'meerkat': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="38" rx="10" ry="14" fill="#d7ccc8"/>
      <ellipse cx="30" cy="22" rx="10" ry="10" fill="#d7ccc8"/>
      <ellipse cx="30" cy="24" rx="7" ry="7" fill="#efebe9"/>
      <circle cx="18" cy="16" r="3" fill="#d7ccc8"/>
      <circle cx="42" cy="16" r="3" fill="#d7ccc8"/>
      <circle cx="26" cy="20" r="2.5" fill="#333"/>
      <circle cx="34" cy="20" r="2.5" fill="#333"/>
      <circle cx="26.6" cy="19.5" r="0.7" fill="#fff"/>
      <circle cx="34.6" cy="19.5" r="0.7" fill="#fff"/>
      <ellipse cx="30" cy="25" rx="2" ry="1.2" fill="#5d4037"/>
      <path d="M28 27 Q30 28.5 32 27" fill="none" stroke="#5d4037" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'koala': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="22" r="8" fill="#90a4ae"/>
      <circle cx="44" cy="22" r="8" fill="#90a4ae"/>
      <circle cx="16" cy="22" r="5" fill="#cfd8dc"/>
      <circle cx="44" cy="22" r="5" fill="#cfd8dc"/>
      <ellipse cx="30" cy="34" rx="16" ry="14" fill="#90a4ae"/>
      <ellipse cx="30" cy="36" rx="10" ry="9" fill="#cfd8dc"/>
      <circle cx="24" cy="30" r="2.5" fill="#333"/>
      <circle cx="36" cy="30" r="2.5" fill="#333"/>
      <circle cx="24.7" cy="29.5" r="0.8" fill="#fff"/>
      <circle cx="36.7" cy="29.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="3.5" ry="2.5" fill="#546e7a"/>
      <path d="M27 39 Q30 41 33 39" fill="none" stroke="#546e7a" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'mantis-shrimp': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="14" ry="10" fill="#66bb6a"/>
      <ellipse cx="30" cy="32" rx="10" ry="7" fill="#81c784"/>
      <circle cx="22" cy="18" r="4" fill="#e91e63"/>
      <circle cx="38" cy="18" r="4" fill="#e91e63"/>
      <line x1="22" y1="14" x2="22" y2="8" stroke="#e91e63" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="38" y1="14" x2="38" y2="8" stroke="#e91e63" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="22" cy="18" r="2" fill="#fff"/>
      <circle cx="38" cy="18" r="2" fill="#fff"/>
      <circle cx="22" cy="18" r="1.2" fill="#333"/>
      <circle cx="38" cy="18" r="1.2" fill="#333"/>
      <path d="M26 34 Q30 36 34 34" fill="none" stroke="#2e7d32" stroke-width="1" stroke-linecap="round"/>
      <path d="M20 38 Q22 44 24 38 Q26 44 28 38 Q30 44 32 38 Q34 44 36 38 Q38 44 40 38" fill="none" stroke="#66bb6a" stroke-width="1.5"/>
    </svg>`,

    'clouded-leopard': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,28 14,14 24,24" fill="#d7ccc8"/>
      <polygon points="44,28 46,14 36,24" fill="#d7ccc8"/>
      <ellipse cx="30" cy="34" rx="16" ry="13" fill="#d7ccc8"/>
      <ellipse cx="24" cy="30" rx="4" ry="3" fill="#a1887f" opacity="0.4"/>
      <ellipse cx="38" cy="34" rx="3" ry="4" fill="#a1887f" opacity="0.4"/>
      <ellipse cx="30" cy="38" rx="5" ry="3" fill="#a1887f" opacity="0.4"/>
      <circle cx="25" cy="28" r="2.5" fill="#ffd54f"/>
      <circle cx="35" cy="28" r="2.5" fill="#ffd54f"/>
      <circle cx="25" cy="28" r="1.5" fill="#333"/>
      <circle cx="35" cy="28" r="1.5" fill="#333"/>
      <ellipse cx="30" cy="33" rx="2" ry="1.2" fill="#f8bbd0"/>
      <line x1="22" y1="33" x2="16" y2="32" stroke="#d7ccc8" stroke-width="0.6"/>
      <line x1="38" y1="33" x2="44" y2="32" stroke="#d7ccc8" stroke-width="0.6"/>
    </svg>`,

    'bee-hummingbird': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="28" cy="30" rx="10" ry="8" fill="#66bb6a"/>
      <circle cx="22" cy="26" r="7" fill="#81c784"/>
      <ellipse cx="22" cy="28" rx="4" ry="3" fill="#e0e0e0"/>
      <circle cx="19" cy="24" r="2" fill="#333"/>
      <circle cx="19.5" cy="23.5" r="0.6" fill="#fff"/>
      <line x1="16" y1="26" x2="6" y2="24" stroke="#ffa726" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M36 26 Q46 20 44 28" fill="#81c784" opacity="0.7"/>
      <path d="M36 28 Q48 24 44 32" fill="#66bb6a" opacity="0.7"/>
      <ellipse cx="24" cy="30" rx="3" ry="2" fill="#e91e63"/>
    </svg>`,

    'emperor-tamarin': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="14" ry="14" fill="#616161"/>
      <ellipse cx="30" cy="28" rx="10" ry="9" fill="#757575"/>
      <circle cx="24" cy="26" r="2.5" fill="#fff"/>
      <circle cx="36" cy="26" r="2.5" fill="#fff"/>
      <circle cx="24" cy="26" r="1.5" fill="#333"/>
      <circle cx="36" cy="26" r="1.5" fill="#333"/>
      <ellipse cx="30" cy="32" rx="2" ry="1.2" fill="#333"/>
      <path d="M24 35 Q22 44 20 42 Q18 46 16 44" fill="none" stroke="#e0e0e0" stroke-width="2" stroke-linecap="round"/>
      <path d="M36 35 Q38 44 40 42 Q42 46 44 44" fill="none" stroke="#e0e0e0" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

    'jellyfish': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="22" rx="16" ry="12" fill="#b39ddb" opacity="0.7"/>
      <ellipse cx="30" cy="22" rx="12" ry="8" fill="#ce93d8" opacity="0.5"/>
      <circle cx="24" cy="20" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="36" cy="20" r="2" fill="#fff" opacity="0.8"/>
      <circle cx="24" cy="20" r="1.2" fill="#333"/>
      <circle cx="36" cy="20" r="1.2" fill="#333"/>
      <path d="M27 25 Q30 27 33 25" fill="none" stroke="#7e57c2" stroke-width="0.8" stroke-linecap="round"/>
      <path d="M18 32 Q16 40 20 46" fill="none" stroke="#b39ddb" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <path d="M24 32 Q22 42 26 48" fill="none" stroke="#ce93d8" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <path d="M30 32 Q30 44 30 50" fill="none" stroke="#b39ddb" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <path d="M36 32 Q38 42 34 48" fill="none" stroke="#ce93d8" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <path d="M42 32 Q44 40 40 46" fill="none" stroke="#b39ddb" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
    </svg>`,

    'pygmy-marmoset': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="12" ry="12" fill="#ffab91"/>
      <path d="M20 20 Q18 14 22 18 Q20 12 26 20" fill="#ffab91"/>
      <path d="M40 20 Q42 14 38 18 Q40 12 34 20" fill="#ffab91"/>
      <ellipse cx="30" cy="34" rx="7" ry="6" fill="#fff3e0"/>
      <circle cx="25" cy="28" r="3" fill="#fff"/>
      <circle cx="35" cy="28" r="3" fill="#fff"/>
      <circle cx="25" cy="28" r="2" fill="#333"/>
      <circle cx="35" cy="28" r="2" fill="#333"/>
      <circle cx="25.5" cy="27.5" r="0.6" fill="#fff"/>
      <circle cx="35.5" cy="27.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="1.5" ry="1" fill="#333"/>
      <path d="M28 36 Q30 38 32 36" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'snow-leopard': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,28 14,14 24,24" fill="#cfd8dc"/>
      <polygon points="44,28 46,14 36,24" fill="#cfd8dc"/>
      <ellipse cx="30" cy="34" rx="16" ry="13" fill="#cfd8dc"/>
      <circle cx="22" cy="30" r="2" fill="#90a4ae" opacity="0.5"/>
      <circle cx="34" cy="28" r="2.5" fill="#90a4ae" opacity="0.5"/>
      <circle cx="28" cy="38" r="2" fill="#90a4ae" opacity="0.5"/>
      <circle cx="40" cy="36" r="1.5" fill="#90a4ae" opacity="0.5"/>
      <ellipse cx="30" cy="36" rx="8" ry="6" fill="#eceff1"/>
      <circle cx="25" cy="30" r="2.5" fill="#b2ebf2"/>
      <circle cx="35" cy="30" r="2.5" fill="#b2ebf2"/>
      <circle cx="25" cy="30" r="1.5" fill="#333"/>
      <circle cx="35" cy="30" r="1.5" fill="#333"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#f8bbd0"/>
    </svg>`,

    'clownfish': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="18" ry="12" fill="#ff8a65"/>
      <rect x="20" y="18" width="4" height="24" rx="2" fill="#fff" opacity="0.8"/>
      <rect x="32" y="20" width="4" height="20" rx="2" fill="#fff" opacity="0.8"/>
      <circle cx="16" cy="28" r="3" fill="#fff"/>
      <circle cx="16" cy="28" r="2" fill="#333"/>
      <circle cx="16.5" cy="27.5" r="0.6" fill="#fff"/>
      <path d="M46 24 Q52 20 48 30 Q52 40 46 36" fill="#ff8a65"/>
      <path d="M12 26 Q8 20 10 30 Q8 36 12 34" fill="#ff8a65"/>
    </svg>`,

    'red-eyed-tree-frog': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="10" fill="#66bb6a"/>
      <circle cx="20" cy="22" r="6" fill="#e53935"/>
      <circle cx="40" cy="22" r="6" fill="#e53935"/>
      <circle cx="20" cy="22" r="3.5" fill="#333"/>
      <circle cx="40" cy="22" r="3.5" fill="#333"/>
      <circle cx="21" cy="21" r="1" fill="#fff"/>
      <circle cx="41" cy="21" r="1" fill="#fff"/>
      <path d="M26 38 Q30 40 34 38" fill="none" stroke="#2e7d32" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="16" cy="44" r="3" fill="#ff8f00"/>
      <circle cx="44" cy="44" r="3" fill="#ff8f00"/>
    </svg>`,

    'platypus': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="18" ry="10" fill="#8d6e63"/>
      <ellipse cx="30" cy="32" rx="12" ry="10" fill="#a1887f"/>
      <ellipse cx="30" cy="38" rx="10" ry="4" fill="#795548"/>
      <path d="M14 36 Q6 36 10 40 Q4 38 14 38" fill="#795548"/>
      <circle cx="24" cy="28" r="2" fill="#333"/>
      <circle cx="36" cy="28" r="2" fill="#333"/>
      <circle cx="24.5" cy="27.5" r="0.6" fill="#fff"/>
      <circle cx="36.5" cy="27.5" r="0.6" fill="#fff"/>
      <ellipse cx="48" cy="36" rx="8" ry="3" fill="#8d6e63" transform="rotate(-10 48 36)"/>
    </svg>`,

    'manatee': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="28" cy="34" rx="20" ry="12" fill="#90a4ae"/>
      <ellipse cx="28" cy="36" rx="14" ry="8" fill="#b0bec5"/>
      <circle cx="20" cy="28" r="2.5" fill="#333"/>
      <circle cx="34" cy="28" r="2.5" fill="#333"/>
      <circle cx="20.6" cy="27.5" r="0.8" fill="#fff"/>
      <circle cx="34.6" cy="27.5" r="0.8" fill="#fff"/>
      <ellipse cx="27" cy="34" rx="4" ry="3" fill="#78909c"/>
      <path d="M46 30 Q52 28 50 34 Q52 38 46 36" fill="#90a4ae"/>
      <path d="M10 38 Q6 40 8 36" fill="#90a4ae"/>
      <path d="M14 40 Q10 42 12 38" fill="#90a4ae"/>
    </svg>`,

    'kakapo': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="14" ry="14" fill="#689f38"/>
      <ellipse cx="30" cy="30" rx="12" ry="10" fill="#7cb342"/>
      <circle cx="24" cy="26" r="4" fill="#c0ca33"/>
      <circle cx="36" cy="26" r="4" fill="#c0ca33"/>
      <circle cx="24" cy="26" r="2.5" fill="#333"/>
      <circle cx="36" cy="26" r="2.5" fill="#333"/>
      <circle cx="24.7" cy="25.5" r="0.8" fill="#fff"/>
      <circle cx="36.7" cy="25.5" r="0.8" fill="#fff"/>
      <polygon points="30,30 27,34 33,34" fill="#8d6e63"/>
      <circle cx="22" cy="32" r="2" fill="#aed581" opacity="0.5"/>
      <circle cx="38" cy="32" r="2" fill="#aed581" opacity="0.5"/>
    </svg>`,

    'flying-squirrel': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="12" ry="10" fill="#bcaaa4"/>
      <path d="M18 32 Q8 26 12 40 Q16 36 18 32Z" fill="#d7ccc8" opacity="0.6"/>
      <path d="M42 32 Q52 26 48 40 Q44 36 42 32Z" fill="#d7ccc8" opacity="0.6"/>
      <circle cx="16" cy="20" r="5" fill="#bcaaa4"/>
      <circle cx="44" cy="20" r="5" fill="#bcaaa4"/>
      <circle cx="16" cy="20" r="3" fill="#f8bbd0"/>
      <circle cx="44" cy="20" r="3" fill="#f8bbd0"/>
      <ellipse cx="30" cy="34" rx="7" ry="6" fill="#efebe9"/>
      <circle cx="25" cy="29" r="3" fill="#333"/>
      <circle cx="35" cy="29" r="3" fill="#333"/>
      <circle cx="25.8" cy="28.4" r="1" fill="#fff"/>
      <circle cx="35.8" cy="28.4" r="1" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="1.5" ry="1" fill="#f8bbd0"/>
    </svg>`,

    'blobfish': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="18" ry="14" fill="#f8bbd0"/>
      <ellipse cx="30" cy="36" rx="14" ry="8" fill="#fce4ec"/>
      <circle cx="22" cy="26" r="3.5" fill="#fff"/>
      <circle cx="38" cy="26" r="3.5" fill="#fff"/>
      <circle cx="22" cy="27" r="2" fill="#333"/>
      <circle cx="38" cy="27" r="2" fill="#333"/>
      <ellipse cx="30" cy="36" rx="5" ry="3.5" fill="#f48fb1"/>
      <path d="M26 40 Q30 42 34 40" fill="none" stroke="#e91e63" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'alpaca': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 14 Q16 8 22 10 Q18 4 26 10 Q24 6 30 12 Q34 6 34 10 Q38 4 38 10 Q42 8 40 14" fill="#efebe9"/>
      <ellipse cx="30" cy="24" rx="12" ry="10" fill="#efebe9"/>
      <ellipse cx="30" cy="40" rx="14" ry="10" fill="#d7ccc8"/>
      <circle cx="25" cy="22" r="2.5" fill="#333"/>
      <circle cx="35" cy="22" r="2.5" fill="#333"/>
      <circle cx="25.7" cy="21.5" r="0.8" fill="#fff"/>
      <circle cx="35.7" cy="21.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="28" rx="3" ry="2" fill="#f8bbd0"/>
      <path d="M28 30 Q30 31.5 32 30" fill="none" stroke="#bcaaa4" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'leafy-seadragon': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 8 Q36 14 34 22 Q38 28 34 34 Q36 40 32 46" fill="none" stroke="#c5e1a5" stroke-width="3" stroke-linecap="round"/>
      <path d="M34 14 Q42 10 38 18" fill="#a5d6a7"/>
      <path d="M36 22 Q44 20 40 28" fill="#81c784"/>
      <path d="M34 32 Q42 30 38 38" fill="#a5d6a7"/>
      <path d="M28 18 Q20 14 24 22" fill="#81c784"/>
      <path d="M28 28 Q20 26 24 34" fill="#a5d6a7"/>
      <circle cx="28" cy="12" r="2" fill="#333"/>
      <circle cx="28.5" cy="11.5" r="0.6" fill="#fff"/>
      <path d="M26 16 Q24 14 22 16" fill="none" stroke="#c5e1a5" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'aye-aye': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="14" r="7" fill="#5d4037"/>
      <circle cx="42" cy="14" r="7" fill="#5d4037"/>
      <circle cx="18" cy="14" r="4.5" fill="#4e342e"/>
      <circle cx="42" cy="14" r="4.5" fill="#4e342e"/>
      <ellipse cx="30" cy="32" rx="14" ry="14" fill="#5d4037"/>
      <circle cx="23" cy="26" r="5" fill="#ffd54f"/>
      <circle cx="37" cy="26" r="5" fill="#ffd54f"/>
      <circle cx="23" cy="26" r="3" fill="#333"/>
      <circle cx="37" cy="26" r="3" fill="#333"/>
      <circle cx="24" cy="25" r="1" fill="#fff"/>
      <circle cx="38" cy="25" r="1" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="2" ry="1.2" fill="#333"/>
      <line x1="40" y1="40" x2="48" y2="50" stroke="#5d4037" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,

    'peacock-spider': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 12 Q14 16 16 30 Q20 20 30 18 Q40 20 44 30 Q46 16 30 12Z" fill="#7e57c2"/>
      <circle cx="24" cy="20" r="2" fill="#e91e63"/>
      <circle cx="30" cy="16" r="2" fill="#2196f3"/>
      <circle cx="36" cy="20" r="2" fill="#ff8f00"/>
      <ellipse cx="30" cy="34" rx="8" ry="8" fill="#333"/>
      <circle cx="30" cy="24" r="5" fill="#4e342e"/>
      <circle cx="27" cy="22" r="2.5" fill="#fff"/>
      <circle cx="33" cy="22" r="2.5" fill="#fff"/>
      <circle cx="27" cy="22.5" r="1.5" fill="#4caf50"/>
      <circle cx="33" cy="22.5" r="1.5" fill="#4caf50"/>
      <circle cx="27" cy="22.5" r="0.8" fill="#333"/>
      <circle cx="33" cy="22.5" r="0.8" fill="#333"/>
      <line x1="22" y1="36" x2="14" y2="44" stroke="#333" stroke-width="1"/>
      <line x1="24" y1="40" x2="18" y2="48" stroke="#333" stroke-width="1"/>
      <line x1="38" y1="36" x2="46" y2="44" stroke="#333" stroke-width="1"/>
      <line x1="36" y1="40" x2="42" y2="48" stroke="#333" stroke-width="1"/>
    </svg>`,

    'numbat': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="20" ry="10" fill="#ff8a65"/>
      <rect x="18" y="30" width="24" height="2" rx="1" fill="#fff" opacity="0.5"/>
      <rect x="18" y="34" width="24" height="2" rx="1" fill="#fff" opacity="0.5"/>
      <rect x="18" y="38" width="24" height="2" rx="1" fill="#fff" opacity="0.5"/>
      <circle cx="18" cy="28" r="8" fill="#ff8a65"/>
      <ellipse cx="18" cy="30" rx="5" ry="4" fill="#ffccbc"/>
      <line x1="10" y1="26" x2="6" y2="22" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="14" cy="26" r="2" fill="#333"/>
      <circle cx="14.5" cy="25.5" r="0.6" fill="#fff"/>
      <circle cx="18" cy="30" r="1" fill="#333"/>
      <path d="M48 32 Q54 28 52 36 Q56 34 50 38" fill="#ff8a65"/>
    </svg>`,

    'golden-poison-frog': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="10" fill="#ffd54f"/>
      <ellipse cx="30" cy="34" rx="12" ry="8" fill="#ffeb3b"/>
      <circle cx="22" cy="24" r="5" fill="#ffd54f"/>
      <circle cx="38" cy="24" r="5" fill="#ffd54f"/>
      <circle cx="22" cy="24" r="3" fill="#333"/>
      <circle cx="38" cy="24" r="3" fill="#333"/>
      <circle cx="22.8" cy="23.2" r="1" fill="#fff"/>
      <circle cx="38.8" cy="23.2" r="1" fill="#fff"/>
      <path d="M26 38 Q30 40 34 38" fill="none" stroke="#f57f17" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="18" cy="46" r="3" fill="#ffd54f"/>
      <circle cx="42" cy="46" r="3" fill="#ffd54f"/>
    </svg>`,

    'okapi': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="10" fill="#5d4037"/>
      <rect x="20" y="42" width="4" height="10" rx="2" fill="#5d4037"/>
      <rect x="36" y="42" width="4" height="10" rx="2" fill="#5d4037"/>
      <rect x="20" y="44" width="4" height="3" rx="2" fill="#fff"/>
      <rect x="36" y="44" width="4" height="3" rx="2" fill="#fff"/>
      <rect x="20" y="48" width="4" height="2" rx="1" fill="#fff"/>
      <rect x="36" y="48" width="4" height="2" rx="1" fill="#fff"/>
      <ellipse cx="26" cy="24" rx="8" ry="8" fill="#5d4037"/>
      <ellipse cx="26" cy="26" rx="5" ry="4" fill="#795548"/>
      <circle cx="20" cy="8" r="3" fill="#5d4037"/>
      <circle cx="32" cy="8" r="3" fill="#5d4037"/>
      <circle cx="23" cy="22" r="2" fill="#333"/>
      <circle cx="23.5" cy="21.5" r="0.6" fill="#fff"/>
      <ellipse cx="26" cy="27" rx="2" ry="1" fill="#333"/>
    </svg>`,

    'harp-seal': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="10" fill="#f5f5f5"/>
      <ellipse cx="24" cy="28" rx="12" ry="10" fill="#f5f5f5"/>
      <circle cx="20" cy="24" r="3.5" fill="#333"/>
      <circle cx="30" cy="24" r="3.5" fill="#333"/>
      <circle cx="20.8" cy="23.2" r="1.2" fill="#fff"/>
      <circle cx="30.8" cy="23.2" r="1.2" fill="#fff"/>
      <ellipse cx="25" cy="30" rx="2.5" ry="1.5" fill="#333"/>
      <path d="M22 33 Q25 35 28 33" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="18" y1="29" x2="12" y2="28" stroke="#ccc" stroke-width="0.6"/>
      <line x1="32" y1="29" x2="38" y2="28" stroke="#ccc" stroke-width="0.6"/>
      <circle cx="18" cy="27" r="2" fill="#f8bbd0" opacity="0.3"/>
      <circle cx="32" cy="27" r="2" fill="#f8bbd0" opacity="0.3"/>
    </svg>`,

    'kiwi': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="12" fill="#795548"/>
      <ellipse cx="24" cy="28" rx="10" ry="10" fill="#8d6e63"/>
      <circle cx="20" cy="24" r="2.5" fill="#333"/>
      <circle cx="20.6" cy="23.5" r="0.8" fill="#fff"/>
      <line x1="28" y1="28" x2="44" y2="24" stroke="#a1887f" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="24" cy="46" r="3" fill="#795548"/>
      <circle cx="34" cy="46" r="3" fill="#795548"/>
    </svg>`,

    'fossa': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="10" fill="#a1887f"/>
      <ellipse cx="22" cy="26" rx="10" ry="9" fill="#a1887f"/>
      <polygon points="14,20 12,10 20,18" fill="#a1887f"/>
      <polygon points="30,20 32,10 24,18" fill="#a1887f"/>
      <ellipse cx="22" cy="28" rx="6" ry="4" fill="#d7ccc8"/>
      <circle cx="18" cy="24" r="2.5" fill="#ffd54f"/>
      <circle cx="26" cy="24" r="2.5" fill="#ffd54f"/>
      <circle cx="18" cy="24" r="1.5" fill="#333"/>
      <circle cx="26" cy="24" r="1.5" fill="#333"/>
      <ellipse cx="22" cy="28" rx="1.5" ry="1" fill="#f8bbd0"/>
      <path d="M48 34 Q56 30 54 38 Q56 42 48 38" fill="#a1887f"/>
    </svg>`,

    'otter-shrew': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="10" fill="#795548"/>
      <ellipse cx="22" cy="28" rx="10" ry="8" fill="#8d6e63"/>
      <ellipse cx="22" cy="30" rx="6" ry="4" fill="#d7ccc8"/>
      <circle cx="18" cy="26" r="2" fill="#333"/>
      <circle cx="26" cy="26" r="2" fill="#333"/>
      <circle cx="18.5" cy="25.5" r="0.6" fill="#fff"/>
      <circle cx="26.5" cy="25.5" r="0.6" fill="#fff"/>
      <ellipse cx="22" cy="30" rx="1.5" ry="1" fill="#333"/>
      <line x1="14" y1="30" x2="6" y2="28" stroke="#8d6e63" stroke-width="0.8"/>
      <line x1="14" y1="31" x2="6" y2="32" stroke="#8d6e63" stroke-width="0.8"/>
      <path d="M46 34 Q54 30 52 38 Q50 42 46 38" fill="#795548"/>
    </svg>`
  }
};
