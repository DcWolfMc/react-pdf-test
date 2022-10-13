import React from "react";
import { FormData } from "./@types/types";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ItemGroup } from "./components/ItemGroup";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./styles.css";
import { Map } from "./components/Map";
import { TableContents } from "./components/TableContents";

import { KEYS_LOCATION } from "./utils/KeysList";
import { ViaTables } from "./components/ViaTables";
import { VictimTables } from "./components/VictimTables";
import { VehicleTables } from "./components/VehicleTables";
import { AgentsVehiclesTables } from "./components/AgentsVehiclesTable";


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
            <div className="map"></div>
            <div className="MapSubtitles"></div>
          </div>

          {/* <div className="SubItemInfoGroupsWrapper">
            <div className="SubItemInfo">
              <div className="SubItemInfoName">Natureza:</div>
              <div className="SubItemInfoValue"></div>
            </div>
          </div> */}

          <TableContents data={sinistro.data.driverIncidenteDetails} keys={KEYS_LOCATION}/>
        </div>

      </div>

      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">2- Vias</div>
        <div className="MainItemInfoWrapper">Empty</div>
        <div className="SubItemWrapper">
          <ViaTables data={sinistro.data.driverVia}/>
        </div>
      </div>

      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">3- Envolvidos</div>
        <div className="MainItemInfoWrapper">Empty</div>
        <div className="SubItemWrapper">
          <VictimTables data={sinistro.data.driverVitima}/>
        </div>
      </div>

      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">4- Veiculos</div>
        <div className="MainItemInfoWrapper">Empty</div>
        <div className="SubItemWrapper">
          <VehicleTables data={sinistro.data.driverVeiculo}/>
        </div>
      </div>

      {/* <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">5- Anexos</div>
        <div className="MainItemInfoWrapper">Empty</div>
        <div className="SubItemWrapper">
          <VehicleTables data={sinistro.data.driverVeiculo}/>
        </div>
      </div> */}

      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">6- Agentes e Viaturas</div>
        <div className="MainItemInfoWrapper">Empty</div>
        <div className="SubItemWrapper">
          <AgentsVehiclesTables agents={sinistro.data.driverAgentsAndVehicles.agents} vehicles={sinistro.data.driverAgentsAndVehicles.missionCars}/>
        </div>
      </div>
    </div>
  );
};
