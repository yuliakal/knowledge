import React from 'react';
import { WithStyles } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';

import Typography from "@material-ui/core/Typography/Typography";
import { createTheme, ToolsPreviewStyles, ToolsPreviewStyleRules } from "theme";

/**
 * TOOLS PREVIEW PROPS type
 */
type ToolsPreviewProps = {
  images: Array<string>;
  description: string;
} & WithStyles<ToolsPreviewStyleRules>;

/**
 * TOOLS PREVIEW component
 */
const ToolsPreview: React.SFC<ToolsPreviewProps> = (props) => {
  const { classes, images, description } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {images.map((image: string) => (
          <img className={classes.image} src={image} />
        ))}
      </GridList>
      <Typography component="div" className={classes.description}>
        {description}
      </Typography>
    </div>
  );
};

// THEME
const withTheme = createTheme(ToolsPreviewStyles);
const Component = withTheme(ToolsPreview);

// EXPORTS
export {
  Component as ToolsPreview,
  ToolsPreviewProps,
};
