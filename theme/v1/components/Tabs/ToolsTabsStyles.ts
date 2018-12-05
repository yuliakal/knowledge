import {createStyles, Theme} from '@material-ui/core';
import {CSSProperties} from '@material-ui/core/styles/withStyles';
import {StyleRules} from '@material-ui/core/styles';
import {Coloring, Direction} from 'lib/types';

/**
 * Styles interface
 */
interface ToolsTabsStyleRules extends StyleRules {
  root: CSSProperties;
  appBar: CSSProperties;
  tabsScroller: CSSProperties;
  tabsIndicator: CSSProperties;
  tabRoot: CSSProperties;
  tabLabelContainer: CSSProperties;
  tabColorPrimary: CSSProperties;
  tabSelected: CSSProperties;
}

/**
 * Styles HOC component
 */
const ToolsTabsStyles = (theme: Theme) => {
  // styles definition
  const styles: ToolsTabsStyleRules = {
    root: {
      flexGrow: 1,
      width: '100%',
    },
    appBar: {
      background: Coloring.Transparent,
      boxShadow: 'none',
    },
    tabsScroller: {
      '&::-webkit-scrollbar': {
        display: 'none',
      }
    },
    tabsIndicator: {
      display: 'none',
    },
    tabRoot: {
      textTransform: 'unset',
      width: '120px',
      height: '34px',
      minHeight: 0,
      margin: '0 10px',
      padding: 0,
      opacity: 0.5,
      fontSize: 16,
      borderRadius: 4,
      backgroundColor: theme.colors.black.main,
    },
    tabLabelContainer: {
      padding: 0,
    },
    tabColorPrimary: {
      color: theme.colors.sienna.main,
    },
    tabSelected: {
      color: `${theme.colors.brown.mid} !important`,
      backgroundImage: `${theme.gradients(Direction.Left).orange.light} !important`,
      opacity: 1,
    },
  };

  // create styles
  return createStyles(styles);
};

// EXPORTS
export {
  ToolsTabsStyles, ToolsTabsStyleRules,
};
