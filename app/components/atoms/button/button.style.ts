import { COLORS } from '@/app/constants/colors';
import { SIZES } from '@/app/constants/sizes';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: SIZES.radius.full,
    backgroundColor: COLORS.primary[500],
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.neutral[500], // You can adjust the text color here
  },
});
