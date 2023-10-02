// /** @type {import('tailwindcss').types.Config.PluginCreator} */
import type { Config } from 'tailwindcss';
import type { PluginCreator } from 'tailwindcss/types/config';

const scrollbarWidthPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.scrollbar-w-1::-webkit-scrollbar': { 'width': '4px' },
  });
};

const scrollbarTrackColorPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.scrollbar-track-eee::-webkit-scrollbar-track': { 'background-color': '#eee' },
  });
};

const scrollbarThumbPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.scrollbar-thumb-ccc::-webkit-scrollbar-thumb': { 'background-color': '#ccc' },
  });
};

const transitionPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.transition-all-300ms': { 'transition': '300ms all' },
    '.transition-all-none': { 'transition': 'none' },
  });
};

const animationPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.animation-0ms-both': { 
      'animation-duration': '0ms',
      'animation-fill-mode': 'both',
    },
    '.animation-300ms-both': { 
      'animation-duration': '300ms',
      'animation-fill-mode': 'both',
    },
  });
};

const variantPlugin: PluginCreator = ({ addVariant }) => {
  addVariant('tt-body-page', '#tt-body-page &');
  addVariant('tt-body-index', '#tt-body-index &');
  addVariant('tt-body-category', '#tt-body-category &');
  addVariant('tt-body-guestbook', '#tt-body-guestbook &');
  addVariant('tt-body-tag', '#tt-body-tag &');

  addVariant('my-show', '.my-show&');
  addVariant('my-hide', '.my-hide&');
};

export default {
  content: [
    './src/**/*.tsx', './src/**/*.scss', './src/**/*.ts',
  ],
  theme: {
    extend: {
      width: {
        'full--40px': 'calc(100% - 40px)',
      },
      screens: {
        'mini': '360px',
      },
    },
  },
  plugins: [
    scrollbarWidthPlugin,
    scrollbarTrackColorPlugin,
    scrollbarThumbPlugin,
    transitionPlugin,
    animationPlugin,
    variantPlugin,
  ],
} satisfies Config

