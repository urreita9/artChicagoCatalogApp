import React, {useContext} from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';
import {ArtWorkContext} from '../Card/Card';

export interface Props {
  descriptionContainerStyle?: ViewStyle;
  descriptionTextStyle?: TextStyle;
}

const CardDescription = ({
  descriptionContainerStyle,
  descriptionTextStyle,
}: Props) => {
  const {artWork} = useContext(ArtWorkContext);
  return (
    <View style={[styles.descriptionContainer, descriptionContainerStyle]}>
      <Text style={[styles.descriptionText, descriptionTextStyle]}>
        {artWork.description}
      </Text>
    </View>
  );
};

export default CardDescription;
