import React from 'react';
import {View, Text} from 'react-native';
import Logo from '../../assets/logo.svg';
import IconButton from '../IconButton/IconButton';
import styles from './HomeHeader.styles';
import Colors from '../../utils/colors';

interface Props {
  navBtnPress: () => void;
}

const HomeHeader = ({navBtnPress}: Props) => {
  return (
    <View style={styles.container}>
      <Logo color={Colors.primary} />
      <IconButton text="Favorites" icon="favorite" onPress={navBtnPress} />
    </View>
  );
};

export default HomeHeader;
