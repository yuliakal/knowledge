/**
 * Generic Omit
 */
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

/**
 * Directions
 */
export enum Direction {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom',
}

/**
 * Sizes
 */
export enum Size {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

/**
 * Axis directions
 */
export enum AxisDirection {
  X = 'x',
  Y = 'y',
}

/**
 * Layouts
 */
export enum ViewLayout {
  Row = 'row',
  Grid = 'grid',
}

/**
 * Coloring types
 */
export enum Coloring {
  Blue = 'blue',
  Purple = 'purple',
  Pink = 'pink',
  Green = 'green',
  Orange = 'orange',
  Black = 'black',
  // dark coloring
  BlueDark = 'blue-dark',
  PurpleDark = 'purple-dark',
  PinkDark = 'pink-dark',
  GreenDark = 'green-dark',
  OrangeDark = 'orange-dark',
  BlackDark = 'black-dark',
  // others
  Transparent = 'transparent',
}

/**
 * IMPRINT
 */
export type Imprint = {
  getId: () => number;
  getType: () => string;
  toFormat: () => ImprintFormat;
  toString: () => string;
  isDummy: () => boolean;
};

/**
 * IMPRINT FORMAT
 */
export type ImprintFormat = {
  id: number;
  type: string;
};


/**
 * IMPRINT FORMAT
 */
export type AccessToken = {
  value?: string;
  expiresAt?: Date;
};