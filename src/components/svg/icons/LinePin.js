import React from 'react';
import Svg, {Path} from 'react-native-svg';

function LinePin({width, height, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M12 11a1.501 1.501 0 111.5-1.5c0 .826-.673 1.5-1.5 1.5m0-5c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6m0 13.646c-1.675-1.584-6-6.031-6-9.724C6 6.657 8.691 4 12 4s6 2.657 6 5.922c0 3.693-4.325 8.14-6 9.724M12 2C7.589 2 4 5.553 4 9.922c0 5.475 7.049 11.579 7.349 11.836a.998.998 0 001.302 0c.3-.257 7.349-6.361 7.349-11.836C20 5.553 16.411 2 12 2"></Path>
    </Svg>
  );
}

export default LinePin;
