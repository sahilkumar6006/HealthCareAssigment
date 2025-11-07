import * as React from "react";
import Svg, {
  Rect,
  G,
  Circle,
  Mask,
  Path,
  Defs,
  Pattern,
  Use,
  ClipPath,
  Image,
} from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={149}
    height={149}
    viewBox="0 0 149 149"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={149} height={149} fill="url(#pattern0_7_885)" />
    <G clipPath="url(#clip0_7_885)">
      <Circle
        cx={74.5}
        cy={74.5}
        r={48.6667}
        stroke="#47C2C4"
        strokeWidth={2}
      />
      <Mask
        id="mask0_7_885"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={37}
        y={37}
        width={75}
        height={75}
      >
        <Circle cx={74.5} cy={74.5} r={37.25} fill="#141414" />
      </Mask>
      <G mask="url(#mask0_7_885)">
        <G clipPath="url(#clip1_7_885)">
          <Path
            opacity={0.5}
            d="M24.8333 65.1875C30.821 65.1875 36.5889 67.4427 40.9887 71.504L47.1505 77.1918C54.9995 84.437 67.0977 84.437 74.9467 77.1918C82.4162 70.2969 93.8115 69.9206 101.719 76.3079L107.61 81.0652C112.297 84.8514 118.141 86.9166 124.167 86.9166V111.75H24.8333V65.1875Z"
            fill="#47C2C4"
          />
        </G>
        <G clipPath="url(#clip2_7_885)">
          <Path
            d="M24.8333 80.7083H26.814C31.6443 80.7083 36.4171 79.66 40.8028 77.6358L47.9852 74.3209C55.8931 70.6711 65.2209 72.143 71.6207 78.0505C80.5559 86.2984 94.5429 85.5193 102.507 76.3301L108.755 69.1206C112.629 64.651 118.252 62.0833 124.167 62.0833V111.75H24.8333V80.7083Z"
            fill="#47C2C4"
          />
        </G>
      </G>
    </G>
    <Defs>
      <Pattern
        id="pattern0_7_885"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_7_885" />
      </Pattern>
      <ClipPath id="clip0_7_885">
        <Rect
          width={99.3333}
          height={99.3333}
          fill="white"
          transform="translate(24.8333 24.8333)"
        />
      </ClipPath>
      <ClipPath id="clip1_7_885">
        <Rect
          width={99.3333}
          height={99.3333}
          fill="white"
          transform="translate(24.8333 12.4166)"
        />
      </ClipPath>
      <ClipPath id="clip2_7_885">
        <Rect
          width={99.3333}
          height={99.3333}
          fill="white"
          transform="translate(24.8333 12.4166)"
        />
      </ClipPath>
      <Image
        id="image0_7_885"
        width={1}
        height={1}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAQSURBVHgBAQUA+v8AAAAAAAAFAAFkeJU4AAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);
export default SVGComponent;
