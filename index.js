import { cargarMenu } from "./componentes/header/header.js";
import { cargarBloques } from "./componentes/bloques/bloques.js";

function cargarDOM() {
    cargarMenu();  
    cargarBloques();  
}

document.addEventListener("DOMContentLoaded", cargarDOM);
