import * as React from 'react';
import { Text as BaseText, TextProps } from 'react-native';

type Props = TextProps & {};
export const Text: React.FC<Props> = ({ children, ...rest }) => {
  return <BaseText {...rest}>{children}</BaseText>;
};
