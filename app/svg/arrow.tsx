import * as React from "react"
import Svg, { Defs, Path } from "react-native-svg"
import { motifySvg } from "moti/svg";
import { svgPathProperties } from "svg-path-properties";

const MotiPath = motifySvg(Path)();
const d = `M10.028 60.894c10.527-9.044 50.35-44.118 60.347-52.659M6.598 58.216c10.426-8.831 51.396-39.702 61.65-47.31`;
const properties = new svgPathProperties(d);
const pathLength = properties.getTotalLength();

const ArrowSVG = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} {...props}>
    <Path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      d="M63.346 25.299c5.245-6.32 2.097-4.789 6.505-13.878m-2.417 13.041c-.81-6.349.923-11.797 3.817-14.348m.4 1.351c-4.524-.504-9.597-.574-14.455 2.621m12.015-3.191c-3.882 1.091-7.444-.036-12.797 2.045"
      paintOrder="fill stroke markers"
    />
    <MotiPath
      from={{
        strokeDashoffset: pathLength,
      }}
      animate={{
        strokeDashoffset: 0, // Start from pathLength (invisible) and animate to 0 (visible)
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        delay: 0
      }}
      strokeDasharray={pathLength} // Set to the length of the path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      d={d}
      paintOrder="fill stroke markers"
    />
  </Svg>
)
export default ArrowSVG
