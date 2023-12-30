import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/colors';

export default ScaledSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  contentContainer: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: '30@vs',
    right: '30@s',
    borderRadius: '30@s',
  },
  iconContainer: {
    width: '60@s',
    height: '60@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '26@s',
    height: '26@s',
  },
});
