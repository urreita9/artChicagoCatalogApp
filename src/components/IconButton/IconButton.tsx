import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './IconButton.styles';
import Colors from '../../utils/colors';
import {scale} from 'react-native-size-matters';

interface Props {
  icon: string;
  text: string;
  onPress: () => void;
}

const IconButton = ({onPress, text, icon}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Icon name={icon} color={Colors.primary} size={scale(20)} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
