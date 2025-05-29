import getDirection from '../../src/hooks/getDirection';

describe('getDirection', () => {
  it('should return the south if S', () => {
    const direction = getDirection('S');
    expect(direction).toBe('south');
  });
  it('should return the north if N', () => {
    const direction = getDirection('N');
    expect(direction).toBe('north');
  });
  it('should return the east if E', () => {
    const direction = getDirection('E');
    expect(direction).toBe('east');
  });
  it('should return the west if W', () => {
    const direction = getDirection('W');
    expect(direction).toBe('west');
  });
  it('should return the blank if not NESW', () => {
    const direction = getDirection('Z');
    expect(direction).toBe('');
  });
});
