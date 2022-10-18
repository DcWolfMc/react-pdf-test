import axios from "axios"
import { useEffect, FunctionComponent } from "react"
interface Props{
    geom: number[];
}
export const MapStatic:FunctionComponent<Props> = ({geom}) =>{
    const parameters = `center=${geom[1],geom[0]}&zoom=15&size=1280x720&markers= &key=YOUR_API_KEY&signature=YOUR_SIGNATURE`
    useEffect(()=>{
        axios.get(`https://maps.googleapis.com/maps/api/staticmap?${parameters}`)
        .then()
    },[])
    return(
        <></>
    )
}