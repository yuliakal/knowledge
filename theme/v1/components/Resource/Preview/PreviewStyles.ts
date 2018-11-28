import { Theme, createStyles, Slide } from '@material-ui/core';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StyleRules } from '@material-ui/core/styles';
import {
  TxtEllipsis,
  Responsive,
  SlideShape,
  TxtColoring,
  BgColoring,
  Centered,
} from 'theme/v1/Mixins';

/**
 * Style constants
 */
const gridWidth = 290;
const rowHeight = 90;
const typeSize = 42;
const typeBorder = 2;

/**
 * Styles TAG interface
 */
interface PreviewPictogramStyleRules extends StyleRules {
  root: CSSProperties;
  icon: CSSProperties;
}

/**
 * Styles TAG definition
 */
const PreviewPictogramStyles = (theme: Theme) => {
  // styles definition
  const styles: PreviewPictogramStyleRules = {
    root: {
      background: theme.gradients().blue.main,
      borderColor: theme.colors.white.main,
      borderStyle: 'solid',
      borderRadius: '50%',
      ...Centered('column'),
      ...BgColoring(theme),
    },
    icon: {
      color: theme.colors.white.main,
      fontSize: theme.typography.h2.fontSize,
    },
  };

  // create styles
  return createStyles(styles);
};

/**
 * Styles interface
 */
interface PreviewStyleRules extends StyleRules {
  root: CSSProperties;
  media: CSSProperties;
  content: CSSProperties;
  purpose: CSSProperties;
  description: CSSProperties;
  pictogram: CSSProperties;
}

/**
 * Styles HOC component
 */
const PreviewStyles = (theme: Theme) => {
  // styles definition
  const styles: PreviewStyleRules = {
    root: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      minWidth: gridWidth,
      '&[data-layout="grid"]': {
        flexDirection: 'column',
        '& $media': {
          ...Responsive(theme.aspects.wide.percentage),
          ...SlideShape(),
        },
        '& $purpose': {},
        '& $description': {
          ...TxtEllipsis(2),
        },
        '& $pictogram': {
          borderWidth: typeBorder,
          width: typeSize,
          height: typeSize,
          position: 'absolute',
          top: -((typeSize + typeBorder) / 2),
          right: 15 - typeBorder,
        },
      },
      '&[data-layout="row"]': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: rowHeight,
        '& $media': {
          width: '40%',
          height: rowHeight - 6,
        },
        '& $content': {
          width: '60%',
          justifyContent: 'left',
          padding: [[10, 10, 10, 20]],
          '& $description': {
            ...TxtEllipsis(3),
          },
        },
        '& $pictogram': {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: typeSize,
          height: typeSize,
          left: -20,
          top: '50%',
          marginTop: -typeSize / 2,
        },
      },
    },
    media: {
      margin: 0,
    },
    content: {
      position: 'relative',
      padding: 15,
      '&:last-child': {
        paddingBottom: 15,
      },
    },
    purpose: {
      color: theme.colors.blue.main,
      paddingBottom: 3,
      ...TxtColoring(theme),
    },
    description: {
      color: theme.colors.black.main,
      lineHeight: 'normal',
    },
    pictogram: {},
  };

  // create styles
  return createStyles(styles);
};

// EXPORTS
export {
  PreviewStyles, PreviewStyleRules, PreviewPictogramStyles, PreviewPictogramStyleRules,
};
