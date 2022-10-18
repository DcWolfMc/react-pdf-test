import { FunctionComponent } from "react";
import { Agent, MissionCar } from "../../@types/types";
import { ItemGroup } from "../ItemGroup";
// import "./styles.css"
interface Props {
  observations: string;
  agents: Agent[];
  vehicles: MissionCar[];
}

export const AgentsVehiclesTables: FunctionComponent<Props> = ({
  agents,
  vehicles,
  observations,
}) => {
  return (
    <div className="SubItemWrapper">
      <div className="SubItemWrapper-Agents">
        <div className="SubItemWrapper-AgentsSubItem">
          <div className="SubItemHeader">
            MATRÍCULA DOs RESPONSÁVEIS
            <br />
            PELO ATENDIMENTO DA OCORRÊNCIA
          </div>
          <div className="SubItemInfo-Agents">
            {agents.map((agent, index) => (
              <ItemGroup
                key={`${index}_${agent.Matrícula}`}
                title={`matrícula do ${index + 1}º agente`}
                value={agent.Matrícula}
              />
            ))}
          </div>
        </div>
        <div className="SubItemWrapper-AgentsSubItem">
          <div className="SubItemHeader">
            Viaturas utilizadas
            <br /> no atendimento
          </div>
          <div className="SubItemInfo-Agents">
            {vehicles.map((vehicle, index) => (
              <ItemGroup
                key={`${index}_${vehicle.id}`}
                title={`id da ${index + 1}ª viatura`}
                value={vehicle.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="ObsBox">
        <strong>OBSERVAÇÃO:</strong>
        <p>{observations ? observations : "Nada a relatar."}</p>
      </div>
    </div>
  );
};
