import  { FunctionComponent } from "react";
import { TableContents } from '../TableContents';
import { KEYS_VICTIM } from "../../utils/KeysList"
import { Victim } from "../../@types/types";
// import "./styles.css"
interface Props {
  data: Victim[]
}

export const VictimTables: FunctionComponent<Props> = ({ data })  => {
  const list = data.map((victim) =>
  <div className="SubItemWrapper">
    <div className="SubItemHeader">
      <span><b>Envolvido { data.indexOf(victim) + 1 }</b></span>
      <span>{ victim.Nome } </span>
      <span><b>-{ victim["Tipo de Pessoa"] }</b></span>
      
    </div>
    <div className="SubItemInfo">
        <TableContents data={victim} keys={KEYS_VICTIM}/>
    </div>
  </div>
  )
  
  return (
    <div className="ListTables">
        {list}
    </div>
  );
};
