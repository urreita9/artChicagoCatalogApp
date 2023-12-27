import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 5,
    padding: '15@s',
  },
  content: {
    justifyContent: 'center',
    maxWidth: '75%',
    paddingLeft: '5@s',
  },
});
