function verificarNumero() {
    const numero = document.getElementById("numero").value;
    
    if (numero === "") {
        document.getElementById("resultado").textContent = "Por favor, insira um número.";
        return;
    }

    if (numero % 2 === 0) {
        document.getElementById("resultado").textContent = `${numero} é um número par.`;
        document.getElementById("resultado").style.color = "#28a745"; // Verde para par
    } else {
        document.getElementById("resultado").textContent = `${numero} é um número ímpar.`;
        document.getElementById("resultado").style.color = "#dc3545"; // Vermelho para ímpar
    }
}
