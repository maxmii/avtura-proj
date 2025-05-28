import { Overlay as MapOverlay } from "pigeon-maps";
import { Stage, Layer, Rect } from "react-konva";
import type { IStands } from "../interfaces/stands.interface";

export function Overlay({
  lat,
  long,
  standFacing,
  boxLength,
  boxWidth,
}: IStands) {
  <>
    <MapOverlay anchor={[lat, long]}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={boxWidth}
            y={boxLength}
            width={boxWidth}
            height={boxLength}
            fill="red"
          />
        </Layer>
      </Stage>
    </MapOverlay>
    ;
  </>;
}
