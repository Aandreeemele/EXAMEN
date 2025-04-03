import { agregarCruz, agregarCheck } from "./funcinesBloque.js";

export function crearBloque() {
    const div = document.createElement("div");
    div.classList.add("bloque");
    
    const btnX = document.createElement("button");
    btnX.textContent = "X";
    btnX.onclick = () => agregarCruz(div);
    
    const btnCheck = document.createElement("button");
    btnCheck.textContent = "/";
    btnCheck.className = "btn-check";
    btnCheck.onclick = () => agregarCheck(div);
    
    div.appendChild(btnX);
    div.appendChild(btnCheck);

    return div;
}

export function cargarBloques() {
    const contenedor = document.getElementById("contenedor");
    if (!contenedor) {
        console.error("No se encontró el contenedor para los bloques");
        return;
    }

    for (let i = 0; i < 12; i++) { 
        contenedor.appendChild(crearBloque());
    }
}
