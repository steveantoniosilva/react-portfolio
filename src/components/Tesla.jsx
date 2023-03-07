import '../css-components/Tesla.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from 'react-leaflet';
import teslaSvg from '../assets/teslaIcon.png';
import teslaData from '../../src/TeslaData';
import { Icon } from 'leaflet';

const teslaIcon = new Icon({
  iconUrl: teslaSvg,
  iconSize: [44, 44],
});

function Tesla() {
  const teslaUSA = teslaData.filter(
    chargingStationInfo => chargingStationInfo.address.country === 'USA',
  );

  console.dir(ZoomControl);

  return (
    <MapContainer
      center={[38.1230613, -95.9939304]}
      zoomControl={false}
      zoom={3}>
      <div className='tesla'>
        <h4 className='tesla-title'>Tesla Charging Stations</h4>
      </div>
      <ZoomControl position='topright' />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {teslaUSA.map(location => (
        <Marker
          key={location.id}
          icon={teslaIcon}
          position={[location.gps.latitude, location.gps.longitude]}>
          <Popup
            style={{ width: '4px' }}
            position={[location.gps.latitude, location.gps.longitude]}>
            <div className='popup'>
              <h1 className='tesla-h1'>{location.name}</h1>
              <h2 className='tesla-h2'>
                CHARGING STATIONS:{' '}
                <span className='tesla-stall-count'>{location.stallCount}</span>
              </h2>
              <h3 className='tesla-h3'>
                STATUS:{' '}
                <span className='tesla-stall-status'>{location.status}</span>
              </h3>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Tesla;
