import React from 'react';
import {Marker} from 'react-map-gl/mapbox';
import './Components.css';
import type {IStands} from '../interfaces/stands.interface';
import {Arrow} from './Arrow';

export function StandBox({
  id,
  long,
  lat,
  standFacing,
  boxWidth,
  boxLength,
}: IStands): React.ReactElement {

  // Return a stand box 
  return (
    <Marker key={id} longitude={long} latitude={lat} anchor="center">
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: ['N', 'S'].includes(standFacing) ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {['N', 'W'].includes(standFacing) && (
          <Arrow standFacing={standFacing} />
        )}
        <div
          key={id}
          className={`stand-box`}
          style={{
            width: `${boxWidth}px`,
            height: `${boxLength}px`,
          }}
          title={`Stand ${id} - Facing ${standFacing}`}
        >
          <div className="stand-center-line"></div>
          <div className="stand-id">{id}</div>
        </div>
        {['S', 'E'].includes(standFacing) && (
          <Arrow standFacing={standFacing} />
        )}
      </div>
    </Marker>
  );
}
