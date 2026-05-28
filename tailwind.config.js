export default {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0756A5',
          navy: '#073763',
          sky: '#EAF6FF',
          orange: '#F97316',
          amber: '#FDBA3B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(7, 55, 99, 0.12)',
      },
    },
  },
  plugins: [],
};
