import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckIcon = props => (
  <Svg
    width={62}
    height={54}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M57.626 0 20.36 44.366 4.542 24.669 0 30.02l10.246 12.068L20.36 54 30.41 42.164 62 4.954 57.626 0Z"
      fill="#333"
    />
  </Svg>
);

export default CheckIcon;
