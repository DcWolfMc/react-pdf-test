import React from "react";
import { FormData } from "./@types/types";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ItemGroup } from "./components/ItemGroup";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./styles.css";
import { Map } from "./components/Map";
interface Props {
  sinistro: FormData;
}
export const VerWeb: React.FC<Props> = ({ sinistro }) => {
  
  const createdTime = format(parseISO(sinistro.created), `dd/mm/yyyy`, {
    locale: ptBR,
  });
  const createdHour = format(parseISO(sinistro.created), `HH:MM`, {
    locale: ptBR,
  });
  const createdWeekDay = format(parseISO(sinistro.created), `EEEE`, {
    locale: ptBR,
  });
  const created = `${createdTime}, - ${createdWeekDay
    .substring(0, 1)
    .toLocaleUpperCase()}${createdWeekDay.substring(1)} às ${createdHour}`;

  const occurredTime = format(parseISO(sinistro.occurred_from), "dd/mm/yyyy", {
    locale: ptBR,
  });
  const occurredHour = format(parseISO(sinistro.occurred_from), `HH:MM`, {
    locale: ptBR,
  });
  const occurredWeekDay = format(parseISO(sinistro.occurred_from), `EEEE`, {
    locale: ptBR,
  });
  const occurred = `${occurredTime}, - ${occurredWeekDay
    .substring(0, 1)
    .toLocaleUpperCase()}${occurredWeekDay.substring(1)} às ${occurredHour}`;

  return (
    <div className="Container">
      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">1- Detalhes Gerais</div>
        <div className="MainItemInfoWrapper">
          <ItemGroup isDate title="OCORRIDO" value={occurred} />
          <ItemGroup isDate title="CRIADO" value={created} />
        </div>

        <div className="SubItemWrapper">
          <div className="SubItemHeader">Localização</div>
          <div className="mapView">
            <div className="map">
              
            </div>
            <div className="MapSubtitles"></div>
          </div>
          <div className="SubItemInfoGroupsWrapper">
            <div className="SubItemInfo">
              <div className="SubItemInfoName">Natureza:</div>
              <div className="SubItemInfoValue"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
