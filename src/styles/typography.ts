import { TextStyle } from 'react-native';

type FontWeight = 'small' | 'regular' | 'bold' | 'medium' | 'semiBold';

type CustomTextStyle = {
  [key in FontWeight]: TextStyle;
};

export const textStyle: CustomTextStyle = {
  small: { fontFamily: 'System', fontWeight: '300' },
  regular: { fontFamily: 'System', fontWeight: 'normal' },
  bold: { fontFamily: 'System', fontWeight: 'bold' },
  medium: { fontFamily: 'System', fontWeight: '500' },
  semiBold: { fontFamily: 'System', fontWeight: '600' },
};

export const fonts = {
  georgia: 'Georgia',
  amita: 'Amita-Bold',
  poppinsBold: 'Poppins-Bold',
  poppinsRegular: 'Poppins-Regular',
};
