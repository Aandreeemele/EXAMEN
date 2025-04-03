export function cargarMenu() {
    const header = document.createElement("header");
    header.innerHTML = `
        <h2 id="totalX">Total X = 0</h2>
        <h2 id="totalCheck">Total / = 0</h2>
    `;
    document.body.prepend(header);
}
