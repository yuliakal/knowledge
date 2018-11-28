import { Omit } from 'lib/types';
import { ComponentType } from 'react';

/**
 * WITH DEFAULT PROPS
 * ---
 * Adds typings to component default props
 * @param defaultProps
 * @param Cmp
 * @see https://github.com/Hotell/blogposts/blob/master/2018-02/ultimate-react-component-patterns/src/utils.ts
 */
export function withDefaultProps<P extends object, DP extends Partial<P> = Partial<P>>(
  defaultProps: DP,
  Cmp: ComponentType<P>,
) {
  // we are extracting props that need to be required
  type RequiredProps = Omit<P, keyof DP>;
  // we are re-creating our props definition by creating and intersection type
  // between all original props mapped to be optional and required to be required
  type Props = Partial<DP> & Required<RequiredProps>;

  // here we set our defaultProps
  Cmp.defaultProps = defaultProps;

  // we override return type definition by turning type checker off
  // for original props  and setting the correct return type
  return (Cmp as ComponentType<any>) as ComponentType<Props>;
}
