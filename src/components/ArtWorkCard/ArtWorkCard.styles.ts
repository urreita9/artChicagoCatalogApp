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
    borderRadius: '30@ms',
  },
  text: {
    justifyContent: 'center',
    maxWidth: '75%',
    paddingLeft: '5@s',
  },
  title: {
    color: '#000000',
    fontSize: '14@ms0.3',
    marginBottom: 5,
  },
  subtitle: {
    color: '#455a64',
    fontSize: '12@ms0.3',
  },
});
