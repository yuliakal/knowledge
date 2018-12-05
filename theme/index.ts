import { Theme, withStyles } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import _ from 'lodash';

/**
 * CREATE THEME
 * ---
 * Shortcut for using withStyles HOC
 * with injected theme
 */
export function createTheme(styles: (theme: Theme) => StyleRules) {
  const rules = (theme: Theme) => styles(theme);
  return withStyles(rules);
}

/**
 * CREATE OVERRIDES
 * ---
 * Updates all rules object keys with given prefix
 * Example: 'root' became 'prefixRoot'
 * @param prefix
 * @param rules
 */
export function createOverrides(prefix: string, rules: StyleRules): StyleRules {
  // fill overrides with prefixed keys & input values
  return _.mapKeys(rules, (value, key) => prefix + _.upperFirst(key));
}

/**
 * USE OVERRIDES
 * ---
 * Merges predefined styles with specific styles.
 * This keeps your styles DRY as you can create a bunch of predefined styles
 * and use them on component in different places/situations.
 *
 * Work with MUI overriding with classes
 * @see https://material-ui.com/customization/overrides/#overriding-with-classes
 *
 * @param props
 */
export function useOverrides(props: any) {
  // overrides cache

  let overrides: StyleRules = {};

  // loops all props and creates overrides
  for (const key in props) {
    overrides = _.assign(overrides, createOverrides(key, props[key]));
  }

  // retrieve HOC function
  return (rules: StyleRules): StyleRules => _.defaultsDeep(rules, overrides);
}

// INDEX PAGEs
export { PageIndexStyles, PageIndexStyleRules } from './v1/pages/PageIndexStyles';

// ENTRY PREVIEW
export {
  PreviewStyles,
  PreviewPictogramStyles,
  PreviewStyleRules,
  PreviewPictogramStyleRules,
} from './v1/components/Resource/Preview/PreviewStyles';

// ENTRY TOOLSPREVIEW
export {
  ToolsPreviewStyles,
  ToolsPreviewStyleRules,
} from './v1/components/Resource/ToolsPreview/ToolsPreviewStyles';

// ENTRY DETAIL
export { DetailStyles, DetailStyleRules } from './v1/components/Resource/Detail/DetailStyles';
export {
  DetailHeaderStyles,
  DetailHeaderStyleRules,
} from './v1/components/Resource/Detail/DetailHeaderStyles';
export {
  DetailContentStyles,
  DetailContentStyleRules,
} from './v1/components/Resource/Detail/DetailContentStyles';

// LISTs
export { ListItemStyles, ListItemStyleRules } from './v1/components/List/ListItemStyles';
