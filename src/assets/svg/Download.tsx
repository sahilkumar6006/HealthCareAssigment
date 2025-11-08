import * as React from "react"
import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg"

function DownloadIcon(props: SvgProps) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <Path d="M12 30v6a4 4 0 004 4h16a4 4 0 004-4v-6" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M24 10v20" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M32 22l-8 8-8-8" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

export default DownloadIcon
