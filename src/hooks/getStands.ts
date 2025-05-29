import type {
  IStands,
  IStandsResponseData,
} from '../interfaces/stands.interface';

export async function getStands(): Promise<IStands[]> {
  try {
    const response = await fetch('/data/stands.json');
    const data = await response.json();

    const stands: IStands[] = Object.entries(data).map(
      ([standId, standData]: [string, unknown]) => {
        const stand = standData as IStandsResponseData;

        return {
          id: standId,
          lat: stand.lat,
          long: stand.long,
          standFacing: stand.stand_facing.toLocaleUpperCase(),
          boxLength: stand.box_length,
          boxWidth: stand.box_width,
        };
      }
    );
    return stands;
  } catch (error) {
    console.error('Error fetching stands:', error);
    throw error;
  }
}
