import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/colors';

export default ScaledSheet.create({
  descriptionContainer: {
    justifyContent: 'center',
    maxWidth: '75%',
    paddingLeft: '15@s',
  },
  descriptionText: {
    color: Colors.grey,
    fontSize: '12@ms0.3',
  },
});
