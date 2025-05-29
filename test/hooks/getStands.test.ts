import getStands from '../../src/hooks/getStands';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getStands', () => {
  const testData = {
    '501': {
      lat: 51.474047,
      long: -0.489533,
      stand_facing: 'N',
      box_length: 40,
      box_width: 40,
    },
  };
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: testData,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('fetches stands data', async () => {
    const result = await getStands();
    expect(result).toEqual([
      {
        id: '501',
        lat: 51.474047,
        long: -0.489533,
        standFacing: 'N',
        boxLength: 40,
        boxWidth: 40,
      },
    ]);
    expect(mockedAxios.get).toHaveBeenCalledWith('/data/stands.json');
  });
});
