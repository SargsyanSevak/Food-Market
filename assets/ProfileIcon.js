import * as React from "react"
import Svg, {Path} from 'react-native-svg';

const ProfileIcon = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M31.625 16a15.626 15.626 0 1 0-26.14 11.547c.039.05.086.091.14.125a15.61 15.61 0 0 0 20.766 0l.125-.125A15.561 15.561 0 0 0 31.625 16Zm-30 0a14.375 14.375 0 1 1 24.563 10.14c-1.552-2.599-6.954-5.328-6.954-5.328a6.875 6.875 0 1 0-6.468 0 11.844 11.844 0 0 0-6.954 5.329A14.39 14.39 0 0 1 1.625 16ZM16 20.375a5.625 5.625 0 1 1 0-11.25 5.625 5.625 0 0 1 0 11.25ZM6.766 27a10.624 10.624 0 0 1 18.468 0 14.328 14.328 0 0 1-18.468 0Z"
      fill="#fff"
    />
  </Svg>
)

export default ProfileIcon
