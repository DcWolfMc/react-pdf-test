import axios from "axios";

export const api = axios.create({
  baseURL: "https://51c8-189-36-205-137.sa.ngrok.io/",
});

export const authHeader = {
  Authorization: `Token b96658bc5a50613e5e10ada95f35df8db1e7652f`,
};
