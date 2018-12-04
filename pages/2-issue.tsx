import { Typography, WithStyles } from '@material-ui/core';
import { FavoriteRounded } from '@material-ui/icons';
import {
  GenericPreview, ToolsPreview, ToolsTabs, Button,
} from 'components';
import { createLayout, LayoutInjectedProps } from 'containers';
import { Coloring } from 'lib/types';
import Head from 'next/head';
import React from 'react';
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

        <div>Adapting HOC based on Props</div>
        <Button color={Coloring.Red}>Red Button</Button>
        <Button color={Coloring.Blue}>Blue Button</Button>
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
