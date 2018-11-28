import _ from 'lodash';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

/**
 * Custom document component
 */
class MyDocument extends Document {
  /**
   * Get initial props
   * // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
   */
  static getInitialProps = (ctx: any) => {
    // page context
    let pageContext: object & { sheetsRegistry?: any } = {};

    const page = ctx.renderPage((Component: any) => {
      const WrappedComponent = (props: any) => {
        pageContext = props.pageContext;
        return <Component {...props} />;
      };

      return WrappedComponent;
    });

    return {
      ...page,
      pageContext,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html:
                pageContext && _.has(pageContext, 'sheetsRegistry')
                  ? pageContext.sheetsRegistry.toString()
                  : '',
            }}
          />
        </React.Fragment>
      ),
    };
  };

  /**
   * Render method
   */
  render() {
    const themeColor = _.get(
      this.props,
      ['pageContext', 'theme', 'palette', 'primary', 'main'],
      '',
    );
    return (
      <html lang="en" dir="ltr">
        <Head>
          {/* Use utf-8 charset */}
          <meta charSet="utf-8" />

          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, '
              + 'minimum-scale=1, width=device-width, height=device-height'
            }
          />

          {/* PWA primary color */}
          <meta name="theme-color" content={themeColor} />

          {/* Google Font */}
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700&amp;subset=latin-ext"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

// EXPORTS
export default MyDocument;
