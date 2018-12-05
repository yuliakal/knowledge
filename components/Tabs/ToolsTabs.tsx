import React from 'react';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styles from './ToolsTabsStyle';

type ToolsTabsProps = {
  onChange: (value: number) => void;
};

// TODO: Move constants to suitable global constant file.
const tabItems = ['who I am', 'values', 'gratitude', 'goals', 'achievements', 'vision'];

class ToolsTabs extends React.Component<ToolsTabsProps & WithStyles> {
  public state = {
    value: 0,
  };

  public handleChange = (event: any, value: any) => {
    const { onChange }= this.props;

    this.setState({ value });
    onChange(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="off"
            classes={{
              scroller: classes.tabsScroller,
              indicator: classes.tabsIndicator,
            }}
          >
            {tabItems.map((item: string) => (
              <Tab
                label={item}
                classes={{
                  root: classes.tabRoot,
                  textColorPrimary: classes.tabColorPrimary,
                  selected: classes.tabSelected,
                  labelContainer: classes.tabLabelContainer,
                }}
              />
            ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

// STYLEs
const Component = withStyles(styles)(ToolsTabs);

// EXPORTs
export { Component as ToolsTabs };
