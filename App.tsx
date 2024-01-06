import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import MainNavigator from './src/navigation/MainStackNavigator';
import SplashScreen from 'react-native-splash-screen';
import usePushNotifications from './src/hooks/usePushNotifications';

const checkApplicationPermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  } catch (error) {}
};

const App = (): React.JSX.Element => {
  usePushNotifications();

  useEffect(() => {
    if (Platform.OS === 'android') {
      checkApplicationPermission();
    }
    SplashScreen.hide();
  }, []);

  return <MainNavigator />;
};

export default App;
