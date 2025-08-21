import Icomoon from "react-native-icomoon";
import json from './../../../../assets/icons/selection.json';
import { IconProps } from './icon.type';



export default function Icon({ name, ...restProps }: IconProps) {
 
//  console.log(iconList(json));
  return <Icomoon  iconSet={json} name={name} {...restProps} />
}