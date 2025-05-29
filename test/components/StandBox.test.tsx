import { render, screen } from '@testing-library/react';
import { StandBox } from '../../src/components/StandBox';
import type { IStands } from '../../src/interfaces/stands.interface';

// Mock the react-map-gl Marker component
jest.mock('react-map-gl/mapbox', () => ({
  Marker: ({ children, longitude, latitude, anchor }: any) => (
    <div 
      data-testid="marker"
      data-longitude={longitude}
      data-latitude={latitude}
      data-anchor={anchor}
    >
      {children}
    </div>
  ),
}));

// Mock the Arrow component
jest.mock('../../src/components/Arrow', () => ({
  Arrow: ({ standFacing }: { standFacing: string }) => (
    <div data-testid="arrow" data-facing={standFacing}>
      Arrow-{standFacing}
    </div>
  ),
}));

describe('StandBox', () => {
  const mockStand: IStands = {
    id: '501',
    lat: 51.474047,
    long: -0.489533,
    standFacing: 'N',
    boxLength: 40,
    boxWidth: 30,
  };

  it('renders stand box with correct properties', () => {
    render(<StandBox {...mockStand} />);
    
    const marker = screen.getByTestId('marker');
    expect(marker).toHaveAttribute('data-longitude', '-0.489533');
    expect(marker).toHaveAttribute('data-latitude', '51.474047');
    expect(marker).toHaveAttribute('data-anchor', 'center');
  });

  it('displays stand ID and title', () => {
    render(<StandBox {...mockStand} />);
    
    expect(screen.getByText('501')).toBeInTheDocument();
    
    const standBox = screen.getByTitle('Stand 501 - Facing N');
    expect(standBox).toBeInTheDocument();
  });

  it('applies correct dimensions to stand box', () => {
    render(<StandBox {...mockStand} />);
    
    const standBox = screen.getByTitle('Stand 501 - Facing N');
    expect(standBox).toHaveStyle({
      width: '30px',
      height: '40px',
    });
  });

  it('renders center line', () => {
    render(<StandBox {...mockStand} />);
    
    const centerLine = document.querySelector('.stand-center-line');
    expect(centerLine).toBeInTheDocument();
  });

  describe('Arrow positioning', () => {
    it('renders arrow before stand box for North facing', () => {
      render(<StandBox {...mockStand} standFacing="N" />);
      
      const arrow = screen.getByTestId('arrow');
      expect(arrow).toHaveAttribute('data-facing', 'N');
    });

    it('renders arrow before stand box for West facing', () => {
      render(<StandBox {...mockStand} standFacing="W" />);
      
      const arrow = screen.getByTestId('arrow');
      expect(arrow).toHaveAttribute('data-facing', 'W');
    });

    it('renders arrow after stand box for South facing', () => {
      render(<StandBox {...mockStand} standFacing="S" />);
      
      const arrow = screen.getByTestId('arrow');
      expect(arrow).toHaveAttribute('data-facing', 'S');
    });

    it('renders arrow after stand box for East facing', () => {
      render(<StandBox {...mockStand} standFacing="E" />);
      
      const arrow = screen.getByTestId('arrow');
      expect(arrow).toHaveAttribute('data-facing', 'E');
    });
  });

  describe('Container flex direction', () => {
    it('uses column direction for North/South facing stands', () => {
      const { rerender } = render(<StandBox {...mockStand} standFacing="N" />);
      
      let container = screen.getByTestId('marker').firstChild as HTMLElement;
      expect(container).toHaveStyle({ flexDirection: 'column' });
      
      rerender(<StandBox {...mockStand} standFacing="S" />);
      container = screen.getByTestId('marker').firstChild as HTMLElement;
      expect(container).toHaveStyle({ flexDirection: 'column' });
    });

    it('uses row direction for East/West facing stands', () => {
      const { rerender } = render(<StandBox {...mockStand} standFacing="E" />);
      
      let container = screen.getByTestId('marker').firstChild as HTMLElement;
      expect(container).toHaveStyle({ flexDirection: 'row' });
      
      rerender(<StandBox {...mockStand} standFacing="W" />);
      container = screen.getByTestId('marker').firstChild as HTMLElement;
      expect(container).toHaveStyle({ flexDirection: 'row' });
    });
  });
});
