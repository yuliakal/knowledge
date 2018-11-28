import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
interface DetailStyleRules extends StyleRules {
  paper: CSSProperties;
}

/**
 * Styles HOC component
 */
const DetailStyles = (theme: Theme) => {
  // styles definition
  const styles: DetailStyleRules = {
    paper: {},
  };

  // create styles
  return createStyles(styles);
};

// EXPORTS
export { DetailStyles, DetailStyleRules };
