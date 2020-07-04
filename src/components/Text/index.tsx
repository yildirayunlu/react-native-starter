import * as React from 'react';
import { Text as BaseText } from 'react-native';

type Props = {};
export const Text: React.FC<Props> = ({ children, ...rest }) => {
  return <BaseText {...rest}>{children}</BaseText>;
};
