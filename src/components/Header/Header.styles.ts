import { styled } from 'theme';

export const HeaderContainer = styled('div', {
  backgroundImage: 'url("/images/pattern-bg.png")',
  backgroundSize: 'cover',
  gridRow: '1 / 3',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  rowGap: '$3',
  alignItems: 'center',
  padding: '$space$3 $space$3 50px $space$3',

  h1: {
    color: '$white',
    fontWeight: '$3',
  },
});

export const HeaderFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '$1',
  width: 'min(100%, 500px)',

  input: {
    fontSize: '$1',
    padding: '22px',
    flexGrow: 1,
    border: 'none',

    '&::placeholder': {
      color: '$veryDarkGray',
    },
  },

  button: {
    backgroundColor: '#000',
    border: 'none',
    padding: '$3',
    width: '70px',
    color: 'White',

    '&:hover': {
      opacity: 0.7,
      cursor: 'pointer',
    },
  },
});
