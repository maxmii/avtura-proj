import type {IStands} from '../interfaces/stands.interface';
import type {ICoordinates} from '../interfaces/coordinates.interface';

export function getAverageCoordinates(stands: IStands[]): ICoordinates {
  if (stands.length === 0) {
    return {lat: 0, long: 0};
  }

  return {
    lat: stands.reduce((sum, stand) => sum + stand.lat, 0) / stands.length,
    long: stands.reduce((sum, stand) => sum + stand.long, 0) / stands.length,
  };
}
