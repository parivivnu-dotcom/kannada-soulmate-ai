// Kannada Soulmate AI - Mobile MVP

// Screen navigation
function show(id) {
  document.querySelectorAll(".screen").forEach(function (x) {
    x.classList.remove("active");
  });

  const screen = document.getElementById(id);
  if (screen) {
    screen.classList.add("active");
  }
}

// Tab navigation
function showById(id) {
  show(id);

  document.querySelectorAll(".tabs button").forEach(function (x) {
    x.classList.remove("active");
  });

  if (id === "chat") {
    const buttons = document.querySelectorAll(".tabs button");
    if (buttons[1]) buttons[1].classList.add("active");
  }

  if (id === "profile") {
    const buttons = document.querySelectorAll(".tabs button");
    if (buttons[2]) buttons[2].classList.add("active");
  }

  if (id === "home") {
    const buttons = document.querySelectorAll(".tabs button");
    if (buttons[0]) buttons[0].classList.add("active");
  }
}


// Save companion name
function saveCompanion() {
  const input = document.getElementById("cname");

  if (!input) return;

  const name = input.value.trim() || "ಸ್ನೇಹಾ";

  localStorage.setItem("companion", name);

  alert(name + " ನಿಮ್ಮ AI companion ಆಗಿ ಉಳಿಸಲಾಗಿದೆ ❤️");
}


// Save profile
function saveProfile() {
  const ageInput = document.getElementById("age");
  const status = document.getElementById("profileStatus");

  if (!ageInput) return;

  const age = Number(ageInput.value);

  if (!age || age < 18) {
    if (status) {
      status.textContent = "⚠️ ಈ app 18+ ಬಳಕೆದಾರರಿಗೆ ಮಾತ್ರ.";
    }
    return;
  }

  const username =
    document.getElementById("username")?.value.trim() || "";

  localStorage.setItem("username", username);
  localStorage.setItem("age", age);

  if (status) {
    status.textContent = "✅ Profile saved successfully.";
  }
}


// Escape HTML
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (m) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[m];
  });
}


// Send message
function send() {
  const input = document.getElementById("message");
  const box = document.getElementById("chatbox");

  if (!input || !box) return;

  const text = input.value.trim();

  if (!text) return;

  // User message
  const userMessage = document.createElement("div");
  userMessage.className = "msg user";
  userMessage.textContent = text;

  box.appendChild(userMessage);

  input.value = "";

  // Demo AI reply
  setTimeout(function () {

    const companion =
      localStorage.getItem("companion") || "ಸ್ನೇಹಾ";

    let reply = "";

    const lower = text.toLowerCase();

    if (
      lower.includes("ಹಾಯ್") ||
      lower.includes("ಹಾಯ್") ||
      lower.includes("hello") ||
      lower.includes("hi")
    ) {
      reply =
        "ಹಾಯ್ 😊 ನಾನು " +
        companion +
        ". ನಿಮ್ಮ ಜೊತೆ ಮಾತನಾಡಲು ನನಗೆ ಸಂತೋಷ ❤️";
    }

    else if (
      lower.includes("ಹೇಗಿದ್ದೀಯ") ||
      lower.includes("ಹೇಗಿದ್ದೀಯಾ")
    ) {
      reply =
        "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ 😊 ನೀವು ಹೇಗಿದ್ದೀರಿ? ಇಂದು ನಿಮ್ಮ ದಿನ ಹೇಗಿತ್ತು?";
    }

    else if (
      lower.includes("love") ||
      lower.includes("ಪ್ರೀತಿ")
    ) {
      reply =
        "ಪ್ರೀತಿ ಅಂದರೆ ಪರಸ್ಪರ ಗೌರವ, ನಂಬಿಕೆ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವಿಕೆ ❤️";
    }

    else if (
      lower.includes("sad") ||
      lower.includes("ದುಃಖ") ||
      lower.includes("ಬೇಸರ")
    ) {
      reply =
        "ನಿಮಗೆ ಬೇಸರವಾಗಿರುವಂತೆ ಕಾಣುತ್ತಿದೆ 😌. ನೀವು ಬಯಸಿದರೆ ಏನಾಯಿತು ಎಂದು ನನ್ನ ಜೊತೆ ಹಂಚಿಕೊಳ್ಳಬಹುದು.";
    }

    else if (
      lower.includes("good night") ||
      lower.includes("ಶುಭ ರಾತ್ರಿ")
    ) {
      reply =
        "ಶುಭ ರಾತ್ರಿ 🌙❤️ ಚೆನ್ನಾಗಿ ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ.";
    }

    else {
      reply =
        "ನಾನು ಕೇಳುತ್ತಿದ್ದೇನೆ 😊 ನಿಮ್ಮ ಮಾತನ್ನು ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಲು ಇಷ್ಟಪಡುತ್ತೇನೆ. ಮುಂದುವರಿಸಿ ❤️";
    }

    const aiMessage = document.createElement("div");
    aiMessage.className = "msg ai";
    aiMessage.innerHTML = escapeHtml(reply);

    box.appendChild(aiMessage);

    box.scrollTop = box.scrollHeight;

  }, 600);
}


// Enter key support
document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("message");

  if (input) {
    input.addEventListener("keydown", function (event) {

      if (event.key === "Enter") {
        event.preventDefault();
        send();
      }

    });
  }

  // Load saved companion
  const savedName = localStorage.getItem("companion");

  const cname = document.getElementById("cname");

  if (savedName && cname) {
    cname.value = savedName;
  }

});
