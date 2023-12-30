import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotifiacion from 'react-native-push-notification';
import PushNotificacionIos from '@react-native-community/push-notification-ios';
import {navigationRef} from './src/navigation/MainStackNavigator';
import {ARTWORK_SCREEN, FAVORITES_SCREEN} from './src/navigation/constants';

AppRegistry.registerComponent(appName, () => App);

PushNotifiacion.configure({
  onNotification: function (notification) {
    if (notification.userInteraction) {
      navigationRef.current?.navigate(ARTWORK_SCREEN);
    }
    notification.finish(PushNotificacionIos.FetchResult.NoData);
  },
  channelId: '1',
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});
