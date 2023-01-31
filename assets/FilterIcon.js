import * as React from "react"
import Svg, {Path} from 'react-native-svg';
const FilterIcon = (props) => (
  <Svg
    width={21}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.333 14h2.334a1.17 1.17 0 0 0 1.166-1.167 1.17 1.17 0 0 0-1.166-1.166H9.333a1.17 1.17 0 0 0-1.166 1.166A1.17 1.17 0 0 0 9.333 14ZM0 1.167a1.17 1.17 0 0 0 1.167 1.166h18.666A1.17 1.17 0 0 0 21 1.167 1.17 1.17 0 0 0 19.833 0H1.167A1.17 1.17 0 0 0 0 1.167Zm4.667 7h11.666A1.17 1.17 0 0 0 17.5 7a1.17 1.17 0 0 0-1.167-1.167H4.667A1.17 1.17 0 0 0 3.5 7a1.17 1.17 0 0 0 1.167 1.167Z"
      fill="#333"
    />
  </Svg>
)

export default FilterIcon
