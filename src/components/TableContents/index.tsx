import  { FunctionComponent } from "react";
import { ItemGroup } from "../ItemGroup";


// import "./styles.css"
interface Props {
  data: any,
  keys: string[]
}

export const TableContents: FunctionComponent<Props> = ({ data, keys })  => {
    const listItems = keys.map((key) =>
    // <li key={keys.indexOf(key)}>
    //   {key}: {data[key]? data[key]: "Não informado"}
    // </li>
    // <li key={keys.indexOf(key)}>
      <ItemGroup isDate title={key.toLocaleUpperCase()} value={data[key]? data[key].toLocaleUpperCase(): "NÃO INFORMADO"}/>
    // </li>
  );
  return (
    <div className="SubItemInfoGroupsWrapper">
      <div className="SubItemInfo">
        {listItems}
      </div>
    </div>
  );
};
