import * as React from "react"
import Svg, {Path} from 'react-native-svg';

const ArrowBottom = (props) => (
  <Svg
    width={13}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.842 1.416a.903.903 0 0 1-.334.704L7.095 6.48a.902.902 0 0 1-1.146 0L.536 1.967A.904.904 0 0 1 1.691.577l4.836 4.034L11.362.712a.902.902 0 0 1 1.48.704Z"
      fill="#333"
    />
  </Svg>
)

export default ArrowBottom