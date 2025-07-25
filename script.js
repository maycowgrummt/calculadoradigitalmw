let display = document.getElementById("display");

function adicionar(valor) {
  display.value += valor;
}

function limpar() {
  display.value = "";
}

function apagar() {
  display.value = display.value.slice(0, -1);
}

function calcular() {
  try {
    display.value = eval(display.value.replace("%", "/100"));
  } catch {
    display.value = "Erro";
  }
}

// Habilita o teclado físico
document.addEventListener("keydown", function(e) {
  const tecla = e.key;

  if (!isNaN(tecla) || "+-*/.%".includes(tecla)) {
    adicionar(tecla);
  } else if (tecla === "Enter") {
    calcular();
  } else if (tecla === "Backspace") {
    apagar();
  } else if (tecla === "Escape") {
    limpar();
  }
});
