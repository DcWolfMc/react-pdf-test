import  { FunctionComponent } from "react";
import { TableContents } from '../TableContents';
import { KEYS_VEHICLE } from "../../utils/KeysList"
import { Vehicle } from "../../@types/types";
// import "./styles.css"
interface Props {
  data: Vehicle[]
}

export const VehicleTables: FunctionComponent<Props> = ({ data })  => {
  const list = data.map((vehicle:Vehicle) =>
  <div className="SubItemWrapper">
    <div className="SubItemHeader">
      <span><b>Veiculo { data.indexOf(vehicle) + 1 } </b></span>
      <span><b>Placa: </b> {vehicle.Placa}</span>
    </div>
    <TableContents data={vehicle} keys={KEYS_VEHICLE}/>
  </div>
    
  )
  
  return (
    <div className="ListTables">
      {list}
    </div>
  );
};
