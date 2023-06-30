async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML= "";
    try{
        var response = await fetch(`https:viacep.com.br/ws/${cep}/json/`);
        console.log(response);
        var data = await response.json();
        console.log(data);
        if(data.erro){
            throw Error(`Não foi possivel consultar o cep: ${cep}`)
        }

        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        logradouro.value = data.logradouro;
        bairro.value = data.bairro;
        cidade.value = data.localidade;
        estado.value = data.uf;
        return data;
    }   catch(erro){
        mensagemErro.innerHTML = 'Cep inváildo. Tente novamente!'
    }
}


var cep = document.getElementById('cep');
cep.addEventListener("focusout", ()=> buscaEndereco(cep.value))



