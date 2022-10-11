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
  <div>
    <div className="SubItemHeader">Envolvido {data.indexOf(victim) + 1  } {victim.Nome} -{victim["Tipo de Pessoa"]}</div>
    <div className="SubItemInfo">
        <TableContents data={victim} keys={KEYS_VICTIM}/>
    </div>
  </div>
  )
  
  return (
    <div className="SubItemInfoGroupsWrapper">
        {list}
    </div>
  );
};
