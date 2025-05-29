import axios from 'axios';
import type {
  IStands,
  IStandsResponseData,
} from '../interfaces/stands.interface';


/* Return the stands using axios to get the data 
  using local file but would use a live api in a real product
  Maps the data to a IStands array and assign the number as the id
  Will try to retrieve using async if not will throw an error
*/
export default async function getStands(): Promise<IStands[]> {
  try {
    const res = await axios.get('/data/stands.json');

    const stands: IStands[] = Object.entries(res.data).map(
      ([standId, standData]: [string, unknown]) => {
        const stand = standData as IStandsResponseData;

        return {
          id: standId,
          lat: stand.lat,
          long: stand.long,
          standFacing: stand.stand_facing.toUpperCase(), //Uppercase just in case standFacing in uppercase
          boxLength: stand.box_length,
          boxWidth: stand.box_width,
        };
      },
    );
    return stands;
  } catch (error) {
    console.error('Error fetching stands:', error);
    throw error;
  }
}
