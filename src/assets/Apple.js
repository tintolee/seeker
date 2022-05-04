import React from 'react';
import Svg, {Path, Circle, G} from 'react-native-svg';

function Apple(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40">
      <G fill="none" fill-rule="evenodd">
        <G>
          <G>
            <G>
              <G
                fill="#7D7D7D"
                transform="translate(-295 -668) translate(30 627) translate(265 41)">
                <Circle cx="20" cy="20" r="20" />
              </G>
              <G fill="#FFF" fill-rule="nonzero">
                <Path
                  d="M18.602 17.924c-.341.804-.745 1.543-1.213 2.223-.638.927-1.16 1.569-1.562 1.925-.624.585-1.292.885-2.008.902-.514 0-1.133-.15-1.855-.452-.723-.3-1.388-.45-1.996-.45-.638 0-1.322.15-2.053.45-.733.303-1.323.46-1.774.476-.687.03-1.37-.278-2.054-.926-.435-.387-.98-1.052-1.634-1.993-.7-1.005-1.276-2.17-1.727-3.5C.242 15.145 0 13.755 0 12.41c0-1.542.327-2.871.98-3.985.515-.895 1.2-1.6 2.055-2.12.856-.517 1.782-.781 2.778-.798.545 0 1.26.172 2.148.51.886.339 1.455.51 1.704.51.186 0 .818-.2 1.89-.601 1.012-.372 1.867-.526 2.568-.465 1.897.156 3.323.919 4.271 2.293-1.697 1.049-2.537 2.517-2.52 4.401.015 1.468.538 2.69 1.564 3.659.465.45.984.798 1.562 1.045-.125.37-.258.725-.398 1.066zM14.249.46c0 1.15-.412 2.224-1.233 3.218-.992 1.182-2.19 1.865-3.491 1.757-.017-.138-.026-.283-.026-.435 0-1.105.471-2.287 1.308-3.253.418-.489.95-.896 1.595-1.22.643-.32 1.251-.497 1.824-.527.016.154.023.308.023.46z"
                  transform="translate(-295 -668) translate(30 627) translate(265 41) translate(10 8)"
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default Apple;
