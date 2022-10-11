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
  <div>
    <div className="SubItemHeader">{via.Nome}</div>
    <div className="SubItemInfo">
        <TableContents data={via} keys={KEYS_VIA}/>
    </div>
  </div>
  )
  
  return (
    <div className="SubItemInfoGroupsWrapper">
        {list}
    </div>
  );
};
