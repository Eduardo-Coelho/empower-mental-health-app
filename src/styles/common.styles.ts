export const colors = {
  dark: '#000000',
  white: '#FFFFFF',
  ghostWhite: '#F8F8FF',
  gray: '#808080',
  lightGray: '#D3D3D3',
  tomato: '#FF6347',
  springGreen: '#00FF7F',
};

export const commonStyles = {
  blurContainer: (radius?: number, padding?: number) => ({
    padding: padding ? padding : 10,
    borderRadius: radius ? radius : 0,
  }),
  android_fonts: {
    normal: 'normal',
    notoserif: 'notoserif',
    sansSerif: 'sans-serif',
    sansSerifLight: 'sans-serif-light',
    sansSerifThin: 'sans-serif-thin',
    sansSerifCondensed: 'sans-serif-condensed',
    sansSerifMedium: 'sans-serif-medium',
    serif: 'serif',
    roboto: 'Roboto',
    monospace: 'monospace',
  },
};
