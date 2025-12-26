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
        attlist.innerText = `${listanome[arraynome]}: ${listavalor[arrayvalor]}`;
        res.appendChild(attlist);
        TotalValor()
    } else {
        alert("preencha todos os campos")
    }

    function TotalValor() {
        let primeirovalor = listavalor.at(-2)
        let ultimovalor = listavalor.at(-1)
        let valortotal = primeirovalor += ultimovalor
        const resultado = document.getElementById("Valortotal")

        if(listavalor.length <= 1){
            resultado.innerHTML = ultimovalor
        }
    }
}

function Removerultimo() {
    const res = document.getElementById("resultado")
    const valortot = document.getElementById("Valortotal")

    if (res.lastElementChild) {
        res.lastElementChild.remove();
        listanome.pop();
        listavalor.pop();
        let valoresgerais = listavalor.at(-0) - listavalor.at(-1)
        valortot.innerText = valoresgerais;
    } else {
        alert("lista vazia")
    }
}
