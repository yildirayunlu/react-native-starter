import { createTheme } from '@shopify/restyle';

import colors from '@styles/colors';

const theme = createTheme({
  colors: {
    bg: colors.white,
    text: colors.black,
    ghost: colors.black,
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
