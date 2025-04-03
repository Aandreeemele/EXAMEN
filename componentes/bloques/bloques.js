import { crearBloque } from "./itemBloque.js";

function cargarBloque() {
    const container = document.getElementById("bloques-container");
    container.innerHTML = "";

    for (let i = 0; i < 12; i++) {
        container.appendChild(crearBloque(i));
    }
}

export { cargarBloque };
