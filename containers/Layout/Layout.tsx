import { Theme } from '@material-ui/core';
import { StyleRules, WithStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import React from 'react';
import { DispatchProp } from 'react-redux';
import { createTheme } from 'theme';

/**
 * LAYOUT PROPS
 * ---
 */
type LayoutProps = {} & LayoutDefaultProps & WithStyles & DispatchProp;

/**
 * LAYOUT INJECTED PROPS
 * ---
 */
type LayoutInjectedProps = Partial<LayoutDefaultProps>;

/**
 * LAYOUT DEFAULT PROPS type
 */
type LayoutDefaultProps = Readonly<typeof defaultProps>;
type LayoutThemeProps = null | ((theme: Theme) => StyleRules);
/**
 * DEFAULT PROPS
 * ---
 * menus.drawer.isOpen: indicates if left menu drawer is opened
 * menus.avatar.isOpen: indicates if avatar menu is opened
 * menus.search.isOpen: indicates if search panel is opened
 * menus.qam.isOpen: indicates if quick actions menu is opened
 */
const defaultProps = {
  theme: null as LayoutThemeProps,
};

/**
 * CREATE LAYOUT
 * ---
 * HOC handling page layout.
 * Controls all layout components states and props.
 *
 * 1. Handles Header component
 * 2. Handles MenuDrawer component
 * 3. Handles MenuAvatar component
 * 4. Handles MenuActions component
 * 5. Handles Search component
 * ---
 * @param BaseComponent
 * @param LayoutProps
 */
function createLayout(injectedProps: LayoutInjectedProps) {
  return (BaseComponent: any) => {
    /**
     * HOC class definition
     */
    const Layout: React.SFC<LayoutProps> = (props) => {
      const { classes } = {
        ...props,
        ...injectedProps,
      };

      return (
        <div>
          <BaseComponent classes={classes} />
        </div>
      );
    };

    // component default props
    Layout.defaultProps = defaultProps;

    // layout component cache
    let LayoutComponent: any = Layout;

    // use theme when is given
    if (injectedProps.theme) {
      const withPageTheme = createTheme(injectedProps.theme);
      LayoutComponent = withPageTheme(LayoutComponent);
    }

    return LayoutComponent;
  };
}

// EXPORTS
export { LayoutProps, LayoutInjectedProps, createLayout };
