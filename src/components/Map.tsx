import {useState, useEffect} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import {getStands} from '../hooks/getStands';
import type {IStands} from '../interfaces/stands.interface';
import {getAverageCoordinates} from '../hooks/getAverage';
import Map from 'react-map-gl/mapbox';
import './Components.css';
import {StandBox} from './StandBox';

export function MyMap() {
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
