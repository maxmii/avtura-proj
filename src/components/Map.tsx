import React, {useState, useEffect} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from 'react-map-gl/mapbox';
import getStands from '../hooks/getStands';
import getAverageCoordinates from '../hooks/getAverageCoordinates';
import type {IStands} from '../interfaces/stands.interface';
import {StandBox} from './StandBox';
import './Components.css';

export function MyMap(): React.ReactElement {

  /* Set stands using the getStands hook
   Using useEffect asynchronously to set it
   If stands are empty will show Loading 
   If not it will show the mapbox and then map the stands
   to create a marker for each stand
  */
  const [stands, setStands] = useState<IStands[]>([]);
  const mapBoxApi = import.meta.env.VITE_MAPBOX_API;
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getStands();
        setStands(data);
      } catch (error: unknown) {
        console.error('Failed to fetch data', error);
      }
    };

    getData();
  }, []);

  const {lat, long} = getAverageCoordinates(stands);

  if (!stands.length) {
    return <div>Loading...</div>;
  }

  return (
    <Map
      mapboxAccessToken={mapBoxApi}
      initialViewState={{
        longitude: long,
        latitude: lat,
        zoom: 8,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {stands.map((stand: IStands) => {
        return <StandBox {...stand} />;
      })}
    </Map>
  );
}
