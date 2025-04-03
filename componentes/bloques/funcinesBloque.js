let dataCruz = localStorage.getItem("dataCruz") ? JSON.parse(localStorage.getItem("dataCruz")) : [];
let dataCheck = localStorage.getItem("dataCheck") ? JSON.parse(localStorage.getItem("dataCheck")) : [];

function actualizarLocalStorage() {
    localStorage.setItem("dataCruz", JSON.stringify(dataCruz));
    localStorage.setItem("dataCheck", JSON.stringify(dataCheck));
    actualizarHeader();
}

function actualizarHeader() {
    const totalXElement = document.getElementById("totalX");
    const totalCheckElement = document.getElementById("totalCheck");

    if (totalXElement && totalCheckElement) {
        totalXElement.textContent = `Total X = ${dataCruz.length}`;
        totalCheckElement.textContent = `Total / = ${dataCheck.length}`;
    }
}

export function agregarCruz(div) {
    dataCruz.push("X");
    actualizarLocalStorage();
    div.remove();
}

export function agregarCheck(div) {
    dataCheck.push("/");
    actualizarLocalStorage();
    div.remove();
}

document.addEventListener("DOMContentLoaded", actualizarHeader);
