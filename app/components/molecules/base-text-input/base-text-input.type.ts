import { TextInputProps } from 'react-native-paper';

export interface BaseTextInputProps extends TextInputProps {
    // make them not required to let each component that depends on BaseText
    // add its required props as it wishes
    isFocused?: boolean,
    isError?: boolean,
}
