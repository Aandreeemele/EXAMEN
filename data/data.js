export let dataCruz = [];
export let dataCheck = [];
import { cargarMenu } from "../componentes/header/header.js";
export function cargarmenu(){
    localStorage.setItem("dataCruz", JSON.stringify(dataCruz));
    localStorage.setItem("dataCheck", JSON.stringify(dataCheck));
    cargarMenu();
}