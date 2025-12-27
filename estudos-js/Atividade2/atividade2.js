let listanome = []
let listavalor = []

function AtualizarLista() {

    let desc = document.getElementById("gasto-descricao").value;
    let valor = Number(document.getElementById("gasto-valor").value);
    const res = document.getElementById("resultado");
    const attlist = document.createElement("li");

    if (desc !== "" && valor > 0 && !isNaN(valor)) {
        listanome.push(desc);
        listavalor.push(valor);
        const arraynome = listanome.length - 1;
        let arrayvalor = Number(listavalor.length - 1);
        attlist.innerText = `${listanome[arraynome]}: R$${listavalor[arrayvalor]}`;
        res.appendChild(attlist);
        TotalValor()
    } else {
        alert("preencha todos os campos")
    }
}

function Removerultimo() {
    const res = document.getElementById("resultado")
    const valortot = document.getElementById("Valortotal")

    if (res.lastElementChild) {
        res.lastElementChild.remove();
        listanome.pop();
        listavalor.pop();
        let arrayvalor = Number(listavalor.length - 1);
        valortot.innerText = arrayvalor
        TotalValor()
    } else {
        alert("lista vazia")
    }
}

function TotalValor() {
    let valortot = document.getElementById("Valortotal");
    let arraysoma = 0;
    for (let valores of listavalor)
        arraysoma += valores;
    valortot.innerText = `R$${arraysoma}`
}
