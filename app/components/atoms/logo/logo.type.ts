import { ImageProps } from 'react-native';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

export interface LogoProps extends ImageProps {
  width: Double;
  height: Double;
}