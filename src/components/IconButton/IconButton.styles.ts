import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/colors';

export default ScaledSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 25,
    gap: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '15@vs',
    width: '150@s',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  text: {
    fontSize: '14@s',
  },
});
