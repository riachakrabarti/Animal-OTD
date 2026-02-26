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
    </svg>`,

    'tarsier': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="12" ry="12" fill="#8d6e63"/>
      <circle cx="22" cy="26" r="7" fill="#ffd54f"/>
      <circle cx="38" cy="26" r="7" fill="#ffd54f"/>
      <circle cx="22" cy="26" r="5" fill="#333"/>
      <circle cx="38" cy="26" r="5" fill="#333"/>
      <circle cx="23.5" cy="24.5" r="1.5" fill="#fff"/>
      <circle cx="39.5" cy="24.5" r="1.5" fill="#fff"/>
      <circle cx="16" cy="18" r="4" fill="#8d6e63"/>
      <circle cx="44" cy="18" r="4" fill="#8d6e63"/>
      <ellipse cx="30" cy="36" rx="2" ry="1" fill="#5d4037"/>
      <path d="M28 39 Q30 40.5 32 39" fill="none" stroke="#5d4037" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'red-fox': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="14,28 8,8 24,22" fill="#e65100"/>
      <polygon points="46,28 52,8 36,22" fill="#e65100"/>
      <polygon points="15,27 10,12 23,22" fill="#ff8f00"/>
      <polygon points="45,27 50,12 37,22" fill="#ff8f00"/>
      <ellipse cx="30" cy="34" rx="16" ry="13" fill="#e65100"/>
      <ellipse cx="30" cy="38" rx="8" ry="6" fill="#fff"/>
      <circle cx="24" cy="30" r="2.5" fill="#333"/>
      <circle cx="36" cy="30" r="2.5" fill="#333"/>
      <circle cx="24.7" cy="29.5" r="0.8" fill="#fff"/>
      <circle cx="36.7" cy="29.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#333"/>
      <path d="M28 38 Q30 39.5 32 38" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'mandrill': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="16" ry="15" fill="#795548"/>
      <ellipse cx="30" cy="34" rx="10" ry="10" fill="#a1887f"/>
      <path d="M26 28 L26 38" stroke="#1565c0" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M34 28 L34 38" stroke="#1565c0" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="30" cy="36" rx="4" ry="3" fill="#e53935"/>
      <circle cx="24" cy="26" r="2.5" fill="#ffd54f"/>
      <circle cx="36" cy="26" r="2.5" fill="#ffd54f"/>
      <circle cx="24" cy="26" r="1.5" fill="#333"/>
      <circle cx="36" cy="26" r="1.5" fill="#333"/>
      <circle cx="29" cy="35" r="1" fill="#333"/>
      <circle cx="31" cy="35" r="1" fill="#333"/>
    </svg>`,

    'harpy-eagle': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="14" fill="#546e7a"/>
      <ellipse cx="30" cy="38" rx="10" ry="9" fill="#eceff1"/>
      <path d="M22 14 Q20 6 26 16" fill="#37474f"/>
      <path d="M26 12 Q26 4 30 14" fill="#37474f"/>
      <path d="M34 12 Q34 4 30 14" fill="#37474f"/>
      <path d="M38 14 Q40 6 34 16" fill="#37474f"/>
      <circle cx="25" cy="28" r="3" fill="#fff"/>
      <circle cx="35" cy="28" r="3" fill="#fff"/>
      <circle cx="25" cy="28" r="2" fill="#333"/>
      <circle cx="35" cy="28" r="2" fill="#333"/>
      <polygon points="30,32 27,36 33,36" fill="#ffa726"/>
    </svg>`,

    'glass-frog': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="10" fill="#a5d6a7" opacity="0.7"/>
      <ellipse cx="30" cy="36" rx="10" ry="6" fill="#c8e6c9" opacity="0.5"/>
      <circle cx="20" cy="24" r="5" fill="#a5d6a7"/>
      <circle cx="40" cy="24" r="5" fill="#a5d6a7"/>
      <circle cx="20" cy="24" r="3" fill="#333"/>
      <circle cx="40" cy="24" r="3" fill="#333"/>
      <circle cx="21" cy="23" r="1" fill="#fff"/>
      <circle cx="41" cy="23" r="1" fill="#fff"/>
      <path d="M27 38 Q30 40 33 38" fill="none" stroke="#66bb6a" stroke-width="1" stroke-linecap="round"/>
      <ellipse cx="30" cy="36" rx="4" ry="2.5" fill="#ef9a9a" opacity="0.4"/>
    </svg>`,

    'emperor-penguin': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="16" fill="#37474f"/>
      <ellipse cx="30" cy="38" rx="10" ry="12" fill="#fff"/>
      <ellipse cx="30" cy="28" rx="10" ry="8" fill="#37474f"/>
      <ellipse cx="24" cy="28" rx="3" ry="2.5" fill="#ffd54f"/>
      <ellipse cx="36" cy="28" rx="3" ry="2.5" fill="#ffd54f"/>
      <circle cx="25" cy="24" r="2" fill="#333"/>
      <circle cx="35" cy="24" r="2" fill="#333"/>
      <circle cx="25.5" cy="23.5" r="0.6" fill="#fff"/>
      <circle cx="35.5" cy="23.5" r="0.6" fill="#fff"/>
      <polygon points="30,28 28,32 32,32" fill="#ff8f00"/>
    </svg>`,

    'star-nosed-mole': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="18" ry="12" fill="#5d4037"/>
      <ellipse cx="30" cy="34" rx="12" ry="8" fill="#6d4c41"/>
      <circle cx="24" cy="30" r="1.5" fill="#333"/>
      <circle cx="36" cy="30" r="1.5" fill="#333"/>
      <circle cx="30" cy="34" r="4" fill="#f48fb1"/>
      <path d="M28 30 L26 28" stroke="#f48fb1" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M32 30 L34 28" stroke="#f48fb1" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M27 33 L24 32" stroke="#f48fb1" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M33 33 L36 32" stroke="#f48fb1" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M28 36 L26 38" stroke="#f48fb1" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M32 36 L34 38" stroke="#f48fb1" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M30 30 L30 28" stroke="#f48fb1" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M30 38 L30 40" stroke="#f48fb1" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,

    'flamingo': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 20 Q28 30 26 40 Q24 46 28 48" fill="none" stroke="#f48fb1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="30" cy="16" r="8" fill="#f48fb1"/>
      <circle cx="30" cy="18" rx="5" ry="4" fill="#fce4ec"/>
      <circle cx="28" cy="14" r="2" fill="#333"/>
      <circle cx="28.5" cy="13.5" r="0.6" fill="#fff"/>
      <path d="M32 18 Q36 17 34 20" fill="#333"/>
      <line x1="28" y1="48" x2="28" y2="56" stroke="#f48fb1" stroke-width="2"/>
      <line x1="32" y1="46" x2="32" y2="56" stroke="#f48fb1" stroke-width="2"/>
    </svg>`,

    'chameleon': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="16" ry="10" fill="#4caf50"/>
      <circle cx="18" cy="26" r="6" fill="#66bb6a"/>
      <circle cx="18" cy="26" r="4" fill="#fff"/>
      <circle cx="18" cy="26" r="2.5" fill="#333"/>
      <circle cx="18.7" cy="25.5" r="0.8" fill="#fff"/>
      <path d="M24 28 Q20 26 16 28" fill="none" stroke="#2e7d32" stroke-width="1"/>
      <path d="M44 32 Q52 30 56 28" fill="none" stroke="#f44336" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M46 34 Q54 38 50 30" fill="#4caf50"/>
      <line x1="22" y1="42" x2="22" y2="46" stroke="#4caf50" stroke-width="2" stroke-linecap="round"/>
      <line x1="38" y1="42" x2="38" y2="46" stroke="#4caf50" stroke-width="2" stroke-linecap="round"/>
      <path d="M14 20 Q16 14 20 18" fill="#4caf50"/>
    </svg>`,

    'ring-tailed-lemur': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="12" ry="10" fill="#9e9e9e"/>
      <circle cx="30" cy="24" r="10" fill="#9e9e9e"/>
      <circle cx="30" cy="26" rx="7" ry="6" fill="#fff"/>
      <circle cx="25" cy="22" r="3" fill="#ffd54f"/>
      <circle cx="35" cy="22" r="3" fill="#ffd54f"/>
      <circle cx="25" cy="22" r="2" fill="#333"/>
      <circle cx="35" cy="22" r="2" fill="#333"/>
      <circle cx="25.5" cy="21.5" r="0.6" fill="#fff"/>
      <circle cx="35.5" cy="21.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="28" rx="2" ry="1.2" fill="#333"/>
      <path d="M44 30 Q50 26 48 32 Q52 28 50 34 Q54 30 52 36" fill="none" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M44 30 Q50 26 48 32 Q52 28 50 34 Q54 30 52 36" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3 3"/>
    </svg>`,

    'thorny-devil': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="8" fill="#ff8f00"/>
      <ellipse cx="24" cy="30" rx="8" ry="7" fill="#ffa726"/>
      <path d="M14 30 L12 24 M18 28 L16 22 M22 26 L22 20 M26 26 L28 20 M34 28 L36 22 M38 30 L40 24 M42 34 L44 28" fill="none" stroke="#e65100" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="20" cy="28" r="2" fill="#333"/>
      <circle cx="28" cy="28" r="2" fill="#333"/>
      <circle cx="20.5" cy="27.5" r="0.6" fill="#fff"/>
      <circle cx="28.5" cy="27.5" r="0.6" fill="#fff"/>
      <path d="M22 33 Q24 34 26 33" fill="none" stroke="#e65100" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'red-crowned-crane': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="12" ry="10" fill="#eceff1"/>
      <path d="M30 26 Q30 14 28 10" fill="none" stroke="#eceff1" stroke-width="3" stroke-linecap="round"/>
      <circle cx="28" cy="10" r="5" fill="#eceff1"/>
      <circle cx="28" cy="8" r="2.5" fill="#e53935"/>
      <circle cx="26" cy="10" r="1.5" fill="#333"/>
      <circle cx="26.4" cy="9.6" r="0.5" fill="#fff"/>
      <line x1="30" y1="12" x2="36" y2="10" stroke="#546e7a" stroke-width="2" stroke-linecap="round"/>
      <path d="M22 36 Q18 32 14 36" fill="#333"/>
      <path d="M38 36 Q42 32 46 36" fill="#333"/>
      <line x1="26" y1="46" x2="24" y2="56" stroke="#546e7a" stroke-width="2"/>
      <line x1="34" y1="46" x2="36" y2="56" stroke="#546e7a" stroke-width="2"/>
    </svg>`,

    'blue-dragon': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="8" ry="12" fill="#42a5f5"/>
      <ellipse cx="30" cy="30" rx="5" ry="8" fill="#90caf9"/>
      <path d="M22 24 Q14 18 10 24 Q14 20 18 26" fill="#1e88e5"/>
      <path d="M22 30 Q12 26 8 32 Q12 28 18 32" fill="#42a5f5"/>
      <path d="M22 36 Q14 34 10 40 Q14 36 18 38" fill="#1e88e5"/>
      <path d="M38 24 Q46 18 50 24 Q46 20 42 26" fill="#1e88e5"/>
      <path d="M38 30 Q48 26 52 32 Q48 28 42 32" fill="#42a5f5"/>
      <path d="M38 36 Q46 34 50 40 Q46 36 42 38" fill="#1e88e5"/>
      <circle cx="27" cy="24" r="1.5" fill="#333"/>
      <circle cx="33" cy="24" r="1.5" fill="#333"/>
      <circle cx="27.4" cy="23.6" r="0.5" fill="#fff"/>
      <circle cx="33.4" cy="23.6" r="0.5" fill="#fff"/>
    </svg>`,

    'wolverine': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="12" fill="#5d4037"/>
      <ellipse cx="30" cy="34" rx="14" ry="10" fill="#4e342e"/>
      <path d="M14 30 Q30 24 46 30" fill="none" stroke="#ffa726" stroke-width="3" stroke-linecap="round"/>
      <circle cx="16" cy="24" r="3" fill="#5d4037"/>
      <circle cx="44" cy="24" r="3" fill="#5d4037"/>
      <circle cx="24" cy="30" r="2.5" fill="#333"/>
      <circle cx="36" cy="30" r="2.5" fill="#333"/>
      <circle cx="24.7" cy="29.5" r="0.8" fill="#fff"/>
      <circle cx="36.7" cy="29.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="3" ry="2" fill="#3e2723"/>
      <path d="M27 38 Q30 40 33 38" fill="none" stroke="#3e2723" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'cassowary': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="40" rx="14" ry="12" fill="#263238"/>
      <path d="M30 8 Q30 16 28 22" fill="none" stroke="#78909c" stroke-width="4" stroke-linecap="round"/>
      <polygon points="30,4 26,14 34,14" fill="#1565c0"/>
      <circle cx="28" cy="22" r="7" fill="#1565c0"/>
      <circle cx="28" cy="24" rx="5" ry="4" fill="#e53935"/>
      <circle cx="25" cy="20" r="2" fill="#333"/>
      <circle cx="25.5" cy="19.5" r="0.6" fill="#fff"/>
      <polygon points="30,24 28,28 32,28" fill="#546e7a"/>
    </svg>`,

    'margay': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,28 14,14 24,24" fill="#a1887f"/>
      <polygon points="44,28 46,14 36,24" fill="#a1887f"/>
      <ellipse cx="30" cy="34" rx="16" ry="13" fill="#a1887f"/>
      <circle cx="24" cy="30" r="3" fill="#5d4037" opacity="0.4"/>
      <circle cx="36" cy="34" r="2.5" fill="#5d4037" opacity="0.4"/>
      <circle cx="28" cy="38" r="2" fill="#5d4037" opacity="0.4"/>
      <ellipse cx="30" cy="36" rx="8" ry="6" fill="#d7ccc8"/>
      <circle cx="25" cy="28" r="3" fill="#ffd54f"/>
      <circle cx="35" cy="28" r="3" fill="#ffd54f"/>
      <circle cx="25" cy="28" r="2" fill="#333"/>
      <circle cx="35" cy="28" r="2" fill="#333"/>
      <circle cx="25.6" cy="27.5" r="0.6" fill="#fff"/>
      <circle cx="35.6" cy="27.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="2" ry="1" fill="#f8bbd0"/>
    </svg>`,

    'axolotl-blue': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="14" ry="10" fill="#795548"/>
      <circle cx="22" cy="22" r="3" fill="#795548"/>
      <circle cx="38" cy="22" r="3" fill="#795548"/>
      <circle cx="22" cy="22" r="2" fill="#333"/>
      <circle cx="38" cy="22" r="2" fill="#333"/>
      <circle cx="22.5" cy="21.5" r="0.6" fill="#fff"/>
      <circle cx="38.5" cy="21.5" r="0.6" fill="#fff"/>
      <circle cx="26" cy="30" r="1.5" fill="#1e88e5"/>
      <circle cx="34" cy="28" r="1.5" fill="#1e88e5"/>
      <circle cx="30" cy="34" r="1.5" fill="#1e88e5"/>
      <circle cx="22" cy="34" r="1" fill="#1e88e5"/>
      <circle cx="38" cy="32" r="1" fill="#1e88e5"/>
      <path d="M20 38 Q18 44 22 42 Q20 46 26 42" fill="none" stroke="#795548" stroke-width="2" stroke-linecap="round"/>
      <path d="M28 38 Q28 46 30 42 Q32 46 32 38" fill="none" stroke="#795548" stroke-width="2" stroke-linecap="round"/>
      <path d="M40 38 Q42 44 38 42 Q40 46 34 42" fill="none" stroke="#795548" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

    'pygmy-hippo': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="12" fill="#78909c"/>
      <ellipse cx="30" cy="30" rx="14" ry="12" fill="#78909c"/>
      <circle cx="18" cy="20" r="4" fill="#78909c"/>
      <circle cx="42" cy="20" r="4" fill="#78909c"/>
      <circle cx="18" cy="20" r="2.5" fill="#90a4ae"/>
      <circle cx="42" cy="20" r="2.5" fill="#90a4ae"/>
      <ellipse cx="30" cy="34" rx="8" ry="5" fill="#90a4ae"/>
      <circle cx="24" cy="26" r="2.5" fill="#333"/>
      <circle cx="36" cy="26" r="2.5" fill="#333"/>
      <circle cx="24.7" cy="25.5" r="0.8" fill="#fff"/>
      <circle cx="36.7" cy="25.5" r="0.8" fill="#fff"/>
      <circle cx="28" cy="33" r="1" fill="#333"/>
      <circle cx="32" cy="33" r="1" fill="#333"/>
      <path d="M27 36 Q30 38 33 36" fill="none" stroke="#546e7a" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'binturong': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="12" fill="#37474f"/>
      <ellipse cx="30" cy="30" rx="12" ry="10" fill="#37474f"/>
      <circle cx="18" cy="22" r="4" fill="#37474f"/>
      <circle cx="42" cy="22" r="4" fill="#37474f"/>
      <circle cx="18" cy="22" r="2.5" fill="#546e7a"/>
      <circle cx="42" cy="22" r="2.5" fill="#546e7a"/>
      <ellipse cx="30" cy="32" rx="7" ry="5" fill="#455a64"/>
      <circle cx="25" cy="27" r="2.5" fill="#333"/>
      <circle cx="35" cy="27" r="2.5" fill="#333"/>
      <circle cx="25.6" cy="26.5" r="0.8" fill="#fff"/>
      <circle cx="35.6" cy="26.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="32" rx="2.5" ry="1.5" fill="#546e7a"/>
      <line x1="22" y1="31" x2="16" y2="30" stroke="#37474f" stroke-width="0.8"/>
      <line x1="38" y1="31" x2="44" y2="30" stroke="#37474f" stroke-width="0.8"/>
      <path d="M44 38 Q52 36 50 42 Q52 46 48 44" fill="#37474f"/>
    </svg>`,

    'proboscis-monkey': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="14" ry="14" fill="#ffab91"/>
      <ellipse cx="30" cy="32" rx="10" ry="10" fill="#ffccbc"/>
      <circle cx="24" cy="24" r="2.5" fill="#333"/>
      <circle cx="36" cy="24" r="2.5" fill="#333"/>
      <circle cx="24.6" cy="23.5" r="0.8" fill="#fff"/>
      <circle cx="36.6" cy="23.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="5" ry="6" fill="#ff8a65"/>
      <circle cx="28" cy="32" r="1" fill="#333"/>
      <circle cx="32" cy="32" r="1" fill="#333"/>
      <path d="M27 40 Q30 42 33 40" fill="none" stroke="#e64a19" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'snowy-owl': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="16" fill="#eceff1"/>
      <ellipse cx="30" cy="38" rx="12" ry="10" fill="#fff"/>
      <circle cx="22" cy="28" r="5" fill="#fff"/>
      <circle cx="38" cy="28" r="5" fill="#fff"/>
      <circle cx="22" cy="28" r="3" fill="#ffd54f"/>
      <circle cx="38" cy="28" r="3" fill="#ffd54f"/>
      <circle cx="22" cy="28" r="2" fill="#333"/>
      <circle cx="38" cy="28" r="2" fill="#333"/>
      <circle cx="22.6" cy="27.4" r="0.7" fill="#fff"/>
      <circle cx="38.6" cy="27.4" r="0.7" fill="#fff"/>
      <polygon points="30,32 28,35 32,35" fill="#37474f"/>
      <circle cx="20" cy="36" r="1" fill="#90a4ae" opacity="0.4"/>
      <circle cx="34" cy="34" r="1" fill="#90a4ae" opacity="0.4"/>
      <circle cx="40" cy="38" r="1" fill="#90a4ae" opacity="0.4"/>
    </svg>`,

    'giant-panda': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="14" fill="#fff"/>
      <circle cx="16" cy="20" r="5" fill="#263238"/>
      <circle cx="44" cy="20" r="5" fill="#263238"/>
      <ellipse cx="22" cy="28" rx="5" ry="4.5" fill="#263238"/>
      <ellipse cx="38" cy="28" rx="5" ry="4.5" fill="#263238"/>
      <circle cx="22" cy="28" r="2.5" fill="#fff"/>
      <circle cx="38" cy="28" r="2.5" fill="#fff"/>
      <circle cx="22" cy="28" r="1.5" fill="#333"/>
      <circle cx="38" cy="28" r="1.5" fill="#333"/>
      <circle cx="22.5" cy="27.5" r="0.5" fill="#fff"/>
      <circle cx="38.5" cy="27.5" r="0.5" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="3" ry="2" fill="#333"/>
      <path d="M27 38 Q30 40 33 38" fill="none" stroke="#333" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'sloth': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="14" fill="#8d6e63"/>
      <ellipse cx="30" cy="36" rx="12" ry="10" fill="#d7ccc8"/>
      <circle cx="24" cy="28" r="4" fill="#fff"/>
      <circle cx="36" cy="28" r="4" fill="#fff"/>
      <circle cx="24" cy="29" r="2" fill="#333"/>
      <circle cx="36" cy="29" r="2" fill="#333"/>
      <circle cx="24.5" cy="28.5" r="0.6" fill="#fff"/>
      <circle cx="36.5" cy="28.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="3" ry="2" fill="#a1887f"/>
      <path d="M27 37 Q30 40 33 37" fill="none" stroke="#795548" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M14 26 Q10 22 8 28" fill="none" stroke="#8d6e63" stroke-width="3" stroke-linecap="round"/>
      <path d="M46 26 Q50 22 52 28" fill="none" stroke="#8d6e63" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

    'secretary-bird': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="10" ry="12" fill="#eceff1"/>
      <ellipse cx="30" cy="34" rx="8" ry="8" fill="#cfd8dc"/>
      <circle cx="30" cy="20" r="7" fill="#eceff1"/>
      <path d="M34 14 Q38 8 36 14 Q40 10 38 16 Q42 12 40 18" fill="#333"/>
      <circle cx="27" cy="18" r="2" fill="#333"/>
      <circle cx="27.5" cy="17.5" r="0.6" fill="#fff"/>
      <polygon points="30,22 27,26 33,26" fill="#ff8f00"/>
      <line x1="26" y1="42" x2="24" y2="54" stroke="#ffa726" stroke-width="2"/>
      <line x1="34" y1="42" x2="36" y2="54" stroke="#ffa726" stroke-width="2"/>
      <ellipse cx="30" cy="18" rx="5" ry="3" fill="#333" opacity="0.2"/>
    </svg>`,

    'porcupine': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="38" rx="16" ry="10" fill="#795548"/>
      <path d="M16 32 L14 18 M20 30 L18 16 M24 28 L24 14 M28 28 L28 12 M32 28 L32 12 M36 28 L36 14 M40 30 L42 16 M44 32 L46 18" fill="none" stroke="#a1887f" stroke-width="1.5" stroke-linecap="round"/>
      <ellipse cx="22" cy="36" rx="10" ry="8" fill="#d7ccc8"/>
      <circle cx="18" cy="32" r="2" fill="#333"/>
      <circle cx="26" cy="32" r="2" fill="#333"/>
      <circle cx="18.5" cy="31.5" r="0.6" fill="#fff"/>
      <circle cx="26.5" cy="31.5" r="0.6" fill="#fff"/>
      <circle cx="22" cy="36" r="1.5" fill="#333"/>
    </svg>`,

    'serval': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="18,28 14,8 26,22" fill="#ffc107"/>
      <polygon points="42,28 46,8 34,22" fill="#ffc107"/>
      <polygon points="19,27 16,12 25,22" fill="#ffb300"/>
      <polygon points="41,27 44,12 35,22" fill="#ffb300"/>
      <ellipse cx="30" cy="34" rx="14" ry="12" fill="#ffc107"/>
      <circle cx="22" cy="32" r="2" fill="#333" opacity="0.3"/>
      <circle cx="38" cy="30" r="1.5" fill="#333" opacity="0.3"/>
      <circle cx="30" cy="36" r="1.5" fill="#333" opacity="0.3"/>
      <ellipse cx="30" cy="36" rx="7" ry="5" fill="#fff8e1"/>
      <circle cx="25" cy="30" r="2.5" fill="#333"/>
      <circle cx="35" cy="30" r="2.5" fill="#333"/>
      <circle cx="25.7" cy="29.5" r="0.8" fill="#fff"/>
      <circle cx="35.7" cy="29.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#f8bbd0"/>
    </svg>`,

    'vampire-squid': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="24" rx="16" ry="12" fill="#880e4f"/>
      <ellipse cx="30" cy="24" rx="12" ry="8" fill="#ad1457"/>
      <circle cx="24" cy="22" r="3" fill="#fff"/>
      <circle cx="36" cy="22" r="3" fill="#fff"/>
      <circle cx="24" cy="22" r="2" fill="#1565c0"/>
      <circle cx="36" cy="22" r="2" fill="#1565c0"/>
      <circle cx="24.5" cy="21.5" r="0.7" fill="#fff"/>
      <circle cx="36.5" cy="21.5" r="0.7" fill="#fff"/>
      <path d="M16 32 Q14 42 20 40 Q16 46 24 42 Q22 48 28 44 Q28 50 32 44 Q34 48 36 42 Q40 46 40 40 Q46 42 44 32" fill="#880e4f" opacity="0.8"/>
    </svg>`,

    'shoebill': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="12" ry="14" fill="#78909c"/>
      <ellipse cx="30" cy="40" rx="8" ry="8" fill="#90a4ae"/>
      <circle cx="30" cy="22" r="9" fill="#78909c"/>
      <circle cx="26" cy="18" r="2.5" fill="#ffd54f"/>
      <circle cx="34" cy="18" r="2.5" fill="#ffd54f"/>
      <circle cx="26" cy="18" r="1.5" fill="#333"/>
      <circle cx="34" cy="18" r="1.5" fill="#333"/>
      <rect x="22" y="24" width="16" height="8" rx="2" fill="#b0bec5"/>
      <rect x="22" y="28" width="16" height="4" rx="2" fill="#90a4ae"/>
      <line x1="30" y1="24" x2="30" y2="32" stroke="#78909c" stroke-width="0.5"/>
    </svg>`,

    'gerenuk': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="42" rx="10" ry="8" fill="#d7ccc8"/>
      <path d="M30 34 Q30 20 28 14" fill="none" stroke="#d7ccc8" stroke-width="4" stroke-linecap="round"/>
      <circle cx="28" cy="12" r="6" fill="#d7ccc8"/>
      <circle cx="18" cy="6" r="3" fill="#a1887f"/>
      <circle cx="38" cy="6" r="3" fill="#a1887f"/>
      <circle cx="25" cy="10" r="2" fill="#333"/>
      <circle cx="31" cy="10" r="2" fill="#333"/>
      <circle cx="25.5" cy="9.5" r="0.6" fill="#fff"/>
      <circle cx="31.5" cy="9.5" r="0.6" fill="#fff"/>
      <ellipse cx="28" cy="14" rx="1.5" ry="1" fill="#333"/>
      <line x1="26" y1="50" x2="24" y2="58" stroke="#a1887f" stroke-width="2"/>
      <line x1="34" y1="50" x2="36" y2="58" stroke="#a1887f" stroke-width="2"/>
    </svg>`,

    'cuttlefish': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="28" rx="18" ry="10" fill="#7e57c2"/>
      <ellipse cx="30" cy="28" rx="14" ry="7" fill="#9575cd"/>
      <circle cx="20" cy="26" r="3.5" fill="#fff"/>
      <circle cx="40" cy="26" r="3.5" fill="#fff"/>
      <circle cx="20" cy="26" r="2" fill="#333"/>
      <circle cx="40" cy="26" r="2" fill="#333"/>
      <circle cx="20.5" cy="25.5" r="0.6" fill="#fff"/>
      <circle cx="40.5" cy="25.5" r="0.6" fill="#fff"/>
      <path d="M16 36 Q14 42 18 40 Q16 44 22 40 Q20 44 26 40 Q24 44 30 40 Q28 44 34 40 Q32 44 38 40 Q36 44 42 40 Q40 44 44 36" fill="none" stroke="#7e57c2" stroke-width="1.5" stroke-linecap="round"/>
      <ellipse cx="30" cy="28" rx="3" ry="1" fill="#b39ddb" opacity="0.5"/>
    </svg>`,

    'quetzal': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="20" r="8" fill="#2e7d32"/>
      <ellipse cx="30" cy="32" rx="8" ry="10" fill="#e53935"/>
      <ellipse cx="30" cy="32" rx="5" ry="7" fill="#ef5350"/>
      <circle cx="27" cy="18" r="2" fill="#fff"/>
      <circle cx="27" cy="18" r="1.2" fill="#333"/>
      <circle cx="27.4" cy="17.6" r="0.4" fill="#fff"/>
      <polygon points="32,20 36,18 34,22" fill="#ffd54f"/>
      <path d="M24 40 Q20 50 22 58" fill="none" stroke="#2e7d32" stroke-width="2" stroke-linecap="round"/>
      <path d="M28 42 Q26 52 28 58" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round"/>
      <path d="M20 14 Q22 8 24 14" fill="#2e7d32"/>
    </svg>`,

    'aardvark': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="10" fill="#bcaaa4"/>
      <ellipse cx="18" cy="28" rx="10" ry="8" fill="#bcaaa4"/>
      <circle cx="10" cy="18" r="6" fill="#bcaaa4"/>
      <circle cx="6" cy="14" r="3" fill="#d7ccc8"/>
      <circle cx="14" cy="14" r="3" fill="#d7ccc8"/>
      <ellipse cx="10" cy="24" rx="3" ry="2" fill="#d7ccc8"/>
      <circle cx="8" cy="18" r="1.5" fill="#333"/>
      <circle cx="8.4" cy="17.6" r="0.5" fill="#fff"/>
      <circle cx="9" cy="23" r="0.8" fill="#333"/>
      <circle cx="11" cy="23" r="0.8" fill="#333"/>
    </svg>`,

    'iberian-lynx': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,28 12,10 24,22" fill="#c9a96e"/>
      <polygon points="44,28 48,10 36,22" fill="#c9a96e"/>
      <path d="M14 10 L10 2" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <path d="M46 10 L50 2" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="30" cy="34" rx="16" ry="13" fill="#c9a96e"/>
      <ellipse cx="30" cy="36" rx="8" ry="6" fill="#f5f5dc"/>
      <circle cx="25" cy="30" r="2.5" fill="#ffd54f"/>
      <circle cx="35" cy="30" r="2.5" fill="#ffd54f"/>
      <circle cx="25" cy="30" r="1.5" fill="#333"/>
      <circle cx="35" cy="30" r="1.5" fill="#333"/>
      <ellipse cx="30" cy="34" rx="2" ry="1.2" fill="#f8bbd0"/>
      <path d="M24 40 Q22 44 18 42" fill="none" stroke="#c9a96e" stroke-width="2" stroke-linecap="round"/>
      <path d="M36 40 Q38 44 42 42" fill="none" stroke="#c9a96e" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

    'painted-turtle': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="18" ry="10" fill="#689f38"/>
      <ellipse cx="30" cy="32" rx="14" ry="8" fill="#8bc34a"/>
      <path d="M20 30 L24 34 L28 30 L32 34 L36 30 L40 34" fill="none" stroke="#558b2f" stroke-width="1" stroke-linecap="round"/>
      <circle cx="16" cy="30" r="5" fill="#689f38"/>
      <ellipse cx="16" cy="32" rx="3" ry="2" fill="#8bc34a"/>
      <circle cx="14" cy="28" r="1.5" fill="#333"/>
      <circle cx="14.4" cy="27.6" r="0.5" fill="#fff"/>
      <ellipse cx="10" cy="36" rx="3" ry="2" fill="#689f38"/>
      <ellipse cx="50" cy="36" rx="3" ry="2" fill="#689f38"/>
      <circle cx="30" cy="32" r="2" fill="#e65100" opacity="0.4"/>
      <circle cx="24" cy="30" r="1" fill="#fdd835" opacity="0.4"/>
      <circle cx="36" cy="30" r="1" fill="#fdd835" opacity="0.4"/>
    </svg>`,

    'saiga-antelope': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="10" fill="#d7ccc8"/>
      <ellipse cx="24" cy="26" rx="10" ry="10" fill="#d7ccc8"/>
      <ellipse cx="20" cy="30" rx="6" ry="5" fill="#efebe9"/>
      <circle cx="28" cy="4" r="2" fill="#bcaaa4"/>
      <circle cx="20" cy="4" r="2" fill="#bcaaa4"/>
      <line x1="28" y1="6" x2="26" y2="16" stroke="#bcaaa4" stroke-width="2"/>
      <line x1="20" y1="6" x2="22" y2="16" stroke="#bcaaa4" stroke-width="2"/>
      <circle cx="18" cy="22" r="2" fill="#333"/>
      <circle cx="18.5" cy="21.5" r="0.6" fill="#fff"/>
      <ellipse cx="20" cy="30" rx="3" ry="4" fill="#d7ccc8"/>
      <circle cx="19" cy="29" r="0.8" fill="#333"/>
      <circle cx="21" cy="29" r="0.8" fill="#333"/>
    </svg>`,

    'jerboa': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="10" ry="8" fill="#ffe0b2"/>
      <circle cx="16" cy="16" r="6" fill="#ffe0b2"/>
      <circle cx="44" cy="16" r="6" fill="#ffe0b2"/>
      <circle cx="16" cy="16" r="4" fill="#ffcc80"/>
      <circle cx="44" cy="16" r="4" fill="#ffcc80"/>
      <circle cx="30" cy="24" r="8" fill="#ffe0b2"/>
      <ellipse cx="30" cy="26" rx="5" ry="4" fill="#fff8e1"/>
      <circle cx="27" cy="22" r="2.5" fill="#333"/>
      <circle cx="33" cy="22" r="2.5" fill="#333"/>
      <circle cx="27.6" cy="21.5" r="0.8" fill="#fff"/>
      <circle cx="33.6" cy="21.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="26" rx="1.5" ry="1" fill="#f8bbd0"/>
      <line x1="26" y1="38" x2="24" y2="50" stroke="#ffe0b2" stroke-width="2"/>
      <line x1="34" y1="38" x2="36" y2="50" stroke="#ffe0b2" stroke-width="2"/>
      <ellipse cx="24" cy="52" rx="3" ry="1.5" fill="#ffe0b2"/>
      <ellipse cx="36" cy="52" rx="3" ry="1.5" fill="#ffe0b2"/>
    </svg>`,

    'osprey': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="12" fill="#5d4037"/>
      <ellipse cx="30" cy="38" rx="10" ry="8" fill="#fff"/>
      <circle cx="30" cy="22" r="8" fill="#fff"/>
      <path d="M22 20 L30 22 L38 20" fill="none" stroke="#5d4037" stroke-width="2" stroke-linecap="round"/>
      <circle cx="27" cy="20" r="2" fill="#ffd54f"/>
      <circle cx="33" cy="20" r="2" fill="#ffd54f"/>
      <circle cx="27" cy="20" r="1.2" fill="#333"/>
      <circle cx="33" cy="20" r="1.2" fill="#333"/>
      <polygon points="30,24 28,28 32,28" fill="#37474f"/>
      <path d="M16 30 Q6 22 4 30" fill="#5d4037"/>
      <path d="M44 30 Q54 22 56 30" fill="#5d4037"/>
    </svg>`,

    'tapir': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="34" cy="36" rx="16" ry="10" fill="#fff"/>
      <ellipse cx="24" cy="36" rx="14" ry="10" fill="#424242"/>
      <ellipse cx="20" cy="28" rx="10" ry="8" fill="#424242"/>
      <path d="M14 26 Q8 24 10 28" fill="#424242"/>
      <circle cx="16" cy="24" r="2" fill="#333"/>
      <circle cx="16.5" cy="23.5" r="0.6" fill="#fff"/>
      <circle cx="12" cy="26" r="0.8" fill="#333"/>
      <circle cx="10" cy="26" r="0.8" fill="#333"/>
      <circle cx="16" cy="18" r="3" fill="#424242"/>
      <circle cx="24" cy="18" r="3" fill="#424242"/>
    </svg>`,

    'galago': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="12" ry="12" fill="#d7ccc8"/>
      <circle cx="18" cy="16" r="6" fill="#d7ccc8"/>
      <circle cx="42" cy="16" r="6" fill="#d7ccc8"/>
      <circle cx="18" cy="16" r="4" fill="#f8bbd0"/>
      <circle cx="42" cy="16" r="4" fill="#f8bbd0"/>
      <circle cx="22" cy="28" r="5" fill="#ffd54f"/>
      <circle cx="38" cy="28" r="5" fill="#ffd54f"/>
      <circle cx="22" cy="28" r="3.5" fill="#333"/>
      <circle cx="38" cy="28" r="3.5" fill="#333"/>
      <circle cx="23" cy="27" r="1.2" fill="#fff"/>
      <circle cx="39" cy="27" r="1.2" fill="#fff"/>
      <ellipse cx="30" cy="36" rx="2" ry="1" fill="#f8bbd0"/>
      <path d="M28 38 Q30 40 32 38" fill="none" stroke="#bcaaa4" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'gharial': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="36" cy="34" rx="16" ry="8" fill="#689f38"/>
      <path d="M20 32 Q8 32 4 34 Q8 36 20 36" fill="#7cb342"/>
      <circle cx="10" cy="34" r="2" fill="#689f38"/>
      <circle cx="8" cy="33" r="0.8" fill="#333"/>
      <circle cx="12" cy="33" r="0.8" fill="#333"/>
      <circle cx="30" cy="28" r="3" fill="#689f38"/>
      <circle cx="38" cy="28" r="3" fill="#689f38"/>
      <circle cx="30" cy="27" r="1.5" fill="#333"/>
      <circle cx="38" cy="27" r="1.5" fill="#333"/>
      <circle cx="30.4" cy="26.6" r="0.5" fill="#fff"/>
      <circle cx="38.4" cy="26.6" r="0.5" fill="#fff"/>
      <path d="M50 32 Q56 28 54 36" fill="#689f38"/>
    </svg>`,

    'dik-dik': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="38" rx="12" ry="8" fill="#bcaaa4"/>
      <circle cx="24" cy="26" r="8" fill="#bcaaa4"/>
      <ellipse cx="24" cy="28" rx="5" ry="4" fill="#d7ccc8"/>
      <circle cx="14" cy="16" r="4" fill="#bcaaa4"/>
      <circle cx="34" cy="16" r="4" fill="#bcaaa4"/>
      <circle cx="14" cy="16" r="2.5" fill="#f8bbd0"/>
      <circle cx="34" cy="16" r="2.5" fill="#f8bbd0"/>
      <circle cx="20" cy="22" r="2.5" fill="#333"/>
      <circle cx="28" cy="22" r="2.5" fill="#333"/>
      <circle cx="20.6" cy="21.5" r="0.8" fill="#fff"/>
      <circle cx="28.6" cy="21.5" r="0.8" fill="#fff"/>
      <ellipse cx="24" cy="28" rx="1.5" ry="1" fill="#333"/>
      <line x1="26" y1="46" x2="24" y2="54" stroke="#bcaaa4" stroke-width="1.5"/>
      <line x1="34" y1="46" x2="36" y2="54" stroke="#bcaaa4" stroke-width="1.5"/>
    </svg>`,

    'coconut-crab': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="14" ry="10" fill="#d84315"/>
      <ellipse cx="30" cy="34" rx="10" ry="7" fill="#e64a19"/>
      <circle cx="20" cy="20" r="4" fill="#d84315"/>
      <circle cx="40" cy="20" r="4" fill="#d84315"/>
      <line x1="20" y1="16" x2="18" y2="10" stroke="#d84315" stroke-width="2" stroke-linecap="round"/>
      <line x1="40" y1="16" x2="42" y2="10" stroke="#d84315" stroke-width="2" stroke-linecap="round"/>
      <circle cx="20" cy="20" r="2" fill="#333"/>
      <circle cx="40" cy="20" r="2" fill="#333"/>
      <path d="M10 30 Q6 26 8 34 Q4 30 10 34" fill="#d84315"/>
      <path d="M50 30 Q54 26 52 34 Q56 30 50 34" fill="#d84315"/>
      <line x1="16" y1="38" x2="10" y2="44" stroke="#d84315" stroke-width="1.5"/>
      <line x1="20" y1="40" x2="14" y2="48" stroke="#d84315" stroke-width="1.5"/>
      <line x1="44" y1="38" x2="50" y2="44" stroke="#d84315" stroke-width="1.5"/>
      <line x1="40" y1="40" x2="46" y2="48" stroke="#d84315" stroke-width="1.5"/>
    </svg>`,

    'lyrebird': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="10" ry="10" fill="#795548"/>
      <circle cx="30" cy="24" r="7" fill="#8d6e63"/>
      <circle cx="27" cy="22" r="2" fill="#333"/>
      <circle cx="27.5" cy="21.5" r="0.6" fill="#fff"/>
      <polygon points="32,24 36,22 34,26" fill="#ff8f00"/>
      <path d="M24 42 Q16 30 12 14" fill="none" stroke="#a1887f" stroke-width="2" stroke-linecap="round"/>
      <path d="M36 42 Q44 30 48 14" fill="none" stroke="#a1887f" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 14 Q14 12 16 16" fill="none" stroke="#8d6e63" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M48 14 Q46 12 44 16" fill="none" stroke="#8d6e63" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M28 42 Q26 36 20 20" fill="none" stroke="#d7ccc8" stroke-width="0.8" opacity="0.5"/>
      <path d="M32 42 Q34 36 40 20" fill="none" stroke="#d7ccc8" stroke-width="0.8" opacity="0.5"/>
    </svg>`,

    'sun-bear': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="12" fill="#3e2723"/>
      <ellipse cx="30" cy="30" rx="14" ry="12" fill="#3e2723"/>
      <circle cx="18" cy="20" r="5" fill="#3e2723"/>
      <circle cx="42" cy="20" r="5" fill="#3e2723"/>
      <circle cx="18" cy="20" r="3" fill="#4e342e"/>
      <circle cx="42" cy="20" r="3" fill="#4e342e"/>
      <ellipse cx="30" cy="32" rx="8" ry="6" fill="#4e342e"/>
      <path d="M26 30 Q30 26 34 30" fill="#ffd54f"/>
      <circle cx="24" cy="26" r="2.5" fill="#333"/>
      <circle cx="36" cy="26" r="2.5" fill="#333"/>
      <circle cx="24.6" cy="25.5" r="0.8" fill="#fff"/>
      <circle cx="36.6" cy="25.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="33" rx="3" ry="2" fill="#5d4037"/>
      <path d="M28 36 Q30 38 32 36" fill="none" stroke="#5d4037" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'mata-mata': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="18" ry="10" fill="#6d4c41"/>
      <ellipse cx="30" cy="32" rx="14" ry="8" fill="#8d6e63"/>
      <path d="M18 30 Q20 28 22 30 Q24 28 26 30 Q28 28 30 30 Q32 28 34 30 Q36 28 38 30 Q40 28 42 30" fill="none" stroke="#5d4037" stroke-width="1"/>
      <ellipse cx="18" cy="28" rx="8" ry="6" fill="#795548"/>
      <path d="M12 24 Q10 22 14 24 Q12 20 16 22" fill="#6d4c41"/>
      <circle cx="14" cy="26" r="2" fill="#333"/>
      <circle cx="14.5" cy="25.5" r="0.6" fill="#fff"/>
      <ellipse cx="14" cy="30" rx="2.5" ry="1" fill="#d7ccc8"/>
      <path d="M12 32 Q14 33 16 32" fill="none" stroke="#795548" stroke-width="0.6" stroke-linecap="round"/>
    </svg>`,

    'hoatzin': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="12" ry="12" fill="#8d6e63"/>
      <ellipse cx="30" cy="40" rx="8" ry="7" fill="#a1887f"/>
      <circle cx="30" cy="22" r="8" fill="#8d6e63"/>
      <path d="M26 14 Q28 6 30 14 Q32 8 34 14" fill="#e65100"/>
      <circle cx="24" cy="18" r="3" fill="#e53935"/>
      <circle cx="36" cy="18" r="3" fill="#e53935"/>
      <circle cx="24" cy="18" r="2" fill="#ffd54f"/>
      <circle cx="36" cy="18" r="2" fill="#ffd54f"/>
      <circle cx="24" cy="18" r="1.2" fill="#333"/>
      <circle cx="36" cy="18" r="1.2" fill="#333"/>
      <polygon points="30,24 27,28 33,28" fill="#546e7a"/>
    </svg>`,

    'mouse-deer': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="38" rx="10" ry="6" fill="#a1887f"/>
      <circle cx="24" cy="28" r="8" fill="#a1887f"/>
      <ellipse cx="24" cy="30" rx="5" ry="3.5" fill="#d7ccc8"/>
      <circle cx="14" cy="20" r="3.5" fill="#a1887f"/>
      <circle cx="34" cy="20" r="3.5" fill="#a1887f"/>
      <circle cx="14" cy="20" r="2" fill="#d7ccc8"/>
      <circle cx="34" cy="20" r="2" fill="#d7ccc8"/>
      <circle cx="20" cy="24" r="2.5" fill="#333"/>
      <circle cx="28" cy="24" r="2.5" fill="#333"/>
      <circle cx="20.6" cy="23.5" r="0.8" fill="#fff"/>
      <circle cx="28.6" cy="23.5" r="0.8" fill="#fff"/>
      <ellipse cx="24" cy="30" rx="1.5" ry="1" fill="#333"/>
      <line x1="22" y1="32" x2="20" y2="36" stroke="#fff" stroke-width="0.8"/>
      <line x1="26" y1="32" x2="28" y2="36" stroke="#fff" stroke-width="0.8"/>
      <line x1="26" y1="44" x2="24" y2="52" stroke="#a1887f" stroke-width="1.5"/>
      <line x1="34" y1="44" x2="36" y2="52" stroke="#a1887f" stroke-width="1.5"/>
    </svg>`,

    'paradise-bird': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="30" rx="10" ry="10" fill="#ffab00"/>
      <ellipse cx="30" cy="34" rx="7" ry="7" fill="#ff8f00"/>
      <circle cx="30" cy="20" r="7" fill="#5d4037"/>
      <circle cx="27" cy="18" r="2" fill="#fff"/>
      <circle cx="27" cy="18" r="1.2" fill="#333"/>
      <circle cx="27.4" cy="17.6" r="0.4" fill="#fff"/>
      <polygon points="32,20 36,19 34,22" fill="#37474f"/>
      <path d="M22 36 Q16 44 14 50" fill="none" stroke="#ffab00" stroke-width="2" stroke-linecap="round"/>
      <path d="M26 38 Q20 46 18 52" fill="none" stroke="#ff8f00" stroke-width="2" stroke-linecap="round"/>
      <path d="M38 36 Q44 44 46 50" fill="none" stroke="#ffab00" stroke-width="2" stroke-linecap="round"/>
      <path d="M34 38 Q40 46 42 52" fill="none" stroke="#ff8f00" stroke-width="2" stroke-linecap="round"/>
      <circle cx="14" cy="50" r="2" fill="#ffab00"/>
      <circle cx="46" cy="50" r="2" fill="#ffab00"/>
    </svg>`,

    'red-squirrel': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="12" ry="10" fill="#e65100"/>
      <circle cx="30" cy="24" r="8" fill="#e65100"/>
      <circle cx="18" cy="14" r="4" fill="#e65100"/>
      <circle cx="42" cy="14" r="4" fill="#e65100"/>
      <path d="M19 14 L17 10" stroke="#bf360c" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M41 14 L43 10" stroke="#bf360c" stroke-width="1.5" stroke-linecap="round"/>
      <ellipse cx="30" cy="26" rx="5" ry="4" fill="#ffccbc"/>
      <circle cx="26" cy="22" r="2" fill="#333"/>
      <circle cx="34" cy="22" r="2" fill="#333"/>
      <circle cx="26.5" cy="21.5" r="0.6" fill="#fff"/>
      <circle cx="34.5" cy="21.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="26" rx="1.5" ry="1" fill="#333"/>
      <path d="M42 28 Q52 18 48 34 Q52 24 46 36" fill="#e65100"/>
    </svg>`,

    'fennec-fox-baby': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,30 10,4 26,24" fill="#efebe9"/>
      <polygon points="44,30 50,4 34,24" fill="#efebe9"/>
      <polygon points="17,29 12,8 25,24" fill="#d7ccc8"/>
      <polygon points="43,29 48,8 35,24" fill="#d7ccc8"/>
      <ellipse cx="30" cy="36" rx="14" ry="12" fill="#efebe9"/>
      <ellipse cx="30" cy="38" rx="8" ry="6" fill="#fff"/>
      <circle cx="24" cy="32" r="3" fill="#333"/>
      <circle cx="36" cy="32" r="3" fill="#333"/>
      <circle cx="25" cy="31.5" r="1" fill="#fff"/>
      <circle cx="37" cy="31.5" r="1" fill="#fff"/>
      <ellipse cx="30" cy="37" rx="2" ry="1" fill="#333"/>
      <path d="M28 39 Q30 41 32 39" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'japanese-macaque': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="14" ry="14" fill="#bcaaa4"/>
      <ellipse cx="30" cy="34" rx="10" ry="10" fill="#ef9a9a"/>
      <circle cx="24" cy="28" r="2.5" fill="#333"/>
      <circle cx="36" cy="28" r="2.5" fill="#333"/>
      <circle cx="24.6" cy="27.5" r="0.8" fill="#fff"/>
      <circle cx="36.6" cy="27.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="3" ry="2" fill="#e57373"/>
      <circle cx="29" cy="33.5" r="0.8" fill="#333"/>
      <circle cx="31" cy="33.5" r="0.8" fill="#333"/>
      <path d="M27 37 Q30 39 33 37" fill="none" stroke="#c62828" stroke-width="1" stroke-linecap="round"/>
      <circle cx="22" cy="34" r="2.5" fill="#ef9a9a" opacity="0.5"/>
      <circle cx="38" cy="34" r="2.5" fill="#ef9a9a" opacity="0.5"/>
    </svg>`,

    'rabbit': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="38" rx="14" ry="10" fill="#efebe9"/>
      <circle cx="30" cy="28" r="10" fill="#efebe9"/>
      <path d="M20 24 Q16 8 22 20" fill="#efebe9"/>
      <path d="M40 24 Q44 8 38 20" fill="#efebe9"/>
      <path d="M21 22 Q18 12 23 20" fill="#f8bbd0"/>
      <path d="M39 22 Q42 12 37 20" fill="#f8bbd0"/>
      <circle cx="26" cy="26" r="2.5" fill="#333"/>
      <circle cx="34" cy="26" r="2.5" fill="#333"/>
      <circle cx="26.6" cy="25.5" r="0.8" fill="#fff"/>
      <circle cx="34.6" cy="25.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="31" rx="2" ry="1.5" fill="#f8bbd0"/>
      <path d="M28 33 Q30 35 32 33" fill="none" stroke="#bcaaa4" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="22" y1="30" x2="14" y2="29" stroke="#d7ccc8" stroke-width="0.6"/>
      <line x1="38" y1="30" x2="46" y2="29" stroke="#d7ccc8" stroke-width="0.6"/>
    </svg>`,

    'pomeranian-dog': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="18" fill="#ff8f00"/>
      <circle cx="30" cy="28" r="12" fill="#ffa726"/>
      <circle cx="20" cy="18" r="5" fill="#ff8f00"/>
      <circle cx="40" cy="18" r="5" fill="#ff8f00"/>
      <ellipse cx="30" cy="30" rx="7" ry="6" fill="#fff8e1"/>
      <circle cx="25" cy="26" r="2.5" fill="#333"/>
      <circle cx="35" cy="26" r="2.5" fill="#333"/>
      <circle cx="25.6" cy="25.5" r="0.8" fill="#fff"/>
      <circle cx="35.6" cy="25.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="30" rx="2" ry="1.2" fill="#333"/>
      <path d="M28 32 Q30 34 32 32" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'dwarf-hamster': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="12" fill="#efebe9"/>
      <circle cx="18" cy="22" r="4" fill="#efebe9"/>
      <circle cx="42" cy="22" r="4" fill="#efebe9"/>
      <circle cx="18" cy="22" r="2.5" fill="#f8bbd0"/>
      <circle cx="42" cy="22" r="2.5" fill="#f8bbd0"/>
      <ellipse cx="30" cy="36" rx="10" ry="8" fill="#fff"/>
      <circle cx="24" cy="30" r="2.5" fill="#333"/>
      <circle cx="36" cy="30" r="2.5" fill="#333"/>
      <circle cx="24.6" cy="29.5" r="0.8" fill="#fff"/>
      <circle cx="36.6" cy="29.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="2" ry="1.2" fill="#f8bbd0"/>
      <circle cx="22" cy="34" r="3" fill="#f8bbd0" opacity="0.3"/>
      <circle cx="38" cy="34" r="3" fill="#f8bbd0" opacity="0.3"/>
    </svg>`,

    'persian-cat': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="18" fill="#efebe9"/>
      <circle cx="30" cy="28" r="14" fill="#e0e0e0"/>
      <polygon points="16,22 14,10 22,20" fill="#efebe9"/>
      <polygon points="44,22 46,10 38,20" fill="#efebe9"/>
      <ellipse cx="30" cy="32" rx="8" ry="6" fill="#fff"/>
      <circle cx="24" cy="26" r="3" fill="#42a5f5"/>
      <circle cx="36" cy="26" r="3" fill="#42a5f5"/>
      <circle cx="24" cy="26" r="2" fill="#333"/>
      <circle cx="36" cy="26" r="2" fill="#333"/>
      <circle cx="24.6" cy="25.5" r="0.6" fill="#fff"/>
      <circle cx="36.6" cy="25.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="31" rx="2" ry="1.2" fill="#f8bbd0"/>
      <line x1="22" y1="30" x2="14" y2="28" stroke="#e0e0e0" stroke-width="0.6"/>
      <line x1="38" y1="30" x2="46" y2="28" stroke="#e0e0e0" stroke-width="0.6"/>
    </svg>`,

    'white-ferret': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="8" fill="#efebe9"/>
      <ellipse cx="20" cy="30" rx="10" ry="8" fill="#efebe9"/>
      <ellipse cx="20" cy="32" rx="6" ry="4" fill="#fff"/>
      <circle cx="10" cy="24" r="4" fill="#efebe9"/>
      <circle cx="30" cy="24" r="4" fill="#efebe9"/>
      <circle cx="16" cy="28" r="2" fill="#333"/>
      <circle cx="24" cy="28" r="2" fill="#333"/>
      <circle cx="16.5" cy="27.5" r="0.6" fill="#fff"/>
      <circle cx="24.5" cy="27.5" r="0.6" fill="#fff"/>
      <ellipse cx="20" cy="32" rx="1.5" ry="1" fill="#f8bbd0"/>
      <path d="M46 34 Q52 30 50 38" fill="#efebe9"/>
    </svg>`,

    'golden-retriever-puppy': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="14" fill="#ffc107"/>
      <ellipse cx="30" cy="36" rx="10" ry="8" fill="#fff8e1"/>
      <path d="M14 26 Q8 22 10 32" fill="#ffc107"/>
      <path d="M46 26 Q52 22 50 32" fill="#ffc107"/>
      <circle cx="24" cy="28" r="3" fill="#333"/>
      <circle cx="36" cy="28" r="3" fill="#333"/>
      <circle cx="25" cy="27" r="1" fill="#fff"/>
      <circle cx="37" cy="27" r="1" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="3" ry="2" fill="#333"/>
      <path d="M26 38 Q30 41 34 38" fill="none" stroke="#333" stroke-width="1" stroke-linecap="round"/>
      <path d="M28 42 Q30 44 32 42" fill="#e91e63" opacity="0.6"/>
    </svg>`,

    'otter-pup': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="18" ry="12" fill="#795548"/>
      <ellipse cx="30" cy="36" rx="12" ry="8" fill="#a1887f"/>
      <circle cx="16" cy="24" r="4" fill="#795548"/>
      <circle cx="44" cy="24" r="4" fill="#795548"/>
      <circle cx="24" cy="28" r="2.5" fill="#333"/>
      <circle cx="36" cy="28" r="2.5" fill="#333"/>
      <circle cx="24.6" cy="27.5" r="0.8" fill="#fff"/>
      <circle cx="36.6" cy="27.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="3" ry="2" fill="#5d4037"/>
      <path d="M27 37 Q30 39 33 37" fill="none" stroke="#5d4037" stroke-width="1" stroke-linecap="round"/>
      <line x1="22" y1="34" x2="14" y2="33" stroke="#795548" stroke-width="0.6"/>
      <line x1="38" y1="34" x2="46" y2="33" stroke="#795548" stroke-width="0.6"/>
    </svg>`,

    'baby-elephant': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="14" fill="#9e9e9e"/>
      <circle cx="14" cy="24" r="8" fill="#9e9e9e"/>
      <circle cx="46" cy="24" r="8" fill="#9e9e9e"/>
      <circle cx="14" cy="24" r="5" fill="#bdbdbd"/>
      <circle cx="46" cy="24" r="5" fill="#bdbdbd"/>
      <circle cx="24" cy="28" r="2.5" fill="#333"/>
      <circle cx="36" cy="28" r="2.5" fill="#333"/>
      <circle cx="24.6" cy="27.5" r="0.8" fill="#fff"/>
      <circle cx="36.6" cy="27.5" r="0.8" fill="#fff"/>
      <path d="M30 34 Q28 42 26 46" fill="none" stroke="#9e9e9e" stroke-width="4" stroke-linecap="round"/>
    </svg>`,

    'munchkin-cat': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="10" fill="#bcaaa4"/>
      <circle cx="30" cy="24" r="10" fill="#bcaaa4"/>
      <polygon points="18,20 16,8 24,18" fill="#bcaaa4"/>
      <polygon points="42,20 44,8 36,18" fill="#bcaaa4"/>
      <polygon points="19,19 18,12 23,18" fill="#f8bbd0"/>
      <polygon points="41,19 42,12 37,18" fill="#f8bbd0"/>
      <ellipse cx="30" cy="26" rx="6" ry="5" fill="#efebe9"/>
      <circle cx="26" cy="22" r="2.5" fill="#333"/>
      <circle cx="34" cy="22" r="2.5" fill="#333"/>
      <circle cx="26.6" cy="21.5" r="0.8" fill="#fff"/>
      <circle cx="34.6" cy="21.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="26" rx="1.5" ry="1" fill="#f8bbd0"/>
      <line x1="22" y1="42" x2="22" y2="46" stroke="#bcaaa4" stroke-width="3" stroke-linecap="round"/>
      <line x1="38" y1="42" x2="38" y2="46" stroke="#bcaaa4" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

    'corgi': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="18" ry="10" fill="#ffb74d"/>
      <ellipse cx="30" cy="36" rx="14" ry="6" fill="#fff"/>
      <circle cx="30" cy="24" r="10" fill="#ffb74d"/>
      <polygon points="18,18 14,6 24,16" fill="#ffb74d"/>
      <polygon points="42,18 46,6 36,16" fill="#ffb74d"/>
      <ellipse cx="30" cy="26" rx="6" ry="5" fill="#fff"/>
      <circle cx="26" cy="22" r="2.5" fill="#333"/>
      <circle cx="34" cy="22" r="2.5" fill="#333"/>
      <circle cx="26.6" cy="21.5" r="0.8" fill="#fff"/>
      <circle cx="34.6" cy="21.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="26" rx="2" ry="1.2" fill="#333"/>
      <path d="M28 28 Q30 30 32 28" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
      <path d="M28 30 Q30 32 32 30" fill="#e91e63" opacity="0.5"/>
    </svg>`,

    'shiba-inu': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="12" fill="#ff8f00"/>
      <circle cx="30" cy="24" r="10" fill="#ff8f00"/>
      <polygon points="18,20 14,8 24,18" fill="#ff8f00"/>
      <polygon points="42,20 46,8 36,18" fill="#ff8f00"/>
      <ellipse cx="30" cy="28" rx="7" ry="6" fill="#fff8e1"/>
      <circle cx="26" cy="22" r="2" fill="#333"/>
      <circle cx="34" cy="22" r="2" fill="#333"/>
      <circle cx="26.5" cy="21.5" r="0.6" fill="#fff"/>
      <circle cx="34.5" cy="21.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="27" rx="2" ry="1.2" fill="#333"/>
      <path d="M28 30 Q30 32 32 30" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'scottish-fold': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="14" fill="#90a4ae"/>
      <ellipse cx="30" cy="36" rx="10" ry="10" fill="#b0bec5"/>
      <path d="M18 20 Q16 16 22 20" fill="#90a4ae"/>
      <path d="M42 20 Q44 16 38 20" fill="#90a4ae"/>
      <circle cx="24" cy="28" r="3" fill="#ffd54f"/>
      <circle cx="36" cy="28" r="3" fill="#ffd54f"/>
      <circle cx="24" cy="28" r="2" fill="#333"/>
      <circle cx="36" cy="28" r="2" fill="#333"/>
      <circle cx="24.5" cy="27.5" r="0.6" fill="#fff"/>
      <circle cx="36.5" cy="27.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="2" ry="1" fill="#f8bbd0"/>
      <path d="M28 36 Q30 37.5 32 36" fill="none" stroke="#78909c" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'red-ruffed-lemur': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="14" ry="12" fill="#c62828"/>
      <circle cx="30" cy="24" r="10" fill="#212121"/>
      <circle cx="24" cy="22" r="3" fill="#ffd54f"/>
      <circle cx="36" cy="22" r="3" fill="#ffd54f"/>
      <circle cx="24" cy="22" r="2" fill="#333"/>
      <circle cx="36" cy="22" r="2" fill="#333"/>
      <circle cx="24.5" cy="21.5" r="0.6" fill="#fff"/>
      <circle cx="36.5" cy="21.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="28" rx="3" ry="2" fill="#424242"/>
      <circle cx="29" cy="27.5" r="0.8" fill="#333"/>
      <circle cx="31" cy="27.5" r="0.8" fill="#333"/>
      <path d="M22 14 Q20 8 24 14" fill="#c62828"/>
      <path d="M38 14 Q40 8 36 14" fill="#c62828"/>
    </svg>`,

    'little-penguin': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="10" ry="14" fill="#42a5f5"/>
      <ellipse cx="30" cy="38" rx="7" ry="10" fill="#fff"/>
      <circle cx="26" cy="24" r="2" fill="#333"/>
      <circle cx="34" cy="24" r="2" fill="#333"/>
      <circle cx="26.4" cy="23.6" r="0.6" fill="#fff"/>
      <circle cx="34.4" cy="23.6" r="0.6" fill="#fff"/>
      <polygon points="30,28 28,31 32,31" fill="#37474f"/>
      <path d="M20 30 Q16 34 18 40" fill="#42a5f5"/>
      <path d="M40 30 Q44 34 42 40" fill="#42a5f5"/>
    </svg>`,

    'red-panda-baby': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="12" fill="#d4623b"/>
      <ellipse cx="30" cy="36" rx="8" ry="7" fill="#f5deb3"/>
      <circle cx="17" cy="22" r="5" fill="#d4623b"/>
      <circle cx="43" cy="22" r="5" fill="#d4623b"/>
      <circle cx="17" cy="22" r="3" fill="#f5deb3"/>
      <circle cx="43" cy="22" r="3" fill="#f5deb3"/>
      <circle cx="24" cy="30" r="3.5" fill="#333"/>
      <circle cx="36" cy="30" r="3.5" fill="#333"/>
      <circle cx="25" cy="29" r="1.2" fill="#fff"/>
      <circle cx="37" cy="29" r="1.2" fill="#fff"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#333"/>
      <path d="M28 37 Q30 39 32 37" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'pygmy-goat': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="38" rx="14" ry="10" fill="#efebe9"/>
      <circle cx="26" cy="26" r="8" fill="#efebe9"/>
      <path d="M20 18 Q18 10 22 16" fill="#8d6e63"/>
      <path d="M32 18 Q34 10 30 16" fill="#8d6e63"/>
      <circle cx="22" cy="24" r="2" fill="#333"/>
      <circle cx="30" cy="24" r="2" fill="#333"/>
      <circle cx="22.5" cy="23.5" r="0.6" fill="#fff"/>
      <circle cx="30.5" cy="23.5" r="0.6" fill="#fff"/>
      <ellipse cx="26" cy="28" rx="2" ry="1.2" fill="#f8bbd0"/>
      <path d="M24 30 Q26 31 28 30" fill="none" stroke="#8d6e63" stroke-width="0.8" stroke-linecap="round"/>
      <line x1="24" y1="48" x2="22" y2="54" stroke="#8d6e63" stroke-width="2"/>
      <line x1="36" y1="48" x2="38" y2="54" stroke="#8d6e63" stroke-width="2"/>
    </svg>`,

    'harbor-seal': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="10" fill="#90a4ae"/>
      <ellipse cx="24" cy="28" rx="12" ry="10" fill="#b0bec5"/>
      <circle cx="20" cy="24" r="3" fill="#333"/>
      <circle cx="30" cy="24" r="3" fill="#333"/>
      <circle cx="20.8" cy="23.2" r="1" fill="#fff"/>
      <circle cx="30.8" cy="23.2" r="1" fill="#fff"/>
      <ellipse cx="25" cy="30" rx="2.5" ry="1.5" fill="#333"/>
      <path d="M22 33 Q25 35 28 33" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/>
      <circle cx="18" cy="28" r="2" fill="#f8bbd0" opacity="0.3"/>
      <circle cx="32" cy="28" r="2" fill="#f8bbd0" opacity="0.3"/>
      <line x1="18" y1="29" x2="12" y2="28" stroke="#90a4ae" stroke-width="0.6"/>
      <line x1="32" y1="29" x2="38" y2="28" stroke="#90a4ae" stroke-width="0.6"/>
    </svg>`,

    'arctic-hare': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="14" ry="10" fill="#eceff1"/>
      <circle cx="30" cy="26" r="10" fill="#eceff1"/>
      <path d="M22 22 Q20 8 24 18" fill="#eceff1"/>
      <path d="M38 22 Q40 8 36 18" fill="#eceff1"/>
      <path d="M23 20 Q22 12 25 18" fill="#f8bbd0" opacity="0.4"/>
      <path d="M37 20 Q38 12 35 18" fill="#f8bbd0" opacity="0.4"/>
      <circle cx="26" cy="24" r="2.5" fill="#333"/>
      <circle cx="34" cy="24" r="2.5" fill="#333"/>
      <circle cx="26.6" cy="23.5" r="0.8" fill="#fff"/>
      <circle cx="34.6" cy="23.5" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="30" rx="2" ry="1.2" fill="#f8bbd0"/>
      <path d="M28 32 Q30 34 32 32" fill="none" stroke="#90a4ae" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'clouded-leopard-cub': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="12" fill="#d7ccc8"/>
      <circle cx="30" cy="24" r="10" fill="#d7ccc8"/>
      <polygon points="18,18 16,10 24,18" fill="#d7ccc8"/>
      <polygon points="42,18 44,10 36,18" fill="#d7ccc8"/>
      <circle cx="24" cy="30" r="3" fill="#a1887f" opacity="0.4"/>
      <circle cx="36" cy="34" r="2.5" fill="#a1887f" opacity="0.4"/>
      <circle cx="24" cy="22" r="3.5" fill="#333"/>
      <circle cx="36" cy="22" r="3.5" fill="#333"/>
      <circle cx="25" cy="21" r="1.2" fill="#fff"/>
      <circle cx="37" cy="21" r="1.2" fill="#fff"/>
      <ellipse cx="30" cy="28" rx="2" ry="1" fill="#f8bbd0"/>
      <path d="M28 30 Q30 32 32 30" fill="none" stroke="#a1887f" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'pygmy-slow-loris': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="14" fill="#a1887f"/>
      <circle cx="16" cy="22" r="3.5" fill="#a1887f"/>
      <circle cx="44" cy="22" r="3.5" fill="#a1887f"/>
      <circle cx="24" cy="28" r="5.5" fill="#5d4037"/>
      <circle cx="36" cy="28" r="5.5" fill="#5d4037"/>
      <circle cx="24" cy="28" r="4" fill="#fff"/>
      <circle cx="36" cy="28" r="4" fill="#fff"/>
      <circle cx="24" cy="28" r="2.5" fill="#333"/>
      <circle cx="36" cy="28" r="2.5" fill="#333"/>
      <circle cx="24.8" cy="27.2" r="0.8" fill="#fff"/>
      <circle cx="36.8" cy="27.2" r="0.8" fill="#fff"/>
      <ellipse cx="30" cy="36" rx="2" ry="1" fill="#333"/>
      <path d="M28 38 Q30 39 32 38" fill="none" stroke="#333" stroke-width="0.6" stroke-linecap="round"/>
    </svg>`,

    'pallas-cat': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="18" ry="14" fill="#bcaaa4"/>
      <circle cx="30" cy="26" r="12" fill="#bcaaa4"/>
      <circle cx="18" cy="16" r="4" fill="#bcaaa4"/>
      <circle cx="42" cy="16" r="4" fill="#bcaaa4"/>
      <ellipse cx="30" cy="30" rx="9" ry="6" fill="#d7ccc8"/>
      <circle cx="24" cy="24" r="3" fill="#ffd54f"/>
      <circle cx="36" cy="24" r="3" fill="#ffd54f"/>
      <circle cx="24" cy="24.5" r="2" fill="#333"/>
      <circle cx="36" cy="24.5" r="2" fill="#333"/>
      <ellipse cx="30" cy="30" rx="2.5" ry="1.5" fill="#f8bbd0"/>
      <path d="M26 33 Q30 31 34 33" fill="none" stroke="#795548" stroke-width="1.2" stroke-linecap="round"/>
    </svg>`,

    'quoll': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="10" fill="#8d6e63"/>
      <circle cx="24" cy="26" r="8" fill="#8d6e63"/>
      <circle cx="28" cy="30" r="1" fill="#fff"/>
      <circle cx="34" cy="34" r="1" fill="#fff"/>
      <circle cx="22" cy="36" r="1" fill="#fff"/>
      <circle cx="40" cy="36" r="1" fill="#fff"/>
      <circle cx="36" cy="38" r="1" fill="#fff"/>
      <circle cx="18" cy="18" r="3.5" fill="#8d6e63"/>
      <circle cx="30" cy="18" r="3.5" fill="#8d6e63"/>
      <circle cx="18" cy="18" r="2" fill="#d7ccc8"/>
      <circle cx="30" cy="18" r="2" fill="#d7ccc8"/>
      <circle cx="20" cy="24" r="2" fill="#333"/>
      <circle cx="28" cy="24" r="2" fill="#333"/>
      <circle cx="20.5" cy="23.5" r="0.6" fill="#fff"/>
      <circle cx="28.5" cy="23.5" r="0.6" fill="#fff"/>
      <ellipse cx="24" cy="28" rx="1.5" ry="1" fill="#f8bbd0"/>
    </svg>`,

    'coatimundi': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="14" ry="10" fill="#a1887f"/>
      <ellipse cx="20" cy="28" rx="10" ry="8" fill="#a1887f"/>
      <path d="M14 24 Q8 20 10 26" fill="#795548"/>
      <circle cx="10" cy="24" r="2" fill="#795548"/>
      <circle cx="16" cy="24" r="2.5" fill="#333"/>
      <circle cx="24" cy="24" r="2.5" fill="#333"/>
      <circle cx="16.6" cy="23.5" r="0.8" fill="#fff"/>
      <circle cx="24.6" cy="23.5" r="0.8" fill="#fff"/>
      <circle cx="12" cy="24" r="1" fill="#333"/>
      <path d="M44 32 Q52 26 50 36 Q54 30 48 38" fill="#a1887f"/>
      <path d="M44 32 Q52 26 50 36 Q54 30 48 38" fill="none" stroke="#8d6e63" stroke-width="1.5" stroke-dasharray="2 2"/>
    </svg>`,

    'baby-deer': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="38" rx="12" ry="8" fill="#a1887f"/>
      <circle cx="26" cy="26" r="8" fill="#a1887f"/>
      <circle cx="14" cy="16" r="3.5" fill="#a1887f"/>
      <circle cx="38" cy="16" r="3.5" fill="#a1887f"/>
      <circle cx="14" cy="16" r="2" fill="#d7ccc8"/>
      <circle cx="38" cy="16" r="2" fill="#d7ccc8"/>
      <ellipse cx="26" cy="28" rx="5" ry="3.5" fill="#d7ccc8"/>
      <circle cx="22" cy="24" r="3" fill="#333"/>
      <circle cx="30" cy="24" r="3" fill="#333"/>
      <circle cx="23" cy="23" r="1" fill="#fff"/>
      <circle cx="31" cy="23" r="1" fill="#fff"/>
      <ellipse cx="26" cy="28" rx="1.5" ry="1" fill="#333"/>
      <circle cx="30" cy="36" r="1" fill="#fff" opacity="0.6"/>
      <circle cx="34" cy="34" r="1" fill="#fff" opacity="0.6"/>
      <circle cx="26" cy="38" r="1" fill="#fff" opacity="0.6"/>
    </svg>`,

    'raccoon': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="14" fill="#78909c"/>
      <circle cx="16" cy="18" r="4" fill="#78909c"/>
      <circle cx="44" cy="18" r="4" fill="#78909c"/>
      <ellipse cx="30" cy="36" rx="8" ry="6" fill="#cfd8dc"/>
      <ellipse cx="22" cy="28" rx="5" ry="4" fill="#333"/>
      <ellipse cx="38" cy="28" rx="5" ry="4" fill="#333"/>
      <circle cx="22" cy="28" r="2.5" fill="#fff"/>
      <circle cx="38" cy="28" r="2.5" fill="#fff"/>
      <circle cx="22" cy="28" r="1.5" fill="#333"/>
      <circle cx="38" cy="28" r="1.5" fill="#333"/>
      <ellipse cx="30" cy="35" rx="2" ry="1.2" fill="#333"/>
    </svg>`,

    'bush-dog': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="10" fill="#8d6e63"/>
      <circle cx="30" cy="26" r="10" fill="#8d6e63"/>
      <circle cx="18" cy="18" r="4" fill="#8d6e63"/>
      <circle cx="42" cy="18" r="4" fill="#8d6e63"/>
      <ellipse cx="30" cy="28" rx="6" ry="5" fill="#a1887f"/>
      <circle cx="26" cy="24" r="2" fill="#333"/>
      <circle cx="34" cy="24" r="2" fill="#333"/>
      <circle cx="26.5" cy="23.5" r="0.6" fill="#fff"/>
      <circle cx="34.5" cy="23.5" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="28" rx="2" ry="1.2" fill="#333"/>
      <path d="M28 30 Q30 32 32 30" fill="none" stroke="#5d4037" stroke-width="0.8" stroke-linecap="round"/>
    </svg>`,

    'stoat': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="8" fill="#efebe9"/>
      <circle cx="20" cy="28" r="8" fill="#efebe9"/>
      <ellipse cx="20" cy="30" rx="5" ry="3.5" fill="#fff"/>
      <circle cx="12" cy="22" r="3" fill="#efebe9"/>
      <circle cx="28" cy="22" r="3" fill="#efebe9"/>
      <circle cx="16" cy="26" r="2" fill="#333"/>
      <circle cx="24" cy="26" r="2" fill="#333"/>
      <circle cx="16.5" cy="25.5" r="0.6" fill="#fff"/>
      <circle cx="24.5" cy="25.5" r="0.6" fill="#fff"/>
      <ellipse cx="20" cy="30" rx="1.5" ry="1" fill="#f8bbd0"/>
      <path d="M46 36 Q50 34 48 38" fill="#333"/>
    </svg>`,

    'baby-hippo': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="12" fill="#90a4ae"/>
      <circle cx="30" cy="26" r="12" fill="#90a4ae"/>
      <circle cx="20" cy="18" r="4" fill="#90a4ae"/>
      <circle cx="40" cy="18" r="4" fill="#90a4ae"/>
      <circle cx="20" cy="18" r="2.5" fill="#b0bec5"/>
      <circle cx="40" cy="18" r="2.5" fill="#b0bec5"/>
      <ellipse cx="30" cy="30" rx="8" ry="5" fill="#b0bec5"/>
      <circle cx="24" cy="24" r="3" fill="#333"/>
      <circle cx="36" cy="24" r="3" fill="#333"/>
      <circle cx="25" cy="23" r="1" fill="#fff"/>
      <circle cx="37" cy="23" r="1" fill="#fff"/>
      <circle cx="28" cy="29" r="1" fill="#333"/>
      <circle cx="32" cy="29" r="1" fill="#333"/>
      <path d="M27 33 Q30 35 33 33" fill="none" stroke="#78909c" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'sea-bunny': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="12" ry="10" fill="#fff9c4"/>
      <ellipse cx="30" cy="34" rx="8" ry="7" fill="#fffde7"/>
      <path d="M24 26 Q22 16 26 24" fill="#333"/>
      <path d="M36 26 Q38 16 34 24" fill="#333"/>
      <circle cx="26" cy="32" r="1.5" fill="#333"/>
      <circle cx="34" cy="32" r="1.5" fill="#333"/>
      <circle cx="26.4" cy="31.6" r="0.5" fill="#fff"/>
      <circle cx="34.4" cy="31.6" r="0.5" fill="#fff"/>
      <circle cx="28" cy="38" r="1" fill="#333" opacity="0.3"/>
      <circle cx="32" cy="38" r="1" fill="#333" opacity="0.3"/>
      <circle cx="30" cy="36" r="1" fill="#333" opacity="0.3"/>
    </svg>`,

    'tanuki': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="14" fill="#8d6e63"/>
      <circle cx="16" cy="20" r="4" fill="#8d6e63"/>
      <circle cx="44" cy="20" r="4" fill="#8d6e63"/>
      <ellipse cx="30" cy="36" rx="10" ry="8" fill="#d7ccc8"/>
      <ellipse cx="22" cy="28" rx="5" ry="4" fill="#5d4037"/>
      <ellipse cx="38" cy="28" rx="5" ry="4" fill="#5d4037"/>
      <circle cx="22" cy="28" r="2.5" fill="#fff"/>
      <circle cx="38" cy="28" r="2.5" fill="#fff"/>
      <circle cx="22" cy="28" r="1.5" fill="#333"/>
      <circle cx="38" cy="28" r="1.5" fill="#333"/>
      <ellipse cx="30" cy="35" rx="2.5" ry="1.5" fill="#333"/>
      <path d="M27 38 Q30 40 33 38" fill="none" stroke="#5d4037" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'philippine-tarsier': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="14" ry="14" fill="#a1887f"/>
      <ellipse cx="30" cy="38" rx="10" ry="8" fill="#d7ccc8"/>
      <circle cx="22" cy="28" r="5" fill="#fff"/>
      <circle cx="38" cy="28" r="5" fill="#fff"/>
      <circle cx="22" cy="28" r="3" fill="#ff8f00"/>
      <circle cx="38" cy="28" r="3" fill="#ff8f00"/>
      <circle cx="22" cy="28" r="2" fill="#333"/>
      <circle cx="38" cy="28" r="2" fill="#333"/>
      <circle cx="22.6" cy="27.4" r="0.7" fill="#fff"/>
      <circle cx="38.6" cy="27.4" r="0.7" fill="#fff"/>
      <polygon points="30,34 28,37 32,37" fill="#795548"/>
      <path d="M18 20 Q20 14 24 20" fill="#a1887f"/>
      <path d="M36 20 Q40 14 42 20" fill="#a1887f"/>
    </svg>`,

    'giraffe-baby': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="42" rx="10" ry="8" fill="#ffcc80"/>
      <path d="M30 34 Q30 18 28 10" fill="none" stroke="#ffcc80" stroke-width="5" stroke-linecap="round"/>
      <circle cx="28" cy="10" r="6" fill="#ffcc80"/>
      <circle cx="22" cy="2" r="2" fill="#8d6e63"/>
      <circle cx="34" cy="2" r="2" fill="#8d6e63"/>
      <line x1="22" y1="4" x2="24" y2="8" stroke="#8d6e63" stroke-width="1.5"/>
      <line x1="34" y1="4" x2="32" y2="8" stroke="#8d6e63" stroke-width="1.5"/>
      <circle cx="25" cy="8" r="2" fill="#333"/>
      <circle cx="31" cy="8" r="2" fill="#333"/>
      <circle cx="25.5" cy="7.5" r="0.6" fill="#fff"/>
      <circle cx="31.5" cy="7.5" r="0.6" fill="#fff"/>
      <ellipse cx="28" cy="12" rx="2" ry="1" fill="#a1887f"/>
      <circle cx="28" cy="20" r="1.5" fill="#bf8040" opacity="0.4"/>
      <circle cx="32" cy="28" r="1.5" fill="#bf8040" opacity="0.4"/>
    </svg>`,

    'red-eyed-crocodile-skink': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="18" ry="8" fill="#5d4037"/>
      <path d="M14 32 L12 28 M18 30 L16 26 M22 30 L22 26 M26 30 L28 26 M34 30 L36 26 M38 30 L40 26 M42 32 L44 28" fill="none" stroke="#4e342e" stroke-width="1.2" stroke-linecap="round"/>
      <ellipse cx="22" cy="30" rx="8" ry="7" fill="#5d4037"/>
      <circle cx="18" cy="28" r="3" fill="#e65100"/>
      <circle cx="26" cy="28" r="3" fill="#e65100"/>
      <circle cx="18" cy="28" r="1.5" fill="#333"/>
      <circle cx="26" cy="28" r="1.5" fill="#333"/>
      <path d="M20 33 Q22 34 24 33" fill="none" stroke="#4e342e" stroke-width="0.8" stroke-linecap="round"/>
      <path d="M46 34 Q54 30 52 38 Q56 34 50 40" fill="#5d4037"/>
    </svg>`,

    'baby-orangutan': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="32" rx="16" ry="16" fill="#e65100"/>
      <ellipse cx="30" cy="34" rx="10" ry="10" fill="#bf360c"/>
      <circle cx="24" cy="28" r="3" fill="#fff"/>
      <circle cx="36" cy="28" r="3" fill="#fff"/>
      <circle cx="24" cy="28" r="2" fill="#333"/>
      <circle cx="36" cy="28" r="2" fill="#333"/>
      <circle cx="24.6" cy="27.4" r="0.6" fill="#fff"/>
      <circle cx="36.6" cy="27.4" r="0.6" fill="#fff"/>
      <ellipse cx="30" cy="34" rx="4" ry="3" fill="#ffab91"/>
      <circle cx="29" cy="33" r="0.8" fill="#333"/>
      <circle cx="31" cy="33" r="0.8" fill="#333"/>
      <path d="M27 37 Q30 40 33 37" fill="none" stroke="#bf360c" stroke-width="1" stroke-linecap="round"/>
    </svg>`,

    'mara': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="38" rx="14" ry="10" fill="#8d6e63"/>
      <circle cx="26" cy="26" r="8" fill="#8d6e63"/>
      <circle cx="14" cy="16" r="5" fill="#8d6e63"/>
      <circle cx="38" cy="16" r="5" fill="#8d6e63"/>
      <circle cx="14" cy="16" r="3" fill="#d7ccc8"/>
      <circle cx="38" cy="16" r="3" fill="#d7ccc8"/>
      <ellipse cx="26" cy="28" rx="5" ry="3.5" fill="#d7ccc8"/>
      <circle cx="22" cy="24" r="2.5" fill="#333"/>
      <circle cx="30" cy="24" r="2.5" fill="#333"/>
      <circle cx="22.6" cy="23.5" r="0.8" fill="#fff"/>
      <circle cx="30.6" cy="23.5" r="0.8" fill="#fff"/>
      <ellipse cx="26" cy="28" rx="1.5" ry="1" fill="#333"/>
      <line x1="26" y1="48" x2="24" y2="56" stroke="#8d6e63" stroke-width="2"/>
      <line x1="34" y1="48" x2="36" y2="56" stroke="#8d6e63" stroke-width="2"/>
    </svg>`,

    'pine-marten': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="36" rx="16" ry="10" fill="#795548"/>
      <circle cx="24" cy="26" r="8" fill="#795548"/>
      <circle cx="16" cy="18" r="3.5" fill="#795548"/>
      <circle cx="32" cy="18" r="3.5" fill="#795548"/>
      <ellipse cx="24" cy="28" rx="5" ry="4" fill="#795548"/>
      <ellipse cx="24" cy="30" rx="4" ry="3" fill="#ffd54f"/>
      <circle cx="20" cy="24" r="2" fill="#333"/>
      <circle cx="28" cy="24" r="2" fill="#333"/>
      <circle cx="20.5" cy="23.5" r="0.6" fill="#fff"/>
      <circle cx="28.5" cy="23.5" r="0.6" fill="#fff"/>
      <ellipse cx="24" cy="28" rx="1.5" ry="1" fill="#333"/>
      <path d="M46 34 Q52 30 50 38" fill="#795548"/>
    </svg>`,

    'pangolin-baby': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="12" fill="#c9b38c"/>
      <path d="M18 28 Q20 26 22 28 Q24 26 26 28 Q28 26 30 28 Q32 26 34 28 Q36 26 38 28 Q40 26 42 28" fill="none" stroke="#a08050" stroke-width="1.2"/>
      <path d="M20 34 Q22 32 24 34 Q26 32 28 34 Q30 32 32 34 Q34 32 36 34 Q38 32 40 34" fill="none" stroke="#a08050" stroke-width="1.2"/>
      <circle cx="22" cy="26" r="6" fill="#d7c9a0"/>
      <circle cx="18" cy="24" r="2.5" fill="#333"/>
      <circle cx="26" cy="24" r="2.5" fill="#333"/>
      <circle cx="18.6" cy="23.5" r="0.8" fill="#fff"/>
      <circle cx="26.6" cy="23.5" r="0.8" fill="#fff"/>
      <ellipse cx="22" cy="28" rx="1.5" ry="1" fill="#333"/>
    </svg>`,

    'ocelot': (c) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="34" rx="16" ry="13" fill="#ffc107"/>
      <polygon points="16,28 12,14 24,24" fill="#ffc107"/>
      <polygon points="44,28 48,14 36,24" fill="#ffc107"/>
      <circle cx="24" cy="32" r="3" fill="#5d4037" opacity="0.4"/>
      <circle cx="38" cy="30" r="2.5" fill="#5d4037" opacity="0.4"/>
      <circle cx="30" cy="38" r="2" fill="#5d4037" opacity="0.4"/>
      <ellipse cx="30" cy="36" rx="8" ry="6" fill="#fff8e1"/>
      <circle cx="25" cy="28" r="2.5" fill="#4caf50"/>
      <circle cx="35" cy="28" r="2.5" fill="#4caf50"/>
      <circle cx="25" cy="28" r="1.5" fill="#333"/>
      <circle cx="35" cy="28" r="1.5" fill="#333"/>
      <ellipse cx="30" cy="34" rx="2" ry="1" fill="#f8bbd0"/>
      <line x1="22" y1="34" x2="16" y2="33" stroke="#ffc107" stroke-width="0.6"/>
      <line x1="38" y1="34" x2="44" y2="33" stroke="#ffc107" stroke-width="0.6"/>
    </svg>`
  }
};
