import React from "react";
import { FormData } from "./@types/types";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ItemGroup } from "./components/ItemGroup";
import { Map } from "./components/Map";
import { TableContents } from "./components/TableContents";

import { KEYS_LOCATION } from "./utils/KeysList";
import { ViaTables } from "./components/ViaTables";
import { VictimTables } from "./components/VictimTables";
import { VehicleTables } from "./components/VehicleTables";
import { AgentsVehiclesTables } from "./components/AgentsVehiclesTable";

import { Document, Page, Text, View } from "@react-pdf/renderer";

import { styles } from './styles-pdf'

interface Props {
  sinistro: FormData;
}
export const VerPdf: React.FC<Props> = ({ sinistro }) => {
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
    <Document>
      <View style={ styles.Container }>
        <Page size='A4' >
          <View style={ styles.MainItemWrapper }>
          <View style={ styles.MainItemTitleHeader }>
            <Text>1- Detalhes Gerais</Text>
            </View>
            <View style={ styles.MainItemInfoWrapper}>
              <ItemGroup isDate title="OCORRIDO" value={occurred} />
              <ItemGroup isDate title="CRIADO" value={created} />
            </View>

            <View style={styles.SubItemWrapper}>
              <View
                style={styles.SubItemHeader}
              >
                <Text><b>Localização</b></Text>
              </View>
              <View style={styles.mapView}>
                <View style={styles.map}>
                  <Map geom={sinistro.geom} />
                </View>
                <View style={styles.MapSubtitles}>
                  <ItemGroup
                    isDate
                    title="latitude"
                    value={sinistro.geom.coordinates[1].toString()}
                  />
                  <ItemGroup
                    isDate
                    title="longitude"
                    value={sinistro.geom.coordinates[0].toString()}
                  />
                </View>
              </View>
              <TableContents
                numbers={numbers}
                data={sinistro.data.driverIncidenteDetails}
                keys={KEYS_LOCATION}
              />
            </View>
          </View>
        </Page>
        <Page size='A4' >
          <View style={styles.MainItemWrapper}>
            <View style={styles.MainItemTitleHeader}>2- Vias</View>
            <View style={styles.MainItemInfoWrapper}></View>

            <ViaTables data={sinistro.data.driverVia} />
          </View>
        </Page>
        
        <Page size='A4' >
          <View style={styles.MainItemWrapper}>
            <View style={styles.MainItemTitleHeader}>3- Envolvidos</View>
            <View style={styles.MainItemInfoWrapper}></View>
            <VictimTables data={sinistro.data.driverVitima} />
          </View>
        </Page>

        <Page size='A4' >
          <View style={styles.MainItemWrapper}>
            <View style={styles.MainItemTitleHeader}>4- Veiculos</View>
            <View style={styles.MainItemInfoWrapper}></View>
            <VehicleTables data={sinistro.data.driverVeiculo} />
          </View>
        </Page>

        <Page size='A4' >
          <View style={styles.MainItemWrapper}>
            <View style={styles.MainItemTitleHeader}>5- Anexos</View>
            <View style={styles.MainItemInfoWrapper}></View>
          </View>
        </Page>

        <Page size='A4' >
          <View style={styles.MainItemWrapper}>
            <View style={styles.MainItemTitleHeader}>6- Agentes e Viaturas</View>
            <View style={styles.MainItemInfoWrapper}></View>
            <AgentsVehiclesTables
              observations={sinistro.data.driverIncidenteDetails["Notas Gerais"]}
              agents={sinistro.data.driverAgentsAndVehicles.agents}
              vehicles={sinistro.data.driverAgentsAndVehicles.missionCars}
            />
          </View>
        </Page>
      </View>
    </Document>
  );
};
