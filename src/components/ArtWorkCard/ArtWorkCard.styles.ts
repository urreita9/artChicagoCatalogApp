import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/colors';

export default ScaledSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 5,
    padding: '15@s',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  fallbackContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '60@ms',
    width: '60@ms',
  },
  image: {
    borderRadius: '25@ms',
  },
  text: {
    justifyContent: 'center',
    maxWidth: '75%',
    paddingLeft: '15@s',
  },
  title: {
    color: Colors.black,
    fontSize: '14@ms0.3',
    marginBottom: 5,
  },
  subtitle: {
    color: Colors.grey,
    fontSize: '12@ms0.3',
  },
});
