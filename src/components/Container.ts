import { styled } from 'theme';

const Container = styled('div', {
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridTemplateRows: '200px 50px auto 1fr',

  '& > *': {
    gridColumn: '1 / 1',
  },
});

export default Container;
