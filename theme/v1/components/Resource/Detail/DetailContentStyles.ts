import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
interface DetailContentStyleRules extends StyleRules {
  root?: CSSProperties;
  content?: CSSProperties;
}

/**
 * Styles HOC component
 */
const DetailContentStyles = (theme: Theme) => {
  // styles definition
  const styles: DetailContentStyleRules = {
    root: {
      padding: 15,
    },
    content: {},
  };

  // create styles
  return createStyles(styles);
};

// EXPORTS
export { DetailContentStyles, DetailContentStyleRules };
