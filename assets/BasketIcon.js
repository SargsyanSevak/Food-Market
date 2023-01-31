import * as React from "react"
import Svg, {Path} from 'react-native-svg';

const BasketIcon = (props) => (
  <Svg
    width={14}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.625 10.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-10-10V1.5h1.25l2.25 4.744-.85 1.531c-.094.175-.15.381-.15.6a1.25 1.25 0 0 0 1.25 1.25h7.5v-1.25H4.638a.156.156 0 0 1-.157-.156c0-.031.006-.056.019-.075l.563-1.019h4.656c.469 0 .881-.263 1.094-.644l2.237-4.043a.791.791 0 0 0 .075-.313.625.625 0 0 0-.625-.625H3.256L2.67.25m1.706 10a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      fill="#3C6954"
    />
  </Svg>
)

export default BasketIcon