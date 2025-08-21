import { ButtonState, ButtonType } from '@/app/enums';
import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  buttonText: string;
  buttonType: ButtonType;
  buttonState: ButtonState;
}