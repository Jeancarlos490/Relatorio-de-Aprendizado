let listanome = []
let listavalor = []

function AtualizarLista() {

    let desc = document.getElementById("gasto-descricao").value;
    let valor = Number(document.getElementById("gasto-valor").value);
    const res = document.getElementById("resultado");
    const attlist = document.createElement("li");


    if (desc !== "" && !isNaN(valor)) {
        listanome.push(desc);
        listavalor.push(valor);
        const arraynome = listanome.length - 1;
        const arrayvalor = listanome.length - 1;
        attlist.innerHTML = `${listanome[arraynome]}: ${listavalor[arrayvalor]}`;
        res.appendChild(attlist);
    }

}