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
  },
  content: {
    flex: 1,
    width: '300@s',
  },
  footer: {
    width: '300@s',
  },
  originDate: {
    fontSize: '14@s',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '16@s',
  },
});
