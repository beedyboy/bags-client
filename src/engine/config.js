import axios from "axios";
import Utils from "./localStorage";

 
 const env = {
  local: "http://localhost:8080/",
  production: "https://api.wigtools.ng/",
  front: "https://api.wigtools.ng/",
  test: "https://bags.youarecaptured.com/",
};

export const serverUrl = env.test;
export const clientUrl = env.front;

const backend = axios.create({
  baseURL: serverUrl,
  responseType: "json",
  timeout: 10000,
  headers: {
    common: {
      Authorization: `Bearer ${Utils.get("admin_token")}}`,
    },
    "Content-Type": "application/json",
  },
});

backend.interceptors.request.use(function (config) {
  var token = Utils.get("admin_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default backend;
