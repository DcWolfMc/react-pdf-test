import { api, authHeader } from "./api";

export async function callSinisterById(){ 
return await api.get(`/api/records/4b2f3969-ec33-4787-8b22-1112da491c0b/`, {
    headers: authHeader,
    params: {
      record_type: "efc5a31a-73da-4c98-bfc6-ce67a846d842",
      details_only:'False',
    },
  })
};