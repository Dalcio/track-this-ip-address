import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      white: 'hsl(255,100%,100%)',
      veryDarkGray: 'hsl(0, 0%, 17%)',
      darkGray: 'hsl(0, 0%, 59%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '24px',
    },
    fontSizes: { 1: '18px' },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {
      1: 400,
      2: 500,
      3: 700,
    },
    radii: {
      1: '12px',
    },
  },
  media: {
    sm: '375px',
    md: '1440px',
  },
  utils: {
    largerThen: (value: 'sm' | 'md' | number) =>
      `@media screen and (min-width: ${
        value === 'sm' ? 375 : (value === 'md' && 1440) || value
      })px`,
    smallerThen: (value: 'sm' | 'md' | number) =>
      `@media screen and (max-width: ${
        value === 'sm' ? 375 : (value === 'md' && 1440) || value
      })px`,
  },
});
