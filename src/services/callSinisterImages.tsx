import { IncidentImages } from "../@types/types";
import { api, authHeader } from "./api";

export async function callSinisterImages(sinisterId: string){
return await api.get<IncidentImages[]>('/api/records/get_images/', {
    headers: authHeader,
    params: {
      recordID: sinisterId,
    },
  });
} 