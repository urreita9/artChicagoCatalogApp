import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/colors';

export default ScaledSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 5,
    padding: '15@s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
  },
});
