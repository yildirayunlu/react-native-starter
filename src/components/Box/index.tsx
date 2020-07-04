import * as React from 'react';
import { View } from 'react-native';

type Props = {};
export const Box: React.FC<Props> = ({ children, ...rest }) => {
  return <View {...rest}>{children}</View>;
};
