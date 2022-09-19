import { globalCss } from './index';

const useGlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
});

export default useGlobalStyles;
