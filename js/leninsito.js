const chatBtn = document.getElementById("leninsitoBtn");
const chatWindow = document.getElementById("leninsitoChat");
const closeBtn = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendMessage");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

chatBtn.addEventListener("click", () => chatWindow.classList.toggle("d-none"));
closeBtn.addEventListener("click", () => chatWindow.classList.add("d-none"));

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if (msg === "") return;
  appendMessage("user", msg);
  userInput.value = "";

  setTimeout(() => {
    appendMessage("bot", "Estoy pensando... 💭 (Esta funcion esta en desarrollo, proximamente 20 de enero de 2027...)");
    // Aquí  va la api de la intenligencia artificial proximamente xd
  }, 1000);
}

function appendMessage(role, text) {
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
