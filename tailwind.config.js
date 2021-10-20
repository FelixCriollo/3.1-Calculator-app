module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          txt1: 'var(--txt-1)',
          txt2: 'var(--txt-2)',
        }
      },
      backgroundColor: {
        skin: {
          main: 'var(--background-main)',
          second: 'var(--background-second)',
          screen: 'var(--background-screen)',

          kp1: 'var(--keybg-pri)',
          kp2: 'var(--keybg-sec)',
          kp3: 'var(--keybg-tri)',
        }
      },
      fontFamily: {
        body: ['Spartan']
      },
      inset: {
        '15': '3.75rem',
      },
      boxShadow: {
        'kp1s': '0 5px 4px var(--keybg-pris)',
        'kp2s': '0 5px 4px var(--keybg-secs)',
        'kp3s': '0 5px 4px var(--keybg-tris)',
      }
    },
  },
  variants: {
    extend: {}, 
  },
  plugins: [],
}
