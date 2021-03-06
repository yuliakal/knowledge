import { GenericPreview, ToolsPreview, ToolsTabs } from 'components';
import { createLayout, LayoutInjectedProps } from 'containers';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { WithStyles } from '@material-ui/core';
import { PageIndexStyleRules, PageIndexStyles } from 'theme';

/**
 * PAGE INDEX PROPS
 */
type IndexProps = WithStyles<PageIndexStyleRules>;

/**
 * PAGE INDEX
 * ---
 * Website home page component
 *
 * This is the first page user will see when visit project url.
 * @version 1.0
 * @namespace pages
 */
class Index extends React.Component<IndexProps> {
  /**
   * Render method
   */
  render() {
    const { classes } = this.props;

    /**
     * Render method
     */
    return (
      <div className={classes.root}>
        <Head>
          <link rel="stylesheet" href="/static/css/pages/page.index.css" />
        </Head>

        <ol>
          <li>
            <Link href="/1-issue" passHref>
              <a>#1 ISSUE - ToolsTabs component & ToolsPreview component</a>
            </Link>
          </li>
          <li>
            <Link href="/2-issue" passHref>
              <a>#2 ISSUE - ToolsTabs component & ToolsPreview component</a>
            </Link>
          </li>
        </ol>
      </div>
    );
  }
}

/**
 * Page props
 */
const layoutProps: LayoutInjectedProps = {
  theme: PageIndexStyles,
};

// EXPORTS
const withLayout = createLayout(layoutProps);
export default withLayout(Index);
