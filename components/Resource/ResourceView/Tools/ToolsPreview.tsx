import React from 'react';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

import styles from './ToolsPreviewStyle';
import Typography from "@material-ui/core/Typography/Typography";

/**
 * TOOLS PREVIEW PROPS type
 */
type ToolsPreviewProps = {
  tileData: Array<string>;
  description: string;
};

/**
 * TOOLS PREVIEW component
 */
const ToolsPreview: React.SFC<ToolsPreviewProps & WithStyles> = (props) => {
  const { classes, tileData, description } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {tileData.map((tile: string) => (
          <img className={classes.image} src={tile} />
        ))}
      </GridList>
      <Typography component="div" className={classes.description}>
        {description}
      </Typography>
    </div>
  );
};

// STYLEs
const Component = withStyles(styles)(ToolsPreview);

// EXPORTs
export { Component as ToolsPreview };
