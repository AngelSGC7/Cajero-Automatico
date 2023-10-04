let balance = 10000;

const buttonAdd = document.querySelector(".add");
const buttonRet = document.querySelector(".ret");

buttonAdd.addEventListener("click", deposit);
buttonRet.addEventListener("click", withdraw);

function deposit() {
    const amountInput = document.querySelector(".number1");
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        document.getElementById("balance2").textContent = balance;
        alert(`Usted depositó $${amount}`);
        amountInput.value = "";
    } else {
        alert("Por favor, ingrese una cantidad válida mayor que cero.");
    }
}

function withdraw() {
    const amountInput = document.querySelector(".number2");
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount) && amount > 0 && balance >= amount) {
        balance -= amount;
        document.getElementById("balance2").textContent = balance;
        alert(`Usted retiró $${amount}`);
        amountInput.value = "";
    } else {
        alert("Fondos insuficientes o cantidad no válida.");
    }
}