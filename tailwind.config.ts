// /** @type {import('tailwindcss').types.Config.PluginCreator} */
import type { Config } from 'tailwindcss';
import type { PluginCreator } from 'tailwindcss/types/config';

const scrollbarWidthPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.scrollbar-w-1::-webkit-scrollbar': { 'width': '4px' },
    '.scrollbar-h-1::-webkit-scrollbar': { 'height': '4px' },
  });
};

const scrollbarTrackColorPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.scrollbar-track-eee::-webkit-scrollbar-track': { 'background-color': '#eee' },
    '.scrollbar-track-333::-webkit-scrollbar-track': { 'background-color': '#333' },
    '.scrollbar-track-666::-webkit-scrollbar-track': { 'background-color': '#666' },
    '.scrollbar-track-888::-webkit-scrollbar-track': { 'background-color': '#888' },
    '.scrollbar-track-transparent::-webkit-scrollbar-track': { 'background-color': 'transparent' },
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

  addVariant('cover_list_max_col_count_1', '.cover_list_max_col_count_1 &');
  addVariant('cover_list_max_col_count_2', '.cover_list_max_col_count_2 &');
  addVariant('cover_list_max_col_count_3', '.cover_list_max_col_count_3 &');
  addVariant('cover_list_max_col_count_4', '.cover_list_max_col_count_4 &');
  addVariant('cover_list_max_col_count_5', '.cover_list_max_col_count_5 &');
  addVariant('cover_list_max_col_count_6', '.cover_list_max_col_count_6 &');
  addVariant('cover_list_max_col_count_7', '.cover_list_max_col_count_7 &');
  addVariant('cover_list_max_col_count_8', '.cover_list_max_col_count_8 &');

  addVariant('cover_list_half_max_col_count_1', '.cover_list_half_max_col_count_1 &');
  addVariant('cover_list_half_max_col_count_2', '.cover_list_half_max_col_count_2 &');
  addVariant('cover_list_half_max_col_count_3', '.cover_list_half_max_col_count_3 &');
  addVariant('cover_list_half_max_col_count_4', '.cover_list_half_max_col_count_4 &');

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

        '1/2-gap-1': 'calc((100% - ((4px) * 1)) / 2)',
        '1/2-gap-2': 'calc((100% - ((4px * 2) * 1)) / 2)',
        '1/2-gap-3': 'calc((100% - ((4px * 3) * 1)) / 2)',
        '1/2-gap-4': 'calc((100% - ((4px * 4) * 1)) / 2)',
        '1/2-gap-5': 'calc((100% - ((4px * 5) * 1)) / 2)',
        '1/2-gap-6': 'calc((100% - ((4px * 6) * 1)) / 2)',
        '1/2-gap-7': 'calc((100% - ((4px * 7) * 1)) / 2)',
        '1/2-gap-8': 'calc((100% - ((4px * 8) * 1)) / 2)',
        '1/2-gap-9': 'calc((100% - ((4px * 9) * 1)) / 2)',
        '1/2-gap-10': 'calc((100% - ((4px * 10) * 1)) / 2)',

        '1/3-gap-1': 'calc((100% - ((4px) * 2)) / 3)',
        '1/3-gap-2': 'calc((100% - ((4px * 2) * 2)) / 3)',
        '1/3-gap-3': 'calc((100% - ((4px * 3) * 2)) / 3)',
        '1/3-gap-4': 'calc((100% - ((4px * 4) * 2)) / 3)',
        '1/3-gap-5': 'calc((100% - ((4px * 5) * 2)) / 3)',
        '1/3-gap-6': 'calc((100% - ((4px * 6) * 2)) / 3)',
        '1/3-gap-7': 'calc((100% - ((4px * 7) * 2)) / 3)',
        '1/3-gap-8': 'calc((100% - ((4px * 8) * 2)) / 3)',
        '1/3-gap-9': 'calc((100% - ((4px * 9) * 2)) / 3)',
        '1/3-gap-10': 'calc((100% - ((4px * 10) * 2)) / 3)',

        '1/4-gap-1': 'calc((100% - ((4px) * 3)) / 4)',
        '1/4-gap-2': 'calc((100% - ((4px * 2) * 3)) / 4)',
        '1/4-gap-3': 'calc((100% - ((4px * 3) * 3)) / 4)',
        '1/4-gap-4': 'calc((100% - ((4px * 4) * 3)) / 4)',
        '1/4-gap-5': 'calc((100% - ((4px * 5) * 3)) / 4)',
        '1/4-gap-6': 'calc((100% - ((4px * 6) * 3)) / 4)',
        '1/4-gap-7': 'calc((100% - ((4px * 7) * 3)) / 4)',
        '1/4-gap-8': 'calc((100% - ((4px * 8) * 3)) / 4)',
        '1/4-gap-9': 'calc((100% - ((4px * 9) * 3)) / 4)',
        '1/4-gap-10': 'calc((100% - ((4px * 10) * 3)) / 4)',

        '1/5-gap-1': 'calc((100% - ((4px) * 4)) / 5)',
        '1/5-gap-2': 'calc((100% - ((4px * 2) * 4)) / 5)',
        '1/5-gap-3': 'calc((100% - ((4px * 3) * 4)) / 5)',
        '1/5-gap-4': 'calc((100% - ((4px * 4) * 4)) / 5)',
        '1/5-gap-5': 'calc((100% - ((4px * 5) * 4)) / 5)',
        '1/5-gap-6': 'calc((100% - ((4px * 6) * 4)) / 5)',
        '1/5-gap-7': 'calc((100% - ((4px * 7) * 4)) / 5)',
        '1/5-gap-8': 'calc((100% - ((4px * 8) * 4)) / 5)',
        '1/5-gap-9': 'calc((100% - ((4px * 9) * 4)) / 5)',
        '1/5-gap-10': 'calc((100% - ((4px * 10) * 4)) / 5)',

        '1/6-gap-1': 'calc((100% - ((4px) * 5)) / 6)',
        '1/6-gap-2': 'calc((100% - ((4px * 2) * 5)) / 6)',
        '1/6-gap-3': 'calc((100% - ((4px * 3) * 5)) / 6)',
        '1/6-gap-4': 'calc((100% - ((4px * 4) * 5)) / 6)',
        '1/6-gap-5': 'calc((100% - ((4px * 5) * 5)) / 6)',
        '1/6-gap-6': 'calc((100% - ((4px * 6) * 5)) / 6)',
        '1/6-gap-7': 'calc((100% - ((4px * 7) * 5)) / 6)',
        '1/6-gap-8': 'calc((100% - ((4px * 8) * 5)) / 6)',
        '1/6-gap-9': 'calc((100% - ((4px * 9) * 5)) / 6)',
        '1/6-gap-10': 'calc((100% - ((4px * 10) * 5)) / 6)',
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
      zIndex: {
        '2': '2',
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

