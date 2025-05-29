import {render, screen} from '@testing-library/react';
import {Arrow} from '../../src/components/Arrow';
import getDirection from '../../src/hooks/getDirection';

// Mock the getDirection hook
jest.mock('../../src/hooks/getDirection');
const mockedGetDirection = getDirection as jest.MockedFunction<
  typeof getDirection
>;

describe('Arrow', () => {
  beforeEach(() => {
    mockedGetDirection.mockClear();
  });

  it('renders arrow with correct direction class', () => {
    mockedGetDirection.mockReturnValue('north');

    render(<Arrow standFacing="N" />);

    const arrow = screen.getByText('N').closest('.stand-arrow');
    expect(arrow).toHaveClass('stand-arrow', 'facing-north');
    expect(mockedGetDirection).toHaveBeenCalledWith('N');
  });

  it('displays the correct stand facing label', () => {
    mockedGetDirection.mockReturnValue('south');

    render(<Arrow standFacing="S" />);

    expect(screen.getByText('S')).toBeInTheDocument();
    expect(mockedGetDirection).toHaveBeenCalledWith('S');
  });

  it('renders arrow icon and line elements', () => {
    mockedGetDirection.mockReturnValue('east');

    render(<Arrow standFacing="E" />);

    const container = screen.getByText('E').closest('.stand-arrow');
    expect(container?.querySelector('.stand-arrow-icon')).toBeInTheDocument();
    expect(container?.querySelector('.stand-arrow-line')).toBeInTheDocument();
  });

  it('works with different stand facing directions', () => {
    const testCases = [
      {facing: 'N', direction: 'north'},
      {facing: 'S', direction: 'south'},
      {facing: 'E', direction: 'east'},
      {facing: 'W', direction: 'west'},
    ];

    testCases.forEach(({facing, direction}) => {
      mockedGetDirection.mockReturnValue(direction);

      const {unmount} = render(<Arrow standFacing={facing} />);

      expect(screen.getByText(facing)).toBeInTheDocument();
      expect(mockedGetDirection).toHaveBeenCalledWith(facing);

      unmount();
    });
  });
});
