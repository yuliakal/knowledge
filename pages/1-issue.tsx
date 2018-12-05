import { GenericPreview, ToolsPreview, ToolsTabs } from 'components';
import { createLayout, LayoutInjectedProps } from 'containers';
import Head from 'next/head';
import React from 'react';
import { PageIndexStyleRules, PageIndexStyles } from 'theme';
import { Typography, WithStyles } from '@material-ui/core';
import { Coloring } from 'lib/types';
import { FavoriteRounded } from '@material-ui/icons';

import mockResponse from './mock_response';

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
  public state = {
    value: 0,
  };

  onChange = (value: number) => {
    this.setState({ value });
  };

  /**
   * Render method
   */
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    /**
     * Render method
     */
    return (
      <div className={classes.root}>
        <Head>
          <link rel="stylesheet" href="/static/css/pages/page.index.css" />
        </Head>

        <Typography variant="h1">Tools Tabs</Typography>
        <ToolsTabs onChange={this.onChange} />

        <Typography variant="h1">Tools Preview</Typography>
        <ToolsPreview images={mockResponse[value].images} description={mockResponse[value].description} />

        <Typography variant="h1">Example ResourcePreview component</Typography>
        <GenericPreview
          cover="/static/img/entries/fun_01.jpg"
          title="Example title"
          purpose="Example"
          coloring={Coloring.Pink}
          pictogram={FavoriteRounded}
        />
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
