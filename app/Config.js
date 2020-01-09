import { Platform } from 'react-native';

export default {
  hostname: "http://" + (Platform.OS == 'ios' ? 'localhost:3000' : '10.0.2.2:3000'),
};

