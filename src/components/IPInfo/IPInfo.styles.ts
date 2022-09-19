import { keyframes, styled } from 'theme';

export const IPInfoContainer = styled('div', {
  backgroundColor: '$white',
  gridRow: '-4 / -2',
  position: 'relative',
  margin: '0 $space$3',
  padding: '$space$3',
  borderRadius: '$1',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '28px',

  '@bp1': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifySelf: 'center',
  },
});

const skeletonLoading = keyframes({
  '0%': {
    left: 0,
    right: '100%',
    opacity: 0.2,
  },
  '50%': {
    right: 0,
    opacity: 0.5,
  },
  '100%': {
    opacity: 0.2,
    right: 0,
    left: '105%',
  },
});

export const InfoItemContainer = styled('div', {
  textAlign: 'center',

  p: {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: '$darkGray',
    marginBottom: '$1',
  },

  h2: {
    color: '$veryDarkGray',
  },

  div: {
    height: '36px',
    backgroundColor: '$darkGray',
    borderRadius: '$1',
    width: 'calc(100% - 2 * $space3)',
    overflow: 'hidden',
    position: 'relative',
    opacity: 0.3,

    '&:before': {
      position: 'absolute',
      content: '""',
      height: '100%',
      backgroundColor: '$veryDarkGray',
      top: '0',
      animation: `${skeletonLoading} 1s linear infinite`,
    },
  },

  '@bp1': {
    textAlign: 'left',

    '&:not(:last-of-type)': {
      borderRight: '1px solid hsl(0, 0%, 79%)',
      marginRight: '$3',
      paddingRight: '$3',
    },

    div: {
      width: '120px',
    },
  },
});
