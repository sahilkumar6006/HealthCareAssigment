import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 6.188c0-1.141 1.053-2.063 2.357-2.063h28.286c1.304 0 2.357.922 2.357 2.063 0 1.14-1.053 2.062-2.357 2.062H2.357C1.053 8.25 0 7.328 0 6.187zM0 16.5c0-1.14 1.053-2.063 2.357-2.063h28.286c1.304 0 2.357.922 2.357 2.063 0 1.14-1.053 2.063-2.357 2.063H2.357C1.053 18.563 0 17.64 0 16.5zm33 10.313c0 1.14-1.053 2.062-2.357 2.062H2.357C1.053 28.875 0 27.953 0 26.812c0-1.14 1.053-2.062 2.357-2.062h28.286c1.304 0 2.357.922 2.357 2.063z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
