let myArchives = [] || JSON.parse(localStorage.getItem("miniDriveArquivos"));
var idNovo = 1;
function SaveLocalStorage() {
    localStorage.setItem("miniDriveArquivos", JSON.stringify(myArchives));
}

function CriarArquivo(nome, tamanho) {
    const novoArquivo = {
        id: Date.now(),
        nome: nome,
        tamanho: tamanho
    }
    myArchives.push(novoArquivo);
    SaveLocalStorage();
    console.log(novoArquivo);
}

function LerArquivo() {
    return myArchives;
}

function AttArquivo(id, novoNome) {
    let index = myArchives.findIndex(function(ficheiro) {
        return ficheiro.id === id;
    });
    if (index !== -1) {
        myArchives[index].nome = novoNome;

        SaveLocalStorage();
    }
}

function deletarArquivo(id) {
    myArchives = myArchives.filter(function(ficheiro) {
        return ficheiro.id !== id;
    });

    SaveLocalStorage();
}