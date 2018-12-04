import { Button, IconButton, WithStyles } from '@material-ui/core';
import { CloseRounded as CloseIcon } from '@material-ui/icons';
import { CloseButtonStyleRules, CloseButtonStyles, createTheme } from 'theme';
import { Coloring } from 'lib/types';

/**
 * CLOSE BUTTON PROPS
 */
type CloseButtonProps = {
  onClick?: () => void;
  position?: 'absolute' | 'fixed';
  alignment?: 'right' | 'left';
  coloring?: Coloring;
};

/**
 * CLOSE BUTTON
 * ---
 * Close button wrapper used on overlays or popups.
 */
const CloseButton: React.SFC<CloseButtonProps & WithStyles<CloseButtonStyleRules>> = (props) => {
  const {
    onClick,
    classes,
    coloring = Coloring.Transparent,
    position = 'absolute',
    alignment = 'right',
  } = props;
  return (
    <div className={classes.root} data-position={position} data-alignment={alignment}>
      <IconButton
        data-bg-coloring={coloring}
        data-bg-coloring-mode="still"
        className={classes.button}
        onClick={onClick}
      >
        <CloseIcon className={classes.icon} />
      </IconButton>
    </div>
  );
};

// THEME
const withTheme = createTheme(CloseButtonStyles);
const Component = withTheme(CloseButton);

// EXPORTS
export { Component as CloseButton, CloseButtonProps };
