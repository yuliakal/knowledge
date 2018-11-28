import { createGenerateClassName, createMuiTheme } from '@material-ui/core/styles';
import { SheetsRegistry } from 'jss';
import themeOptions from 'theme/v1';

/**
 * MUI Theme definition
 * ---
 * Loads custom theme definition
 */
const theme = createMuiTheme(themeOptions);

/**
 * Creates page context
 * ---
 * Uses MUI Theme, creates new instance of SheetsRegistry and SheetsManager
 */
function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

/**
 * Retrieves current page context to be used by application
 * ---
 * Creates new context for every server-side request
 */
function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  // @ts-ignore
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  // @ts-ignore
  if (!global.__INIT_MATERIAL_UI__) {
    // @ts-ignore
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  // @ts-ignore
  return global.__INIT_MATERIAL_UI__;
}

// EXPORTS
export default getPageContext;
