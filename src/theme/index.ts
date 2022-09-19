import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, getCssText, keyframes } = createStitches({
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
      untitled: 'font-family: "Rubik", sans-serif',
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
    bp1: '(min-width: 768px)',
  },
});
