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
  const numbers: number[] = [
    sinistro.data.driverVeiculo.length,
    sinistro.data.driverVitima.length,
  ];
  return (
    <div className="Container">
      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">1- Detalhes Gerais</div>
        <div className="MainItemInfoWrapper">
          <ItemGroup isDate title="OCORRIDO" value={occurred} />
          <ItemGroup isDate title="CRIADO" value={created} />
        </div>

        <div className="SubItemWrapper">
          <div className="SubItemHeader" style={{ justifyContent: "center" }}>
            <b>Localização</b>
          </div>
          <div className="mapView">
            <div className="map"><Map geom={sinistro.geom}/></div>
            <div className="MapSubtitles">
              <ItemGroup isDate title="latitude" value={sinistro.geom.coordinates[1].toString()} />
              <ItemGroup isDate title="longitude" value={sinistro.geom.coordinates[0].toString()} />  
            </div>
          </div>
          <TableContents
            numbers={numbers}
            data={sinistro.data.driverIncidenteDetails}
            keys={KEYS_LOCATION}
          />
        </div>
      </div>

      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">2- Vias</div>
        <div className="MainItemInfoWrapper"></div>

        <ViaTables data={sinistro.data.driverVia} />
      </div>

      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">3- Envolvidos</div>
        <div className="MainItemInfoWrapper"></div>
        <VictimTables data={sinistro.data.driverVitima} />
      </div>

      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">4- Veiculos</div>
        <div className="MainItemInfoWrapper"></div>
        <VehicleTables data={sinistro.data.driverVeiculo} />
      </div>

      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">5- Anexos</div>
        <div className="MainItemInfoWrapper"></div>
      </div>

      <div className="MainItemWrapper">
        <div className="MainItemTitleHeader">6- Agentes e Viaturas</div>
        <div className="MainItemInfoWrapper"></div>
        <AgentsVehiclesTables
          observations={sinistro.data.driverIncidenteDetails["Notas Gerais"]}
          agents={sinistro.data.driverAgentsAndVehicles.agents}
          vehicles={sinistro.data.driverAgentsAndVehicles.missionCars}
        />
      </div>
    </div>
  );
};
