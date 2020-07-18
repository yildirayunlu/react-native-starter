import * as React from 'react';
import { View, ViewProps } from 'react-native';

type Props = ViewProps & {};
export const Box: React.FC<Props> = ({ children, ...rest }) => {
  return <View {...rest}>{children}</View>;
};
