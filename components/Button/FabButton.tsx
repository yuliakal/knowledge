import { Button, WithStyles } from '@material-ui/core';
import { PlaylistAddRounded as AddIcon } from '@material-ui/icons';
import { createTheme, FabButtonStyles, FabButtonStyleRules } from 'theme';

/**
 * FAB BUTTON PROPS type
 */
type FabButtonProps = {
  onClick?: () => void;
} & WithStyles<FabButtonStyleRules>;

/**
 * FAB BUTTON
 * ---
 */
const FabButton: React.SFC<FabButtonProps> = (props) => {
  const { onClick, classes } = props;
  return (
    <div className={classes.root}>
      <Button variant="fab" className={classes.button} onClick={onClick}>
        <AddIcon />
      </Button>
    </div>
  );
};

// THEME
const withTheme = createTheme(FabButtonStyles);
const Component = withTheme(FabButton);

// EXPORTS
export { Component as ButtonFab, FabButtonProps };
