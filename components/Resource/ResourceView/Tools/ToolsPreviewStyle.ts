import { Theme } from "@material-ui/core";

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  description: {
    color: 'black',
    fontSize: 16,
    fontWeight: 500,
    margin: '9px 15px 19px',
  },
  image: {
    maxWidth: 200,
    maxHeight: 113,
  },
});

export default styles;
