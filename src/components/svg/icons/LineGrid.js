import React from 'react';
import Svg, {Path} from 'react-native-svg';

function LineGrid({width, height, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M15 19v-4h4l.001 4H15zm4-6h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2zM5 19v-4h4l.001 4H5zm4-6H5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2zm6-4V5h4l.001 4H15zm4-6h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 9V5h4l.001 4H5zm4-6H5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></Path>
    </Svg>
  );
}

export default LineGrid;
