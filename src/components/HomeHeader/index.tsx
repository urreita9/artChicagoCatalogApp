import React from 'react';
import {View, Text} from 'react-native';
import Logo from '../../assets/logo.svg';
import IconButton from '../IconButton';
import styles from './styles';
import Colors from '../../utils/colors';

interface Props {
  onMapBtnPress: () => void;
  address: string;
  city: string;
}

const HomeHeader = ({onMapBtnPress, address, city}: Props) => {
  return (
    <View style={styles.container}>
      <Logo color={Colors.primary} />
      <View style={styles.location}>
        <IconButton icon="location-pin" onPress={onMapBtnPress} />
        <Text style={styles.locationText}>{address}</Text>
        <Text style={styles.locationText}>{city}</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
