import {View, Text, ViewStyle, TextStyle} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import {ArtWorkContext} from '../Card/Card';

export interface Props {
  titleContainerStyle?: ViewStyle;
  titleTextStyle?: TextStyle;
}

const CardTitle = ({titleContainerStyle, titleTextStyle}: Props) => {
  const {artWork} = useContext(ArtWorkContext);
  return (
    <View style={[styles.text, titleContainerStyle]}>
      <Text style={[styles.title, titleTextStyle]}>{artWork.title}</Text>
    </View>
  );
};

export default CardTitle;
