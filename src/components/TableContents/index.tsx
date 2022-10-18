import  { FunctionComponent } from "react";
import { ItemGroup } from "../ItemGroup";
import {FormData} from "../../@types/types"
import { Location } from "../../utils/KeysList";

// import "./styles.css"
interface Props {
  data: any,
  keys: string[]
  numbers: number[] // [quantVeiculos, quantVitimas]
}


export const TableContents: FunctionComponent<Props> = ({ data, keys,numbers })  => {
    const listItems = keys.map((key, index) =>{
      return(
      <div key={`${index}_${key}`}>    
        {key.includes("Quantidade de Veiculos")&&(<ItemGroup title={key.toLocaleUpperCase()} value={numbers[0].toString() }></ItemGroup>)}
        {key.includes("Quantidade de Envolvidos")&&(<ItemGroup title={key.toLocaleUpperCase()} value={numbers[1].toString() }></ItemGroup>)}
        {!(key.includes("Quantidade de Envolvidos") || key.includes("Quantidade de Veiculos")) &&( <ItemGroup isDate title={key.toLocaleUpperCase()} value={data[key]&&data[key]}/>)}
    </div>
)})
  return (
      <div className="SubItemInfo">
        {listItems}
      </div>  
  );
};
