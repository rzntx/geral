function boasVindas() {
    var nome = prompt("Digite seu nome: ");
    if(nome == "") {
        nome = "Aluno"
    }
    var inNome = document.getElementById("inNome");

    inNome.textContent = "Olá " + nome + ", obrigado pela visita!";
}

