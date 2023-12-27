import {View, StyleProp, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface Props {
  style: StyleProp<ViewStyle>;
}

const CardContent = ({style, children}: PropsWithChildren<Props>) => {
  return <View style={style}>{children}</View>;
};

export default CardContent;
