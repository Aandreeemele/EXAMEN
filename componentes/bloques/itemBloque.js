function crearBloque(index) {
    const bloque = document.createElement("div");
    bloque.classList.add("bloque");
    bloque.textContent = `Bloque ${index + 1}`;
    return bloque;
}

export { crearBloque };
