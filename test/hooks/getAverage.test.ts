import {getAverageCoordinates} from '../../src/hooks/getAverageCoordinates';
import {IStands} from '../../src/interfaces/stands.interface';

describe('getAverageCoordinates', () => {
  it('returns the average coordinates for multiple stands', () => {
    const stands: IStands[] = [
      {id: '1', lat: 10, long: 20, standFacing: 'N', boxLength: 1, boxWidth: 1},
      {id: '2', lat: 30, long: 40, standFacing: 'N', boxLength: 1, boxWidth: 1},
      {id: '3', lat: 50, long: 60, standFacing: 'N', boxLength: 1, boxWidth: 1},
    ];

    const result = getAverageCoordinates(stands);
    expect(result.lat).toBe(30);
    expect(result.long).toBe(40);
  });

  it('returns the 0 for lat and long if empty', () => {
    const stands: IStands[] = [];

    const result = getAverageCoordinates(stands);
    expect(result.lat).toBe(0);
    expect(result.long).toBe(0);
  });
});
