import { globalCss } from './index';

const useGlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$untitled',
  },
});

export default useGlobalStyles;
