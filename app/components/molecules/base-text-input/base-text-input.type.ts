import { TextInputProps } from 'react-native-paper';

export interface BaseTextInputProps extends TextInputProps {
    isFocused: boolean,
    isError: boolean,
}
