import { Colors } from './Palette';

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property: any, mapping: any) => (props: any) => mapping[props[property]];

/**
 * BACKGROUND COLOR
 * ---
 * Adapts styles based on 'color' property
 */
export const BackgroundColor = {
  backgroundColor: styledBy('color', {
    red: Colors.red.main,
    blue: Colors.blue.main,
    green: Colors.green.main,
    yellow: Colors.yellow.main,
    pink: Colors.pink.main,
    purple: Colors.purple.main,
    orange: Colors.orange.main,
    black: Colors.black.main,
  }),
  color: styledBy('color', {
    red: Colors.white.main,
    blue: Colors.white.main,
    green: Colors.white.main,
    yellow: Colors.black.main,
    pink: Colors.white.main,
    purple: Colors.white.main,
    orange: Colors.white.main,
    black: Colors.white.main,
  }),
};

/**
 * BACKGROUND HOVER COLOR
 * ---
 * Adapts styles based on 'color' property
 */
export const BackgroundHoverColor = {
  '&:hover': {
    backgroundColor: styledBy('color', {
      red: Colors.red.dark,
      blue: Colors.blue.dark,
      green: Colors.green.dark,
      yellow: Colors.yellow.dark,
      pink: Colors.pink.dark,
      purple: Colors.purple.dark,
      orange: Colors.orange.dark,
      black: Colors.black.dark,
    }),
  },
};
