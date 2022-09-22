import { styled } from 'theme';

export const HeaderContainer = styled('div', {
  backgroundImage: 'url("/images/pattern-bg.png")',
  backgroundSize: 'cover',
  gridRow: '1 / 3',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '$space$3 $space$3 50px $space$3',

  h1: {
    color: '$white',
    fontWeight: '$3',
  },

  '.error': {
    color: 'Tomato',
  },

  'p.error': {
    width: 'min(100%, 500px)',
    marginTop: '8px',
    background: 'white',
    padding: '6px 20px',
    borderRadius: '8px',
  },
});

export const HeaderFormContainer = styled('form', {
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '$1',
  width: 'min(100%, 500px)',
  marginTop: '$3',

  input: {
    fontSize: '$1',
    padding: '18px',
    flexGrow: 1,
    border: 'none',

    '&::placeholder': {
      color: '$veryDarkGray',
    },

    '&.error': {
      color: 'Tomato',
      border: '1px solid Tomato',
    },
  },

  button: {
    backgroundColor: '#000',
    border: 'none',
    height: '100%',
    width: '56px',
    color: 'White',

    '&:hover': {
      opacity: 0.7,
      cursor: 'pointer',
    },
  },
});
