function submitCep(){
    var cep = document.querySelector('#cep').value
    pegarDadosDoCep(cep)
}

async function pegarDadosDoCep(cep){
    try{
        var dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())

        mostrarDados(dados)
    } catch(e) {
        if(e.message == "Failed to fetch"){
            alert("Cep Inválido")
        }
    }
}

function mostrarDados(dados){
    document.querySelector('#estado').value = dados.uf
    document.querySelector('#cidade').value = dados.localidade
    document.querySelector('#bairro').value = dados.bairro
    document.querySelector('#endereco').value = dados.logradouro
}