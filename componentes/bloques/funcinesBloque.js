import { dataCruz, dataCheck, guardar } from "../data.js";
import { cargarMenu } from "../header/header.js";

function agregarCruz(index) {
    dataCruz.push("X");
    eliminarBloque(index);
}

function agregarCheck(index) {
    dataCheck.push("/");
    eliminarBloque(index);
}

function eliminarBloque(index) {
    const bloques = document.querySelectorAll(".bloque");
    if (bloques[index]) {
        bloques[index].remove();
    }
    cargarMenu();
    guardar();
}

export { agregarCruz, agregarCheck, eliminarBloque };
