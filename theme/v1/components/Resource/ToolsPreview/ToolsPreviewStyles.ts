import { Theme, createStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';

/**
 * Styles interface
 */
interface ToolsPreviewStyleRules extends StyleRules {
  root: CSSProperties;
  gridList: CSSProperties;
  description: CSSProperties;
  image: CSSProperties;
}

/**
 * Styles HOC component
 */
const ToolsPreviewStyles = (theme: Theme) => {
  // styles definition
  const styles: ToolsPreviewStyleRules = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      borderRadius: 4,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    description: {
      color: theme.colors.black.main,
      fontSize: 16,
      fontWeight: 500,
      margin: '9px 15px 19px',
    },
    image: {
      maxWidth: 200,
      maxHeight: 113,
    },
  };

  // create styles
  return createStyles(styles);
};

// EXPORTS
export {
  ToolsPreviewStyles, ToolsPreviewStyleRules,
};
