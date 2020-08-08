import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    bg: '#fff',
    text: '#000',
    ghost: '#ccc',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export default theme;
