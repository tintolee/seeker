import React from 'react';
import Svg, {Path} from 'react-native-svg';

function LineShare({width, height, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M18 19a1 1 0 110-2 1 1 0 010 2M5 13a1 1 0 110-2 1 1 0 010 2m13-8a1 1 0 110 2 1 1 0 010-2m0 10c-.817 0-1.557.33-2.099.861l-7.935-3.526C7.979 12.224 8 12.114 8 12c0-.114-.021-.224-.034-.335l7.935-3.526A2.991 2.991 0 0018 9c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .114.021.224.034.335L7.099 9.861A2.991 2.991 0 005 9c-1.654 0-3 1.346-3 3s1.346 3 3 3c.817 0 1.557-.33 2.099-.861l7.935 3.526c-.013.111-.034.221-.034.335 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3"></Path>
    </Svg>
  );
}

export default LineShare;
