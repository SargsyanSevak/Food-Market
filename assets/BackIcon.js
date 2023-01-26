import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BackIcon = (props) => (
  <Svg
    width={11}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.169 20.708a1.457 1.457 0 0 1-1.138-.54l-7.043-8.75a1.459 1.459 0 0 1 0-1.851L8.279.817a1.46 1.46 0 0 1 2.246 1.866L4.006 10.5l6.3 7.817a1.458 1.458 0 0 1-1.137 2.391Z"
      fill="#333"
    />
  </Svg>
)

export default BackIcon