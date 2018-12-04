import { Button as MuiButton, WithStyles } from '@material-ui/core';
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import React from 'react';
import { withStyles } from '@material-ui/styles';

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property: any, mapping: any) => (props: any) => mapping[props[property]];

// custom styles
const styles = {
  root: {
    background: styledBy('color', {
      red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }),
    border: 0,
    borderRadius: 3,
    boxShadow: styledBy('color', {
      red: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }),
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

/**
 * BUTTON PROPS
 */
type ButtonProps = MuiButtonProps & {
  color: string;
};

/**
 * BUTTON
 * --
 * HOC Button component adapted to dynamic colors
 */
const Button: React.SFC<ButtonProps & WithStyles> = (props) => {
  const { classes, color, ...other } = props;
  return <MuiButton className={classes.root} {...other} />;
};

// STYLEs
const Component = withStyles(styles)(Button);

// EXPORTs
export { Component as Button, ButtonProps };
