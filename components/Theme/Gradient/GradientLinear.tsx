import { Direction } from 'lib/types';

const Coordinates = {
  [Direction.Left]: {
    x1: '100%',
    y1: '50%',
    x2: '0%',
    y2: '50%',
  },
  [Direction.Right]: {
    x1: '0%',
    y1: '50%',
    x2: '100%',
    y2: '50%',
  },
  [Direction.Top]: {
    x1: '50%',
    y1: '100%',
    x2: '50%',
    y2: '0%',
  },
  [Direction.Bottom]: {
    x1: '50%',
    y1: '0%',
    x2: '50%',
    y2: '100%',
  },
};

/**
 * GRADIENT PROPS
 */
type GradientLinearProps = {
  id: string;
  colorBegin: string;
  colorEnd: string;
  direction: Direction;
};

/**
 * GRADIENT
 */
const GradientLinear: React.SFC<GradientLinearProps> = (props) => {
  const {
    id, colorBegin, colorEnd, direction,
  } = props;

  return (
    <svg style={{ height: 0, width: 0, position: 'absolute' }} focusable="false">
      <defs>
        <linearGradient id={id} {...Coordinates[direction]}>
          <stop offset="0%" stopColor={colorBegin} />
          <stop offset="100%" stopColor={colorEnd} />
        </linearGradient>
      </defs>
    </svg>
  );
};

// EXPORTS
export { GradientLinear };
