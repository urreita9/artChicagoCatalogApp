import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/colors';

export default ScaledSheet.create({
  text: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: '15@s',
  },
  title: {
    color: Colors.black,
    fontSize: '14@ms0.3',
    marginBottom: 5,
    textAlign: 'left',
  },
});
