import * as React from "react"
import Svg, {Path} from 'react-native-svg';

const ClockIcon = (props) => (
  <Svg
    width={17}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.614 34.875.687 21.948V.188h4.625v19.84l11.563 11.586-3.26 3.261Z"
      fill="#3C6954"
    />
  </Svg>
)

export default ClockIcon