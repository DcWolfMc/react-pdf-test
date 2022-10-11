import React, { FunctionComponent } from "react";
import "./styles.css"
interface Props {
  title: string;
  value: string;
  isDate?:boolean;
}
export const ItemGroup: FunctionComponent<Props> = ({ title, value,isDate = false }) => {
  return (
    <div className="ItemInfo">
      <span className="ItemInfoKey">{title}: </span>
      <span className={isDate?"ItemInfoDateValue":"ItemInfoValue"}>{value} </span>
    </div>
  );
};
