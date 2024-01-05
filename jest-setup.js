import '@testing-library/react-native/extend-expect';
global.__reanimatedWorkletInit = () => {};
jest.mock('react-native-reanimated', () => 'Animated');
jest.mock('react-native-size-matters', () => ({
  ScaledSheet: {
    create: jest.fn().mockImplementation(styles => styles),
  },
  moderateScale: jest.fn(),
}));

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
