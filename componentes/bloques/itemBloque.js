import { agregarCruz, agregarCheck } from "./funcinesBloque.js";
export function bloque() {
    const div = document.createElement("div");
    div.classList.add("bloque");
    
    const btnX = document.createElement("button");
    btnX.textContent = "X";
    btnX.onclick = () => agregarCruz(div);
    
    const btnCheck = document.createElement("button");
    btnCheck.textContent = "/";
    btnCheck.onclick = () => agregarCheck(div);
    
    div.appendChild(btnX);
    div.appendChild(btnCheck);
    return div;
}