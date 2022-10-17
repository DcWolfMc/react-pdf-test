import  { FunctionComponent } from "react";
import { TableContents } from '../TableContents';
import { KEYS_VIA } from "../../utils/KeysList"
import { Street } from "../../@types/types";
// import "./styles.css"
interface Props {
  data: Street[]
}

export const ViaTables: FunctionComponent<Props> = ({ data })  => {
  const list = data.map((via) =>
  <div className="SubItemWrapper">
    <div className="SubItemHeader">
      <span><b>Endereço:</b></span>
      <span>{via.Nome.toLocaleLowerCase()}</span>
    </div>
      <TableContents data={via} keys={KEYS_VIA}/>
  </div>
  )
  
  return (
    <div className="ListTables">
        {list}
    </div>
  );
};
