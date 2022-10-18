import { api, authHeader } from "./api";

export async function callSinisterById(sinisterId: string){ 
return await api.get(`/api/records/${sinisterId}/`, {
    headers: authHeader,
    params: {
      record_type: "efc5a31a-73da-4c98-bfc6-ce67a846d842",
      details_only:'False',
    },
  })
};