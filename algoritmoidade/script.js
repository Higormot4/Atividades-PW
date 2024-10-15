function calcularIdade() {
    const year = document.getElementById("year").value;
    const currentYear = new Date().getFullYear();

    if (year && year > 1900 && year <= currentYear) {
        const age = currentYear - year;
        document.getElementById("result").textContent = `Você tem ${age} anos.`;
    } else {
        document.getElementById("result").textContent = "Por favor, insira um ano válido.";
    }
}
