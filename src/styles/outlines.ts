import { StyleSheet } from 'react-native';

import * as Colors from './colors';


export const shadow = {
  base: {
    shadowColor: Colors.neutral.s400,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  large: {
    shadowColor: Colors.neutral.s600,
    shadowOffset: {
      width: -1,
      height: -5,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
};
