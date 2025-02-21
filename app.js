let lista_Nomes = [];
let n_sorteio = 0

function random_number(){
        return parseInt(Math.random() * lista_Nomes.length)
}

function aviso_content(texto){
    let aviso = document.getElementById("avisos")
    aviso.innerHTML = texto
}

function addButton_element(content){
    let lista = document.getElementById("listaAmigos");
    let ol = document.createElement('ol');
    ol.innerHTML = content;
    lista.appendChild(ol);
}

function sortearAmigo(){
    let lista = document.getElementById("resultado");
    let num = random_number()
    let sorteiado = lista_Nomes[num]
    let ol = document.createElement('ol')

    if(n_sorteio==0){
        if(lista_Nomes.length > 1){
        ol.innerHTML = `O nome sorteiado foi: ${sorteiado}`
        lista.appendChild(ol);
        document.getElementById("listaAmigos").innerHTML = "";
        lista_Nomes = [];
        n_sorteio += 1
        }else{
            aviso_content("Deve existir no minimo dois nomes");
        }
    
    }else{
        aviso_content("Insira novos nomes para ocorrer o sorteio");
    }
}

function get_nome(){
    document.getElementById("resultado").innerHTML = "";
    let nome = document.getElementById("amigo").value;

    if (!nome.trim()){
        aviso_content("O valor é nulo");
    }else if(lista_Nomes.includes(nome)){
        aviso_content("Já existe uma pessoa com esse nome!");
    }else{
        aviso_content("Adicionado com sucesso");
        lista_Nomes.push(nome);
        addButton_element(nome);
        document.getElementById("amigo").value = null;
        n_sorteio=0;
    }
};
