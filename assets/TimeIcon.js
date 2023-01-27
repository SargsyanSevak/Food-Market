import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TimeIcon = props => (
  <Svg
    width={66}
    height={66}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M33 65.375A32.374 32.374 0 1 1 33 .626a32.374 32.374 0 0 1 0 64.749ZM33 5.25a27.75 27.75 0 1 0 0 55.5 27.75 27.75 0 0 0 0-55.5Z"
      fill="#3C6954"
    />
  </Svg>
);

export default TimeIcon;
