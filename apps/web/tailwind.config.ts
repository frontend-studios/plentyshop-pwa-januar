import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#25252e',
          '100': '#25252e',
          '200': '#25252e',
          '300': '#25252e',
          '400': '#25252e',
          '500': '#25252e',
          '600': '#25252e',
          '700': '#25252e',
          '800': '#25252e',
          '900': '#25252e',
          '950': '#25252e',
        },
        secondary: {
          '50': '#F3F4F6',
          '100': '#F3F4F6',
          '200': '#F3F4F6',
          '300': '#F3F4F6',
          '400': '#F3F4F6',
          '500': '#F3F4F6',
          '600': '#F3F4F6',
          '700': '#F3F4F6',
          '800': '#F3F4F6',
          '900': '#F3F4F6',
          '950': '#F3F4F6',
        },
        warning: {
          '50': '#ffc107',
          '100': '#ffc107',
          '200': '#ffc107',
          '300': '#ffc107',
          '400': '#ffc107',
          '500': '#ffc107',
          '600': '#ffc107',
          '700': '#ffc107',
          '800': '#ffc107',
          '900': '#ffc107',
          '950': '#ffc107',
        },
      },
      gridTemplateAreas: {
        'product-page': ['left-top right', 'left-bottom right'],
      },
      gridTemplateColumns: {
        'product-page': 'minmax(56%, 500px) auto',
      },
      gridTemplateRows: {
        'category-sidebar': 'min-content auto min-content',
      },
      screens: {
        '4xl': '1920px',
        '3xl': '1536px',
        '2xl': '1360px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '376px',
        '2xs': '360px',
      },
    },
  },
  plugins: [sfTypography, require('@savvywombat/tailwindcss-grid-areas')],
} as Config;
