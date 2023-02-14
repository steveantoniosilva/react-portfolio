import '../css-components/Tesla.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from 'react-leaflet';
import teslaSvg from '../assets/teslaIcon.svg.png';
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
        <h4>Tesla Charging Stations</h4>
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
          <Popup position={[location.gps.latitude, location.gps.longitude]}>
            <div
              style={{
                letterSpacing: '2px',
                color: '#665',
              }}>
              <h2>{location.name}</h2>
              <p
                style={{
                  letterSpacing: '5px',
                }}>
                CHARGING STATIONS: {location.stallCount}
              </p>
              <p
                style={{
                  letterSpacing: '5px',
                }}>
                STATUS: {location.status}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Tesla;
