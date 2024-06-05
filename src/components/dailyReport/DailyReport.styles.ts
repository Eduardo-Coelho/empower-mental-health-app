import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../styles';

const common = StyleSheet.create({
  text: {
    fontFamily: commonStyles.android_fonts.sansSerifCondensed,
    textAlign: 'left',
    color: colors.ghostWhite,
    fontWeight: '700',
  },
});

export const dailyReportStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  h2: {
    fontSize: 20,
    ...common.text,
  },
  h1: {
    fontSize: 40,
    ...common.text,
  },

  conditionsContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonsContainer: {
    padding: 4,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    padding: 15,
    borderRadius: 50,
  },
  label: {
    fontWeight: '700',
    fontSize: 15,
  },
});
