let fileNameInput = document.getElementById("fileName");
let fileSizeInput = document.getElementById("fileSize");
let uploadBtn = document.getElementById("uploadBtn");
let archivesDiv = document.getElementById("savedArchives");



function AtualizarInterface() {
    archivesDiv.innerHTML = "";

    let ficheiros = LerArquivo();

    ficheiros.forEach(function(ficheiro) {
        let itemDiv = document.createElement("div");

        itemDiv.style.backgroundColor = "#24252a"; // Uma cor um pouco mais escura para o bloco
        itemDiv.style.border = "2px solid #2dabf9";
        itemDiv.style.padding = "20px";
        itemDiv.style.borderRadius = "15px";
        itemDiv.style.color = "white";
        itemDiv.style.width = "200px"; 
        itemDiv.style.display = "flex";
        itemDiv.style.flexDirection = "column"; 
        itemDiv.style.justifyContent = "space-between"; 
        itemDiv.style.alignItems = "center"; 
        itemDiv.style.gap = "15px"; 

       
        itemDiv.innerHTML = `
            <div style="text-align: center; width: 100%; word-wrap: break-word;">
                <div style="font-size: 50px; margin-bottom: 10px;">📁</div>
                <div><strong>${ficheiro.nome}</strong></div>
                <div style="font-size: 13px; color: #aaa; margin-top: 5px;">${ficheiro.tamanho}</div>
            </div>
            
            <div style="display: flex; gap: 10px; width: 100%;">
            <button onclick="prepararEdicao('${ficheiro.id}')" style="background-color: #f39c12; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; flex: 1;">Editar</button>
                <button onclick="prepararDelecao('${ficheiro.id}')" style="background-color: #e74c3c; color: white; border: none; padding: 8px; border-radius: 5px; cursor: pointer; flex: 1;">Excluir</button>
            </div>
        `;

        archivesDiv.appendChild(itemDiv);
    });
}

function prepararEdicao(id) {
    let novoNome = prompt("Digite o nome novo para o arquivo");

    if (novoNome !== null && novoNome.trim() !== "") {
        AttArquivo(id, novoNome);

        AtualizarInterface();
    }
    
}

function prepararDelecao(id) {
    let confirmacao = confirm("Tem certeza que quer excluir?");

    if (confirmacao == true) {
        deletarArquivo(id);

        AtualizarInterface();
    }
}


uploadBtn.addEventListener("click", function() {
    let nome = fileNameInput.value;
    let tamanho = fileSizeInput.value;

    if (nome == "" || tamanho == "") {
        alert("insira alguma informação");
        return;
    }

    CriarArquivo(nome, tamanho);
    fileNameInput = "";
    fileSizeInput = "";

    AtualizarInterface();

});

