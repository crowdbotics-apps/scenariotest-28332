import axios from "axios"
const astronauts = axios.create({
  baseURL: "http://api.open-notify.org/astros.json",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function astronauts_get__read(payload) {
  return astronauts.get(`/`)
}
export const apiService = { astronauts_get__read }
