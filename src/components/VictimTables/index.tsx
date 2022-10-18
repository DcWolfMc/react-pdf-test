import { FunctionComponent } from "react";
import { Victim } from "../../@types/types";
import { ItemGroup } from "../ItemGroup";
// import "./styles.css"
interface Props {
  data: Victim[];
}

export const VictimTables: FunctionComponent<Props> = ({ data }) => {
  const list = data.map((vitima, index) => {
    return (
      <div className="SubItemWrapper" key={index}>
        <div className="SubItemHeader">
          <span>
            <b>envolvido {data.indexOf(vitima) + 1}</b>
          </span>
          <span> {vitima.Nome}</span>
          <strong>{`${vitima["Tipo de Pessoa"]}`}</strong>
        </div>

        <div className="SubItemInfo">
          <ItemGroup title={"DT.Nasc."} value={vitima["Data de Nascimento"]} />
          <ItemGroup title={"código do veículo"} value={vitima["Código Veículo"]} />
          <ItemGroup title={"Sexo"} value={vitima.Sexo} />
          <ItemGroup title={"Gravidade da lesão"} value={vitima["Gravidade da Lesão"]}/>
          <ItemGroup title={"Nº Registro CNH"} value={vitima["Número da CNH"]?vitima["Número da CNH"]:"Não Informado"}/>
          <ItemGroup title={"Posição do Passageiro"} value={vitima["Posição do passageiro"]}/>
          <ItemGroup title={"CATEGORIA CNH"} value={vitima["Categoria do Condutor"]}/>
          <ItemGroup title={"Situação do condutor"} value={vitima["Situação do Condutor"]}/>
          <ItemGroup title={"nº documento"} value={vitima["Número Documento"]?vitima["Número Documento"]: "Não Informado"}/>
          <ItemGroup title={"Exame Alcoolemia"} value={vitima["Exame de alcoolemia"]}/>
          <ItemGroup title={"tipo de documento"} value={vitima["Tipo Documento"]}/>
          <ItemGroup title={"Usava Cinto/Capacete"} value={vitima["Usava Cinto ou Capacete"]}/>
        </div>
        <div className="ObsBox">
          <strong>OBSERVAÇÃO:</strong>
          <p>{vitima.Observações}</p>
        </div>
      </div>
    );
  });

  return <>{list}</>;
};
