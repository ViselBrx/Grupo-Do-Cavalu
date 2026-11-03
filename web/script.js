import { salvarResposta } from "../api/firebase.js";

document.querySelectorAll(".tema").forEach((botao) => {
  botao.addEventListener("click", () => {
    document.body.className = `tema-${botao.dataset.tema}`;
    document.querySelectorAll(".tema").forEach((item) => item.classList.remove("ativo"));
    botao.classList.add("ativo");
  });
});

const form = document.querySelector("#questionario");
const mensagem = document.querySelector("#mensagem");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const botao = form.querySelector("button[type=submit]");
  const dados = Object.fromEntries(new FormData(form));

  botao.disabled = true;
  mensagem.textContent = "Enviando...";

  try {
    await salvarResposta({ ...dados, tema: document.body.className.replace("tema-", "") });
    mensagem.textContent = "Respostas enviadas com sucesso.";
    form.reset();
  } catch (erro) {
    console.error(erro);
    mensagem.textContent = "Não foi possível enviar.";
  } finally {
    botao.disabled = false;
  }
});
