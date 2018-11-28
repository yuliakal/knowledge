import { StyleRules } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Overrides } from '@material-ui/core/styles/overrides';
import color from 'color';
import _ from 'lodash';

// SETTINGS
const Settings = {
  input: {
    height: 50,
  },
};
/**
 * THEME OVERRIDES
 * ---
 * Default MUI Theme overrides
 * @see https://material-ui.com/customization/overrides/#5-global-theme-variation
 */
export function ThemeOverrides(theme: ThemeOptions): Overrides {
  return {
    MuiCard: {
      root: {
        marginBottom: 15,
        borderRadius: _.get(theme, ['shape', 'borderRadius'], 0),
        maxWidth: 345,
      },
    },
    MuiButton: {
      contained: {
        paddingTop: 15,
        paddingBottom: 15,
        fontWeight: _.get(theme, ['typography', 'fontWeightHeavy'], 700),
      },
      containedPrimary: {
        color: _.get(theme, ['colors', 'white', 'main'], '#000'),
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: color(_.get(theme, ['colors', 'black', 'main'], '#000'))
          .alpha(0.9)
          .hsl()
          .string(),
      },
    },
    MuiFormControl: {
      root: {
        '&:first-child': {
          marginTop: 0,
        },
      },
    },
    MuiInputLabel: {
      root: {
        color: _.get(theme, ['colors', 'shade', 'main'], '#000'),
      },
      formControl: {
        top: -4,
      },
    },
    MuiInput: {
      root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'left',
        backgroundColor: _.get(theme, ['colors', 'white', 'dark'], '#EEE'),
        borderRadius: _.get(theme, ['shape', 'borderRadius'], 0),
        color: _.get(theme, ['colors', 'black', 'main'], '#000'),
        height: Settings.input.height,
      },
      input: {
        height: Settings.input.height,
        fontSize: '1rem',
        padding: '0 15px',
        fontWeight: _.get(theme, ['typography', 'fontWeightMedium'], 600),
      },
    },
    MuiSelect: {
      root: {
        height: Settings.input.height,
        lineHeight: `${Settings.input.height}px`,
      },
      selectMenu: {
        paddingRight: 42,
      },
      icon: {
        top: 'calc(50% - 13px)',
        right: 15,
        fontSize: 26,
      },
    },
  };
}

/**
 * NO SCROLLER TABS OVERRIDES PROPS type
 */
export type NoScrollerTabsOverridesProps = {
  height: number;
  indicatorHeight: number;
};

/**
 * Hides horizontal scroll bar from Tabs component
 * by pushing the bar under the visible edge
 */
export function NoScrollerTabsOverrides(props: NoScrollerTabsOverridesProps): StyleRules {
  const { height, indicatorHeight } = props;

  return {
    root: {
      height,
      overflowY: 'hidden',
    },
    flexContainer: {
      height,
    },
    scroller: {
      height: height + 10 * indicatorHeight,
    },
    indicator: {
      top: height - indicatorHeight,
      height: indicatorHeight,
    },
  };
}
