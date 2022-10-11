import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React, { FunctionComponent } from "react";
import { Geom } from "../../@types/types";
interface Props {
  geom: Geom;
}
export const Map: FunctionComponent<Props> = ({ geom }) => {
  return (
    <MapContainer
      center={[geom.coordinates[1], geom.coordinates[0]]}
      dragging={false}
      scrollWheelZoom={false}
      zoom={16}
    >
      <TileLayer
        attribution='&amp;cpy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[geom.coordinates[1], geom.coordinates[0]]}/>
    </MapContainer>
  );
};
