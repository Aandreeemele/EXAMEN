import { cargarBloque } from "./componentes/bloques/bloques.js";
import { cargarMenu } from "./componentes/header/header.js";

console.log("Cargando DOM...");
document.addEventListener("DOMContentLoaded", () => {
    cargarMenu();
    cargarBloque();
});
