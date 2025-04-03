import { dataCruz, dataCheck, cargar } from "../data.js";

function cargarMenu() {
    cargar(); 
    const header = document.getElementById("header");
    header.innerHTML = `<h4>Total X = ${dataCruz.length}</h4> <h4>Total / = ${dataCheck.length}</h4>`;
}

export { cargarMenu };
