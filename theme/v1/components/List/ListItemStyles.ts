import { Theme, createStyles } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import { Centered, Bordered } from 'theme/v1/Mixins';

/**
 * Styles interface
 */
interface ListItemStyleRules extends StyleRules {
  root: CSSProperties;
  label: CSSProperties;
  value: CSSProperties;
  actionSecondary: CSSProperties;
  actionSecondaryIcon: CSSProperties;
  isLinked: CSSProperties;
}

/**
 * Styles definition
 */
const ListItemStyles = (theme: Theme) => {
  // defines custom styles
  const styles: ListItemStyleRules = {
    root: {
      ...Centered('row'),
      ...Bordered(theme.colors.white.dark),
      height: 50,
      justifyContent: 'space-between',
      marginBottom: 10,
      // @ts-ignore
      padding: [[10, 15, 10, 15]],
      backgroundColor: theme.colors.white.main,
      position: 'relative',
      textDecoration: 'none',
    },
    isLinked: {
      paddingRight: 55,
    },
    label: {
      ...theme.typography.h3,
      color: theme.colors.black.main,
    },
    value: {
      ...theme.typography.h3,
      color: theme.colors.blue.main,
    },
    actionSecondary: {
      ...Centered('row'),
    },
    actionSecondaryIcon: {
      fontSize: '1.8rem',
      marginRight: 10,
      color: theme.colors.black.light,
    },
  };

  // creates JSS formated styles
  return createStyles(styles);
};

// EXPORTS
export { ListItemStyles, ListItemStyleRules };
