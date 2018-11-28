import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Coloring, ViewLayout } from 'lib/types';
import { ComponentType } from 'react';
import {
  Card, CardContent, CardMedia, Typography, WithStyles,
} from '@material-ui/core';
import {
  PreviewStyleRules,
  createTheme,
  PreviewStyles,
  PreviewPictogramStyleRules,
  PreviewPictogramStyles,
} from 'theme';

/**
 * GENERIC REVIEW PICTOGRAM PROPS type
 */
type GenericPreviewPictogramProps = {
  coloring: Coloring;
  Icon: any;
} & WithStyles<PreviewPictogramStyleRules>;

/**
 * GENERIC PREVIEW PICTOGRAM component
 */
const GenericPreviewPictogram: React.SFC<GenericPreviewPictogramProps> = (props) => {
  const { classes, coloring, Icon } = props;
  return (
    <div data-bg-coloring={coloring} data-bg-coloring-mode="gradient" className={classes.root}>
      <Icon className={classes.icon} />
    </div>
  );
};

// Pictogram component with theme
const withPictogramTheme = createTheme(PreviewPictogramStyles);
const Pictogram = withPictogramTheme(GenericPreviewPictogram);

/**
 * GENERIC PREVIEW PROPS type
 */
type GenericPreviewProps = {
  cover: string;
  title: string;
  purpose: string;
  coloring: Coloring;
  pictogram: ComponentType<SvgIconProps>;
  layout?: ViewLayout;
} & WithStyles<PreviewStyleRules>;

/**
 * GENERIC PREVIEW component
 */
const GenericPreview: React.SFC<GenericPreviewProps> = (props) => {
  const {
    classes, cover, title, purpose, coloring, pictogram, layout = ViewLayout.Grid,
  } = props;

  return (
    <Card elevation={0} className={classes.root} data-layout={layout}>
      <CardMedia className={classes.media} image={cover} title={title} />
      <CardContent className={classes.content}>
        <Typography
          className={classes.purpose}
          variant="h4"
          component="div"
          data-txt-coloring={coloring}
        >
          {purpose}
        </Typography>
        <Typography className={classes.description} variant="h3" component="div">
          {title}
        </Typography>
        <Pictogram classes={{ root: classes.pictogram }} coloring={coloring} Icon={pictogram} />
      </CardContent>
    </Card>
  );
};

// THEME
const withTheme = createTheme(PreviewStyles);
const Component = withTheme(GenericPreview);

// EXPORTS
export {
  Component as GenericPreview,
  GenericPreviewProps,
  GenericPreviewPictogram,
  GenericPreviewPictogramProps,
};
