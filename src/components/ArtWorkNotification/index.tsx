import {useEffect} from 'react';
import {Platform, AppState} from 'react-native';
import {useStore} from '../../app/store';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const ArtWorkNotification = () => {
  const {setArtWorkDetails, randomArtWorkDetails} = useStore();
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (AppState.currentState === 'background') {
        if (randomArtWorkDetails.id) {
          setArtWorkDetails({artWork: randomArtWorkDetails});
          if (Platform.OS == 'ios') {
            PushNotificationIOS.addNotificationRequest({
              id: '1',
              body: `Check out '${randomArtWorkDetails.title}'`,
              title: randomArtWorkDetails.title,
              sound: 'default',
              fireDate: new Date(new Date().getTime() + 5000),
            });
          } else if (Platform.OS === 'android') {
            PushNotification.localNotificationSchedule({
              channelId: '1',
              message: `Check out '${randomArtWorkDetails.title}'`,
              title: randomArtWorkDetails.title,
              soundName: 'default',
              date: new Date(new Date().getTime() + 5000),
            });
          }
        }
      }
    });

    return () => {
      subscription.remove();
    };
  }, [AppState.currentState]);
  return null;
};

export default ArtWorkNotification;
