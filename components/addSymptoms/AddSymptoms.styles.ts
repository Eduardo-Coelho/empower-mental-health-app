import { colors, commonStyles } from '@/app/styles';
import { StyleSheet } from 'react-native';

const font = commonStyles.android_fonts.sansSerifCondensed;

export const addSymptomsStyles = StyleSheet.create({
  fab: {
    backgroundColor: colors.ghostWhite,
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 50,
    zIndex: 10,
    width: 170,
  },
  fabLabel: {
    fontFamily: font,
    fontWeight: '700',
    fontSize: 15,
    color: colors.dark,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    borderRadius: 30,
    padding: 24,
    gap: 12,
  },
  title: {
    fontFamily: font,
    fontWeight: '700',
    fontSize: 20,
    color: colors.ghostWhite,
    marginBottom: 4,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontFamily: font,
    fontSize: 14,
    color: colors.ghostWhite,
  },
  inputLabel: {
    fontFamily: font,
    fontSize: 12,
    fontWeight: '600',
    color: colors.lightGray,
    marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  btnCancel: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
  },
  btnAdd: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 50,
    backgroundColor: colors.ghostWhite,
    alignItems: 'center',
  },
  btnCancelLabel: {
    fontFamily: font,
    fontWeight: '700',
    fontSize: 15,
    color: colors.ghostWhite,
  },
  btnAddLabel: {
    fontFamily: font,
    fontWeight: '700',
    fontSize: 15,
    color: colors.dark,
  },
});
