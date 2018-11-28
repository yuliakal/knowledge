import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { Direction } from 'lib/types';

// available theme colors
export interface ThemeColors {
  red: CustomPaletteColorOptions;
  green: CustomPaletteColorOptions;
  blue: CustomPaletteColorOptions;
  pink: CustomPaletteColorOptions;
  purple: CustomPaletteColorOptions;
  yellow: CustomPaletteColorOptions;
  orange: CustomPaletteColorOptions;
  grey: CustomPaletteColorOptions;
  black: CustomPaletteColorOptions;
  white: CustomPaletteColorOptions;
  shade: CustomPaletteColorOptions;
  night: CustomPaletteColorOptions;
}

// color options
export interface CustomPaletteColorOptions extends SimplePaletteColorOptions {
  mid?: string;
}

// gradient options
export interface SimplePaletteGradientOptions {
  main: string;
  dark: string;
}

// available gradients
export interface ThemeGradients {
  blue: SimplePaletteGradientOptions;
  pink: SimplePaletteGradientOptions;
  green: SimplePaletteGradientOptions;
  orange: SimplePaletteGradientOptions;
  purple: SimplePaletteGradientOptions;
  black: SimplePaletteGradientOptions;
  rainbow: SimplePaletteGradientOptions;
}

export type ThemeGradientGenerator = (direction?: Direction) => ThemeGradients;

/**
 * Custom palette colors
 */
export const Colors: ThemeColors = {
  red: {
    main: '#f06449',
    light: '#f7b1a4',
    mid: '#f1735b',
    dark: '#773124',
  },
  green: {
    main: '#59cd90',
    light: '#ace6c7',
    mid: '#69d29b',
    dark: '#2c6647',
  },
  blue: {
    light: '#97cdf6',
    main: '#309bed',
    dark: '#174d76',
  },
  pink: {
    main: '#ef476f',
    light: '#f7a3b7',
    mid: '#f0597d',
    dark: '#772337',
  },
  purple: {
    main: '#8c88ff',
    light: '#c5c3ff',
    mid: '#9794ff',
    dark: '#45437f',
  },
  yellow: {
    main: '#f5e663',
    light: '#faf2b1',
    mid: '#f6e872',
    dark: '#7a7231',
  },
  orange: {
    main: '#f5a623',
    light: '#fad291',
    mid: '#f6af39',
    dark: '#7a5211',
  },
  grey: {
    main: '#767676',
    light: '#f6f6f6',
    mid: '#efefef',
    dark: '#d5d5d5',
  },
  black: {
    main: '#353f4c',
    light: '#9a9fa5',
    mid: '#49525e',
    dark: '#1a1f25',
  },
  white: {
    main: '#ffffff',
    light: '#ffffff',
    mid: '#f3f3f3',
    dark: '#eeeeee',
  },
  shade: {
    main: '#a6a6a6',
    dark: '#717882',
  },
  night: {
    main: '#2f3844',
    dark: '#242b35',
  },
};

/**
 * Custom palette gradients
 */
export const Gradients: ThemeGradientGenerator = (direction = Direction.Right) => ({
  blue: {
    main: `linear-gradient(to ${direction}, ${Colors.blue.main}, #5ecbf7)`,
    dark: `linear-gradient(to ${direction}, #2b8bd4, #56bfec)`,
  },
  pink: {
    main: `linear-gradient(to ${direction}, ${Colors.pink.main}, #f87da8)`,
    dark: `linear-gradient(to ${direction}, #d63f63, #ed739c)`,
  },
  green: {
    main: `linear-gradient(to ${direction}, ${Colors.green.main}, #92e8c3)`,
    dark: `linear-gradient(to ${direction}, #4fb881, #87ddb7)`,
  },
  orange: {
    main: `linear-gradient(to ${direction}, ${Colors.orange.main}, #fbd249)`,
    dark: `linear-gradient(to ${direction}, #dc951f, #f0c742)`,
  },
  purple: {
    main: `linear-gradient(to ${direction}, ${Colors.purple.main}, #c0bdff)`,
    dark: `linear-gradient(to ${direction}, #7d7ae5, #b4b2f4)`,
  },
  black: {
    main: `linear-gradient(to ${direction}, ${Colors.black.main}, #657383)`,
    dark: `linear-gradient(to ${direction}, #2F3844, #5C6979)`,
  },
  rainbow: {
    main: `conic-gradient(
      ${Colors.blue.main} 10%, 
      ${Colors.purple.main} 25%, 
      ${Colors.pink.main} 45%, 
      ${Colors.orange.main} 70%, 
      ${Colors.green.main} 85%,
      ${Colors.blue.main} 100% 
    )`,
    dark: `conic-gradient(
      ${Colors.blue.main} 10%, 
      ${Colors.purple.main} 25%, 
      ${Colors.pink.main} 45%, 
      ${Colors.orange.main} 70%, 
      ${Colors.green.main} 85%,
      ${Colors.blue.main} 100%
    )`,
  },
});
