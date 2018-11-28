import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { Covering, Centered } from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface PageIndexStyleRules extends StyleRules {
  root: CSSProperties;
  panelLeft: CSSProperties;
  panelRight: CSSProperties;
  panelCenter: CSSProperties;
}

/**
 * Styles definition
 */
const PageIndexStyles = (theme: Theme) => {
  // defines custom styles
  const styles: PageIndexStyleRules = {
    root: {
      ...Centered('column'),
      paddingTop: 0,
      '&:after': {
        ...Covering(theme.gradients().blue.main, 'fixed'),
        zIndex: -5,
      },
    },
    panelLeft: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    panelCenter: {
      display: 'flex',
      // @ts-ignore
      justifyContent: 'center',
    },
    panelRight: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

// EXPORTS
export { PageIndexStyles, PageIndexStyleRules };
