import {Direction} from '../enums/direction.enum';


//Return direction using enums for class name
export default function getDirection(standFacing: string): string {
  let arrowLabel = '';
  switch (standFacing.toUpperCase()) {
    case Direction.South:
      arrowLabel = 'south';
      break;
    case Direction.East:
      arrowLabel = 'east';
      break;
    case Direction.West:
      arrowLabel = 'west';
      break;
    case Direction.North:
      arrowLabel = 'north';
      break;
  }

  return arrowLabel;
}
