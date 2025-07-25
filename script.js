let display = document.getElementById("display");

function adicionar(valor) {
  display.classList.remove("resultado");
  display.value += valor;
}

function limpar() {
  display.classList.remove("resultado");
  display.value = "";
}

function apagar() {
  display.classList.remove("resultado");
  display.value = display.value.slice(0, -1);
}

function calcular() {
  try {
    const resultado = eval(display.value.replace("%", "/100"));
    display.value = resultado;
    display.classList.add("resultado");
  } catch {
    display.value = "Erro";
    display.classList.remove("resultado");
  }
}

// Atalhos do teclado físico
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

// Toggle modo claro/escuro
const btnToggleTema = document.getElementById("btn-toggle-tema");

btnToggleTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btnToggleTema.textContent = "Modo Claro";
  } else {
    btnToggleTema.textContent = "Modo Escuro";
  }
});
