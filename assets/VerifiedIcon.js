import * as React from "react"
import Svg, {Mask, Path,G, Defs, ClipPath,} from 'react-native-svg';
const VerifiedIcon = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 1.455C0 .65.651 0 1.455 0h13.09C15.35 0 16 .651 16 1.455V8A8 8 0 1 1 0 8V1.455Z"
      fill="#3C6954"
    />
    <G clipPath="url(#a)">
      <Mask
        id="b"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={3}
        width={10}
        height={10}
      >
        <Path
          d="m8 3.833 1.094.799 1.355-.003.416 1.29 1.098.793L11.542 8l.42 1.287-1.097.795-.416 1.289-1.355-.003L8 12.167l-1.095-.799-1.354.003-.416-1.29-1.098-.794L4.458 8l-.42-1.288 1.097-.794.416-1.289 1.354.003L8 3.833Z"
          fill="#fff"
          stroke="#fff"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="m6.542 8 1.041 1.042 2.083-2.084"
          stroke="#000"
          strokeWidth={0.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Mask>
      <G mask="url(#b)">
        <Path d="M3 3h10v10H3V3Z" fill="#fff" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(3 3)" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default VerifiedIcon
