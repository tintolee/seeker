import React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';

function AlertCircle(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <G fill="none" fillRule="evenodd">
        <G fill="#FF2D55">
          <G>
            <G>
              <Path
                d="M12 15c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-8c.552 0 1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1V8c0-.552.448-1 1-1zm0 13c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-18C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"
                transform="translate(-311 -423) translate(30 413) translate(281 10)"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default AlertCircle;
