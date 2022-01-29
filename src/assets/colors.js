import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const colors = {
  // base colors
  primary: '#2E86DE', // Main
  secondary: '#606d87', // Gray
  bannerPrimary:'#F5F5F5',

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#eff2f5',
  gray: '#BEC1D2',
  darkGray: '#999',
  grayBorder:'#D9D9D9',
  grayBackgroundColor:'#E2E2E2',
  light_green: '#D6F8AC',
  green: '#00996D',
  dark_green: '#318A17',
  light_blue: '#6690FF',
  blue: '#3366FF',
  dark_blue: '#1939B7',
  light_yellow: '#FFF7B2',
  yellow: '#FFE53F',
  dark_yellow: '#B79E1F',
  purple: '#800080',
  red:'red',

  placeholder: '#9FA5AA',
  border_color: '#E7E7E7',
  block: '#E7E7E7',
  icon: '#172B4D',
  header: '#525F7F',
  border: '#CAD1D7',
};
export const sizes = {
  // global sizes
  base: 8,
  small_font: 10,
  font: 14,
  radius: 12,
  padding: 24,
  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

};

const appTheme = { colors, sizes, width, height };

export default appTheme;
