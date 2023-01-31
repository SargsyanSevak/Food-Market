import * as React from "react"
import Svg, {Path} from 'react-native-svg';
const SearchIcon = (props) => (
  <Svg
  width={16}
  height={16}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
  >
    <Path
      d="M6.917 13.25c1.405 0 2.77-.47 3.876-1.336l3.48 3.48 1.12-1.12-3.48-3.48a6.295 6.295 0 0 0 1.337-3.877A6.34 6.34 0 0 0 6.917.583 6.34 6.34 0 0 0 .583 6.917a6.34 6.34 0 0 0 6.334 6.333Zm0-11.083c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75-4.75-2.13-4.75-4.75 2.13-4.75 4.75-4.75Z"
      fill="#333"
    />
  </Svg>
)

export default SearchIcon