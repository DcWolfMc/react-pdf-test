import  { FunctionComponent } from "react";
import { ItemGroup } from "../ItemGroup";

interface Props {
  data: any,
  keys: string[]
}

export const TableContents: FunctionComponent<Props> = ({ data, keys })  => {
    const listItems = keys.map((key) =>
      <ItemGroup isDate={false} title={key} value={data[key]? data[key]: "Não Informado"}/>
  );
  return (
    <div className="SubItemInfoWrapper">
      {listItems}
    </div>
  );
};
