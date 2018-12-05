import { Theme } from "@material-ui/core";

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  tabsScroller: {
    '&::-webkit-scrollbar': {
      display: 'none',
    }
  },
  tabsIndicator: {
    display: 'none',
  },
  tabRoot: {
    textTransform: 'unset',
    width: '120px',
    height: '34px',
    minHeight: 0,
    margin: '0 10px',
    padding: 0,
    opacity: 0.5,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  tabLabelContainer: {
    padding: 0,
  },
  tabColorPrimary: {
    color: '#ab7318',
  },
  tabSelected: {
    color: '#7a5211 !important',
    backgroundImage: 'linear-gradient(to left, #fbd249, #f5a623) !important',
    opacity: 1,
  },
});

export default styles;
