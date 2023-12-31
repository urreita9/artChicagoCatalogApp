import {useEffect} from 'react';
import {Platform, AppState, AppStateStatus} from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {useStore} from '../app/store';

const usePushNotifications = () => {
  const {setArtWorkDetails, randomArtWorkDetails} = useStore();

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'background' && randomArtWorkDetails.id) {
        setArtWorkDetails({artWork: randomArtWorkDetails});

        if (Platform.OS === 'ios') {
          PushNotificationIOS.addNotificationRequest({
            id: '1',
            body: `Check out '${randomArtWorkDetails.title}'`,
            title: randomArtWorkDetails.title,
            sound: 'default',
            fireDate: new Date(new Date().getTime() + 5000),
          });
        } else if (Platform.OS === 'android') {
          PushNotification.createChannel(
            {
              channelId: '1',
              channelName: 'My channel',
              soundName: 'default',
            },
            created => console.log(`createChannel returned '${created}'`),
          );
          PushNotification.localNotificationSchedule({
            channelId: '1',
            message: `Check out '${randomArtWorkDetails.title}'`,
            title: randomArtWorkDetails.title,
            soundName: 'default',
            date: new Date(new Date().getTime() + 5000),
          });
        }
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, [randomArtWorkDetails, setArtWorkDetails]);

  return null;
};

export default usePushNotifications;
