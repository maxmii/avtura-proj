import './Components.css';
import {getDirection} from '../hooks/getDirection';

interface ArrowProps {
  standFacing: string;
}

export function Arrow({ standFacing }: ArrowProps) {
  return (
    <div className={`stand-arrow facing-${getDirection(standFacing)}`}>
      <span className="stand-arrow-label">{standFacing}</span>
      <span className="stand-arrow-icon"></span>
      <span className="stand-arrow-line"></span>
    </div>
  );
}
