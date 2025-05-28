import { Map, Overlay } from "pigeon-maps";
import { Stage, Layer, Rect, Circle, Line } from "react-konva";

export function MyMap() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map
        height={window.innerHeight}
        width={window.innerWidth}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={11}
      >
        <Overlay anchor={[50.879, 4.6997]}>
          <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Rect x={20} y={20} width={100} height={100} fill="red" />
            </Layer>
          </Stage>
        </Overlay>
      </Map>
    </div>
  );
}
