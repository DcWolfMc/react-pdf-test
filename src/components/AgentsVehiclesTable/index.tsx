import  { FunctionComponent } from "react";
import { TableContents } from '../TableContents';
import { Agent, MissionCar } from "../../@types/types";
// import "./styles.css"
interface Props {
  agents: Agent[],
  vehicles: MissionCar[]
}

export const AgentsVehiclesTables: FunctionComponent<Props> = ({ agents, vehicles})  => {
    
  const agentsList = agents.map((agent) =>
  <div>
    <div className="SubItemInfo">
        <TableContents data={agent} keys={['Matrícula']}/>
    </div>
  </div>
  )

  const vehiclesList = vehicles.map((vehicle) =>
  <div>
    <div className="SubItemInfo">
        <TableContents data={vehicle} keys={['id']}/>
    </div>
  </div>
  )
  
  
  return (
    <div className="SubItemInfoGroupsWrapper">
        <div className="SubItemHeader">Matricula responsáveis pelo atendimento da ocorrência</div>
        {agentsList}
        <div className="SubItemHeader">Viaturas utilizadas no atendimento</div>
        {vehiclesList}
    </div>
  );
};
