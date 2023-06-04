import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.preflight': {
          background: 'red',
          // selector list
          'h1, h2': {
            background: 'blue',
          },
        },
      });
    }),
  ],
} satisfies Config;
