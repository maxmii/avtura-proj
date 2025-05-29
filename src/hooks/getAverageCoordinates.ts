import type {IStands} from '../interfaces/stands.interface';
import type {ICoordinates} from '../interfaces/coordinates.interface';

/* Return the average coordinates for the stands 
   so will show the area for all the stands
*/
export default function getAverageCoordinates(stands: IStands[]): ICoordinates {
  if (stands.length === 0) {
    return {lat: 0, long: 0};
  }


  //Use reduce for summing and then divide by the number of items
  return {
    lat: stands.reduce((sum, stand) => sum + stand.lat, 0) / stands.length,
    long: stands.reduce((sum, stand) => sum + stand.long, 0) / stands.length,
  };
}
