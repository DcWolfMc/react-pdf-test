import  { FunctionComponent } from "react";
import { TableContents } from '../TableContents';
import { KEYS_VEHICLE } from "../../utils/KeysList"
import { Vehicle } from "../../@types/types";
import { ItemGroup } from "../ItemGroup";
// import "./styles.css"
interface Props {
  data: Vehicle[]
}

export const VehicleTables: FunctionComponent<Props> = ({ data })  => {
  const list = data.map((vehicle, index) =>{
  return (
    <div className="SubItemWrapper" key={index}>
      <div className="SubItemHeader">
        <span>
          <b>Veículo {data.indexOf(vehicle) + 1}</b>
        </span>
        <strong>Placa:</strong>
        <span> {vehicle.Placa? vehicle.Placa: "Não Informada"}</span>
      </div>

      <div className="SubItemInfo">
        <ItemGroup title={"Tipo Veículo"} value={vehicle["Tipo Veículo"]} />
        <ItemGroup title={"Ano Fabricação"} value={vehicle["Ano Fabricação"]?vehicle["Ano Fabricação"]:"Não informado"} />
        <ItemGroup title={"Espécie"} value={vehicle.Espécie} />
        <ItemGroup title={"Aluguel"} value={vehicle.Aluguel}/>
        <ItemGroup title={"Cor"} value={vehicle.Cor?vehicle.Cor:"Não informado"}/>
        <ItemGroup title={"Manobra Realizada"} value={vehicle.Manobra?vehicle.Manobra:"Não informado"}/>
        <ItemGroup title={"Marca"} value={vehicle.Marca?vehicle.Marca:"Não informado"}/>
        <ItemGroup title={"Danificado"} value={vehicle.Danificado}/>
        <ItemGroup title={"Categoria"} value={vehicle.Categoria}/>
        <ItemGroup title={"Legalizado"} value={vehicle.Legalizado}/>
        {vehicle["Formulario de Dano"]&& 
          <>
            <ItemGroup title={"Estrutura"} value={vehicle["Formulario de Dano"].structure?vehicle["Formulario de Dano"].structure:"Não informado"}/>
            <ItemGroup title={"Categoria de Dano"} value={vehicle["Formulario de Dano"].DamageType}/>
          </>
        }

        
      </div>
      <div className="DamageFormTableWrapper">
      {vehicle["Formulario de Dano"]
        ? 
        <>
          <div className="DamageFormHeader">
            <strong>Formulário de avaria</strong>
            {!vehicle["Formulario de Dano"].DamageFormDetails.length&&<span>  Indisponivel</span>}
          </div>
          <div className="DamageFormTableContent">
          {vehicle["Formulario de Dano"].DamageFormDetails.map((item, Itemindex)=>{
            return(<div key={Itemindex} className={`DamageTableGroup`} style={{backgroundColor:"rgba(252, 181, 29, 0.5)",}}>
              <samp className="ItemInfoKey">{item.label}</samp>
              <samp className="ItemInfoValue">{item.answer}</samp>
            </div>)
          })}
          
          </div>
        </>
        :
        <div className="DamageFormHeader">
          <strong>Formulário de avaria</strong>
          <span>Indisponivel</span>
        </div>
      }
        
      </div>
    </div>
  );
});

return <>{list}</>;
};
