import { dataCruz, dataCheck } from "../data/data.js";
export function cargarDatos() {
    dataCruz = JSON.parse(localStorage.getItem("dataCruz")) || [];
    dataCheck = JSON.parse(localStorage.getItem("dataCheck")) || [];
}
