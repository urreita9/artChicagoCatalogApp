import React, {useEffect} from 'react';
import MainNavigator from './src/navigation/MainStackNavigator';
import ArtWorkNotification from './src/components/ArtWorkNotification';
import {PermissionsAndroid, Platform} from 'react-native';

const checkApplicationPermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  } catch (error) {}
};

const App = (): React.JSX.Element => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      checkApplicationPermission();
    }
  }, []);
  return (
    <>
      <MainNavigator />
      <ArtWorkNotification />
    </>
  );
};

export default App;
