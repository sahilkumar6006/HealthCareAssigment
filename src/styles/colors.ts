import { Colors } from 'react-native/Libraries/NewAppScreen';

export const device = Colors;

export const neutral = {
  white: '#ffffff',
  s50: '#F2F2F2',
  s100: '#efeff6',
  s150: '#dfdfe6',
  s200: '#c7c7ce',
  s250: '#bbbbc2',
  s300: '#9f9ea4',
  s400: '#7c7c82',
  s500: '#515154',
  s600: '#38383a',
  s650: '#353535',
  s700: '#2d2c2e',
  s800: '#212123',
  s900: '#161617',
  s950: '#1E1E1E',
  black: '#000000',
};

export const primary = {
  extraLight: '#FFE8E2',
  light: '#F61111',
  brand: '#EF4E24',
  dark: '#006EAF',
};

export const secondary = {
  light: '#FBC4C4',
  brand: '#FFF2EF',
  dark: '#bfebff',
  yellow: '#F8B026',
};

export const textColor = {
  onPrimary: '#ffffff',
  onSecondary: '#B82626',
  onSurface: '#000',
  onSurfaceTwo: '#4D4C4C',
  lightGrey: '#bbbbc2',
};

export const danger = {
  light: '#cf6d6d',
  default: '#EF4D4D',
  red: '#ff0000',
};

export const surface = {
  default: '#fff',
  light: '#FAFAFF',
  background: '#F4F5F7',
};

export const success = {
  default: '#008a09',
  secondary: '#4BA903',
  border: '#1E7512',
  light: '#FBFFF4',
};

export const warning = {
  light: '#B1751B',
  light100: '#F3EADD',
  default: '#EC5124',
};

export const info = {
  default: '#2373E0',
};

export const notification = {
  surface: '#0061FE14',
  unread: '#824890',
  read: '#283750',
};

export const logo = {
  pink: '#C60176',
  lightPink: '#fbebe4',
};

export const gradient = {};

export const applyOpacity = (hexColor: string, opacity: number): string => {
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const transparent = {
  clear: 'rgba(255, 255, 255, 0)',
  lightGray: applyOpacity(neutral.s300, 0.4),
  darkGray: applyOpacity(neutral.s800, 0.8),
};


export const AppColor = {
  primary: '#5D9CEC',
  secondary: '#4CDA64',
  background: '#F8F8F8',
  cardBackground: '#FFFFFF',
  textPrimary: '#333333',
  textSecondary: '#666666',
  textLink: '#007AFF',
  border: '#E0E0E0',
  iconColor: '#8E8E93',
  starYellow: '#FFC107',
  white: '#FFFFFF',
  black: '#000000',
};