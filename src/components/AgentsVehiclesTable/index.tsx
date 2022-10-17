import { FunctionComponent } from "react";
import { TableContents } from "../TableContents";
import { Agent, MissionCar } from "../../@types/types";
import { ItemGroup } from "../ItemGroup";
// import "./styles.css"
interface Props {
  agents: Agent[];
  vehicles: MissionCar[];
}

export const AgentsVehiclesTables: FunctionComponent<Props> = ({
  agents,
  vehicles,
}) => {
  const agentsList = agents.map((agent) => (
    <ItemGroup isDate={false} title={'Matrícula'} value={agent.Matrícula? agent.Matrícula: "Não Informado"}/>
  ));

  const vehiclesList = vehicles.map((vehicle) => (
    <ItemGroup isDate={false} title={'id'} value={vehicle.id? vehicle.id: "Não Informado"}/>
  ));

  return (
    <div className="ListTables">
      <div className="SubItemWrapper">

        <div className="SubItemHeader"><b>Matricula responsáveis pelo atendimento da ocorrência</b></div>
        <div className="SubItemInfoWrapper">
          {agentsList}
        </div>
        
        <div className="SubItemHeader"><b>Viaturas utilizadas no atendimento</b></div>
        <div className="SubItemInfoWrapper">
          {vehiclesList}
        </div>
        
      </div>
    </div>
  );
};
