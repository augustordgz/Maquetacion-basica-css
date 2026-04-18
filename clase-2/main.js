/**
 * @type {HTMLButtonElement}
 */
const temaButton = document.getElementById("tema");

temaButton.onclick = () => {
    const root = document.documentElement;
    root.style.setProperty("--bg",          "#F2F1EE");
    root.style.setProperty("--sidebar-bg",  "#E8E7E3");
    root.style.setProperty("--surface",     "#DDDBD7");
    root.style.setProperty("--surface-2",   "#D2D0CC");
    root.style.setProperty("--border",      "rgba(0,0,0,0.07)");
    root.style.setProperty("--accent",      "#3a6fd8");
    root.style.setProperty("--accent-glow", "rgba(58,111,216,0.20)");
    root.style.setProperty("--accent-2",    "#e04444");
    root.style.setProperty("--text",        "#17181C");
    root.style.setProperty("--text-muted",  "#6b7280");
};

const newChatButton = document.querySelector(".new-chat-btn");

newChatButton.onclick = () => {
  const chatActivo = document.querySelector(".history-item-active");
  chatActivo.classList.replace("history-item-active", "history-item");

  const nuevoTexto = document.querySelector(".main-h2");
  nuevoTexto.textContent = "Haz abierto un nuevo chat.";

  const nuevoChat = document.createElement("div");
  nuevoChat.classList.add("history-item-active");
  nuevoChat.textContent = "Nuevo chat";

  chatActivo.parentElement.insertBefore(nuevoChat, chatActivo);
};