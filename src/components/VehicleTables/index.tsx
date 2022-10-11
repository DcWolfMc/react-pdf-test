import  { FunctionComponent } from "react";
import { TableContents } from '../TableContents';
import { KEYS_VEHICLE } from "../../utils/KeysList"
import { Vehicle } from "../../@types/types";
// import "./styles.css"
interface Props {
  data: Vehicle[]
}

export const VehicleTables: FunctionComponent<Props> = ({ data })  => {
  const list = data.map((vehicle) =>
  <div>
    <div className="SubItemHeader">Veiculo { data.indexOf(vehicle) + 1 } Placa: {vehicle.Placa}</div>
    <div className="SubItemInfo">
        <TableContents data={vehicle} keys={KEYS_VEHICLE}/>
    </div>
  </div>
  )
  
  return (
    <div className="SubItemInfoGroupsWrapper">
        {list}
    </div>
  );
};
