/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          primary:'#fcd34d'
      },
      spacing: {
          '25': '100px'
      }
    },
    fontFamily:{
        'sans':['Exo\\ 2','Noto Sans TC'],
        'serif':['DM Serif Display','Noto Serif TC']
    },
    // screens: {
    //     'sm':'600px',
    //     'md':'768px',
    //     'lg':'960px',
    //     'xl':'1200px'
    // }
  },
  plugins: [],
}

