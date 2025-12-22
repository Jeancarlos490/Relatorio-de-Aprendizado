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
        const arrayvalor = listavalor.length - 1;
        attlist.innerText = `${listanome[arraynome]}: ${listavalor[arrayvalor]}`;
        res.appendChild(attlist);
    } else {
        alert("preencha todos os campos")
    }
}

function removerultimo(){
    const res = document.getElementById("resultado")

    if (res.lastElementChild) {
        res.lastElementChild.remove();
        listanome.pop();
        listavalor.pop();
    }else {
        alert("lista vazia")
    }
}