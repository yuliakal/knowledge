import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import getPageContext from 'lib/_context';
import _ from 'lodash';
import App, { Container } from 'next/app';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { Provider as StoreProvider } from 'react-redux';
import 'static/css/document.css';
import 'static/css/nprogress.css';

/**
 * Custom app component
 * @see https://github.com/zeit/next.js/#custom-app
 * ---
 * 1. Injects Jss provider into DOM
 * 2. Injects MUI Theme provider into DOM
 * 3. Injects CssBaseline into DOM
 * 4. Removes server side JSS from DOM on componentDidMount
 * ---
 * HINT Resolution order:
 *
 * Server
 * 1. app.getInitialProps
 * 2. page.getInitialProps
 * 3. document.getInitialProps
 * 4. app.render
 * 5. page.render
 * 6. document.render
 *
 * Server with error
 * 1. document.getInitialProps
 * 2. app.render
 * 3. page.render
 * 4. document.render
 *
 * Client
 * 1. app.getInitialProps
 * 2. page.getInitialProps
 * 3. app.render
 * 4. page.render
 */
class MyApp extends App {
  /**
   * Page context
   */
  public pageContext: any;

  /**
   * Constructor
   */
  constructor(props: any) {
    super(props);
    this.pageContext = getPageContext();
  }

  /**
   *
   * @param param0
   */
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  /**
   * Do not forget to:
   * 1. Remove server-side jss after component did mount
   */
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  /**
   * Render method
   */
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

// EXPORTS
export default MyApp;
