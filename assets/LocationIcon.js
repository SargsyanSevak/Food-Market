import * as React from "react"
import Svg, {Path} from 'react-native-svg';
const LocationIcon = (props) => (
  <Svg
    width={9}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="m4.5 10.977.39-.44c.444-.508.842-.99 1.197-1.447l.293-.387c1.223-1.647 1.834-2.954 1.834-3.92 0-2.063-1.663-3.735-3.714-3.735C2.448 1.048.786 2.72.786 4.782c0 .967.611 2.274 1.834 3.921l.293.387A33.927 33.927 0 0 0 4.5 10.977Z"
      stroke="#3C6954"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default LocationIcon
