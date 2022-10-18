import  { FunctionComponent } from "react";
import { TableContents } from '../TableContents';
import { KEYS_VIA } from "../../utils/KeysList"
import { Street } from "../../@types/types";
import { ItemGroup } from "../ItemGroup";
// import "./styles.css"
interface Props {
  data: Street[]
}

export const ViaTables: FunctionComponent<Props> = ({ data })  => {
  const list = data.map((via, index) =>{
    return(
    <div className="SubItemWrapper" key={index}>
    <div className="SubItemHeader"><span><b>endereço {index+1}</b></span> <span> {via.Nome}</span></div>
    
    <div className="SubItemInfo" key={index}>
      <ItemGroup title={"Tipo de Pavimento"} value={via["Tipo do Pavimento"]}  />
      <ItemGroup title={"Condições de Calçada"} value={via["Condição da Calçada"]}  />
      <ItemGroup title={"Obras na pista"} value={via["Obras na Pista"]}  />
      <ItemGroup title={"Alinhamento vertical"} value={via["Alinhamento Vertical"]}  />
      <ItemGroup title={"Tipo de Pista"} value={via["Tipo da Pista"]}  />
      <ItemGroup title={"Alinhamento Horizontal"} value={via["Alinhamento Horizontal"]}  />
      <ItemGroup title={"Obra de Arte"} value={via["Obra de Arte"]}  />
      <ItemGroup title={"Separação Central"} value={via["Separação Central"]}  />
      <ItemGroup title={"Faixa p/ Sentido"} value={via["Faixa para Sentido"]}  />
      <ItemGroup title={"Sinalização Vertical"} value={via["Sinalização Vertical"]}  />
      <ItemGroup title={"Condição da Pista"} value={via["Condição da Pista"]}  />
      <ItemGroup title={"Sinalização Horizontal"} value={via["Sinalização Horizontal"]}  />
      
    </div>
  </div>
  )})
  
  return (
    <>{list}</>);
};
