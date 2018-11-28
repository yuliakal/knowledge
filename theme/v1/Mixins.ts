import { Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { FlexDirectionProperty, PositionProperty } from 'csstype';
import _ from 'lodash';

/**
 * TXT COLORING
 * ---
 * Dynamic text coloring rules
 * based on 'data-txt-coloring' attribute
 */
export function TxtColoring(theme: Theme) {
  return {
    '&[data-txt-coloring="blue"]': {
      color: theme.colors.blue.main,
    },
    '&[data-txt-coloring="pink"]': {
      color: theme.colors.pink.main,
    },
    '&[data-txt-coloring="green"]': {
      color: theme.colors.green.main,
    },
    '&[data-txt-coloring="purple"]': {
      color: theme.colors.purple.main,
    },
    '&[data-txt-coloring="orange"]': {
      color: theme.colors.orange.main,
    },
  };
}

/**
 * BG COLORING
 * ---
 * Dynamic background coloring rules
 * based on 'data-bg-coloring' attribute
 */
export function BgColoring(theme: Theme, transform?: (result, value, key) => void) {
  const rules = {
    // stills
    '&[data-bg-coloring="blue"][data-bg-coloring-mode="still"]': {
      background: theme.colors.blue.main,
    },
    '&[data-bg-coloring="pink"][data-bg-coloring-mode="still"]': {
      background: theme.colors.pink.main,
    },
    '&[data-bg-coloring="green"][data-bg-coloring-mode="still"]': {
      background: theme.colors.green.main,
    },
    '&[data-bg-coloring="purple"][data-bg-coloring-mode="still"]': {
      background: theme.colors.purple.main,
    },
    '&[data-bg-coloring="orange"][data-bg-coloring-mode="still"]': {
      background: theme.colors.orange.main,
    },
    '&[data-bg-coloring="black"][data-bg-coloring-mode="still"]': {
      background: theme.colors.black.main,
    },
    // gradients
    '&[data-bg-coloring="blue"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().blue.main,
    },
    '&[data-bg-coloring="pink"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().pink.main,
    },
    '&[data-bg-coloring="green"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().green.main,
    },
    '&[data-bg-coloring="purple"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().purple.main,
    },
    '&[data-bg-coloring="orange"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().orange.main,
    },
    '&[data-bg-coloring="black"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().black.main,
    },
    // gradients dark
    '&[data-bg-coloring="blue-dark"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().blue.dark,
    },
    '&[data-bg-coloring="pink-dark"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().pink.dark,
    },
    '&[data-bg-coloring="green-dark"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().green.dark,
    },
    '&[data-bg-coloring="purple-dark"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().purple.dark,
    },
    '&[data-bg-coloring="orange-dark"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().orange.dark,
    },
    '&[data-bg-coloring="black-dark"][data-bg-coloring-mode="gradient"]': {
      background: theme.gradients().black.dark,
    },
  };

  if (!transform) {
    return rules;
  }

  return _.transform(rules, transform, {});
}

/**
 * TXT ELLIPSIS
 * ---
 * Multi-line text ellipsis
 * @param lines
 */
export function TxtEllipsis(lines: number): CSSProperties {
  return {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
    fallbacks: {
      display: 'block',
    },
  };
}

/**
 * COVERING
 * ---
 * Covering over image
 * @param background
 * @param borderRadius
 * @param position
 */
export function Covering(
  background: string,
  position: PositionProperty = 'absolute',
): CSSProperties {
  return {
    content: '""',
    opacity: 0.75,
    background,
    ...Stretched(position),
  };
}

/**
 * SLIDE SHAPE
 * ---
 * Slide shape of border radius
 */
export function SlideShape(): CSSProperties {
  return {
    // @ts-ignore
    borderRadius: [[0, 0, 0, '80%/7.5%']],
  };
}

/**
 * RESPONSIVE
 * ---
 * Makes element responsive in given aspect
 * @param aspect
 */
export function Responsive(aspect: string | number): CSSProperties {
  return {
    height: 0,
    paddingTop: aspect,
  };
}

/**
 * CENTERED
 * ---
 * Makes element content flex centered
 * @param direction
 */
export function Centered(direction: FlexDirectionProperty): CSSProperties {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: direction,
  };
}

/**
 * STRETCHED
 * ---
 * Makes element positional stretched
 * @param position
 */
export function Stretched(position: PositionProperty = 'absolute'): CSSProperties {
  return {
    position,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };
}

/**
 * OVER STRETCHED
 * ---
 * Makes element positional over-stretched
 * @param position
 */
export function OverStretched(
  range: number,
  position: PositionProperty = 'absolute',
): CSSProperties {
  return {
    position,
    left: -range,
    right: -range,
    top: -range,
    bottom: -range,
  };
}

/**
 * SQUARED
 * ---
 * Makes square from element based on given square side size
 * @param size
 */
export function Squared(size: number): CSSProperties {
  return {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    maxWidth: size,
    maxHeight: size,
  };
}

/**
 * BORDERED
 * ---
 * Makes rounded border around element
 * @param size
 */
export function Bordered(color: string = '#000'): CSSProperties {
  return {
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color,
  };
}
