import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  artist: {
    fontSize: '14@s',
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    padding: '10@s',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    width: '300@s',
  },
  footer: {},
  originDate: {
    fontSize: '14@s',
    alignSelf: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16@s',
  },
});
