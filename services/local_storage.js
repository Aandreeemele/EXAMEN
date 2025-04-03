function guardar(){
    localStorage.setItem("dataCruz", JSON,stringify(dataCruz));
    localStorage.setItem("dataCheck", JSON, stringify(dataCheck))
}

function cargar (){
    const cruz = localStorage.getItem("dataCruz");
    const check = localStorage.getItem("dataCheck");

    if (cruz) dataCruz = JSON.parse(cruz);
    if ( check) dataCheck = JSON.parse(check)
}
