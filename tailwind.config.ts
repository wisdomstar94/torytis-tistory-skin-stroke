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
    '.scrollbar-track-333::-webkit-scrollbar-track': { 'background-color': '#333' },
    '.scrollbar-track-666::-webkit-scrollbar-track': { 'background-color': '#666' },
    '.scrollbar-track-888::-webkit-scrollbar-track': { 'background-color': '#888' },
  });
};

const scrollbarThumbPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.scrollbar-thumb-ccc::-webkit-scrollbar-thumb': { 'background-color': '#ccc' },
    '.scrollbar-thumb-333::-webkit-scrollbar-thumb': { 'background-color': '#333' },
    '.scrollbar-thumb-888::-webkit-scrollbar-thumb': { 'background-color': '#888' },
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

const transformPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.transform-rotate-15deg': { 
      'transform': 'rotate(15deg)',
    },
  });
};

const variantPlugin: PluginCreator = ({ addVariant }) => {
  addVariant('tt-body-page', '#tt-body-page &');
  addVariant('tt-body-index', '#tt-body-index &');
  addVariant('tt-body-category', '#tt-body-category &');
  addVariant('tt-body-guestbook', '#tt-body-guestbook &');
  addVariant('tt-body-tag', '#tt-body-tag &');

  addVariant('active', '.active&');
  addVariant('parent-1-active', '.active > &');
  addVariant('parent-2-active', '.active > * > &');
  addVariant('parent-3-active', '.active > * > * > &');
  addVariant('my-show', '.my-show&');
  addVariant('parent-1-my-show', '.my-show > &');
  addVariant('parent-2-my-show', '.my-show > * > &');
  addVariant('parent-3-my-show', '.my-show > * > * > &');
  addVariant('my-hide', '.my-hide&');
  addVariant('parent-1-my-hide', '.my-hide > &');
  addVariant('parent-2-my-hide', '.my-hide > * > &');
  addVariant('parent-3-my-hide', '.my-hide > * > * > &');

  // addVariant('dark-c', '.dark &');
};

export default {
  darkMode: 'class',
  content: [
    './src/**/*.tsx', './src/**/*.scss', './src/**/*.ts',
  ],
  theme: {
    extend: {
      width: {
        'full--40px': 'calc(100% - 40px)',
        'full--20px': 'calc(100% - 20px)',
      },
      maxWidth: {
        'full--40px': 'calc(100% - 40px)',
        'full--20px': 'calc(100% - 20px)',
      },
      height: {
        'full--20px': 'calc(100% - 20px)',
        'full--40px': 'calc(100% - 40px)',
        'full--60px': 'calc(100% - 60px)',
      },
      maxHeight: {
        'full--40px': 'calc(100% - 40px)',
        'full--20px': 'calc(100% - 20px)',
      },
      screens: {
        'mini': '360px',
      },
      backgroundColor: {
        'eee': '#eee',
      },
      borderColor: {
        'aaa': '#aaa',
        'ccc': '#ccc',
        'eee': '#eee',
      },
      fontSize: {
        'none': '0',
      },
      textColor: {
        '666': '#666',
        '777': '#777',
        '888': '#888',
        '999': '#999',
        'aaa': '#aaa',
        'bbb': '#bbb',
        'ccc': '#ccc',
        'ddd': '#ddd',
      },
      stroke: {
        '888': '#888',
        'aaa': '#aaa',
      },
    },
  },
  plugins: [
    scrollbarWidthPlugin,
    scrollbarTrackColorPlugin,
    scrollbarThumbPlugin,
    transitionPlugin,
    animationPlugin,
    transformPlugin,
    variantPlugin,
  ],
} satisfies Config

