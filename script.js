const miopiaInput = document.getElementById("miopia");
const imagemSimulada = document.getElementById("imagem-simulada");

function handleUpdate() {
  const miopia = miopiaInput.value;

  document.documentElement.style.setProperty("--blur", miopia + "px");

  imagemSimulada.style.filter = `blur(${miopia}px)`;
}

miopiaInput.addEventListener("input", handleUpdate);

handleUpdate();
