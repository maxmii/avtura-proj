import {Direction} from '../enums/direction.enum';

export function getDirection(standFacing: string): string {
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
    default:
      arrowLabel = 'north';
  }

  return arrowLabel;
}
