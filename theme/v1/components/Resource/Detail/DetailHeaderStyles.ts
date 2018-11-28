import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import {
  SlideShape, Responsive, Covering, Centered, Stretched, BgColoring,
} from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface DetailHeaderStyleRules extends StyleRules {
  root?: CSSProperties;
  title?: CSSProperties;
  subtitle?: CSSProperties;
  icon?: CSSProperties;
}

/**
 * Styles HOC component
 */
const DetailHeaderStyles = (theme: Theme) => {
  // styles definition
  const styles: DetailHeaderStyleRules = {
    root: {
      backgroundSize: 'cover',
      position: 'relative',
      ...SlideShape(),
      ...Responsive(theme.aspects.wide.percentage),
      ...BgColoring(theme, (result, value, key) => {
        key += ':before';
        result[key] = value;
      }),
      '&:before': {
        ...SlideShape(),
        ...Covering(theme.gradients().blue.main),
      },
    },
    label: {
      ...Stretched(),
      ...Centered('column'),
      textAlign: 'center',
    },
    title: {
      color: theme.colors.white.main,
      padding: [[10, 25]],
    },
    subtitle: {
      color: theme.colors.white.main,
    },
    icon: {
      color: theme.colors.white.main,
      fontSize: '2rem',
    },
  };

  // create styles
  return createStyles(styles);
};

// EXPORTS
export { DetailHeaderStyles, DetailHeaderStyleRules };
