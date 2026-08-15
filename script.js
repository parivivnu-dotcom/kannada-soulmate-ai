// Kannada Soulmate AI - Mobile MVP

function show(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

function showById(id, btn) {
  show(id);

  document.querySelectorAll(".tabs button").forEach(button => {
    button.classList.remove("active");
  });

  if (btn) {
    btn.classList.add("active");
  }
}

// Save Companion
function saveCompanion() {
  const nameInput = document.getElementById("cname");
  const name = nameInput ? nameInput.value.trim() : "";

  if (!name) {
    alert("ದಯವಿಟ್ಟು Companion ಹೆಸರು ನಮೂದಿಸಿ ❤️");
    return;
  }

  localStorage.setItem("companion", name);

  const status = document.getElementById("companionStatus");
  if (status) {
    status.textContent = name + " ನಿಮ್ಮ Companion ಆಗಿ save ಆಗಿದೆ ❤️";
  }

  alert("Companion save ಆಯಿತು ❤️");
}

// Save Profile
function saveProfile() {
  const ageInput = document.getElementById("age");
  const usernameInput = document.getElementById("username");

  const age = ageInput ? Number(ageInput.value) : 0;
  const username = usernameInput ? usernameInput.value.trim() : "";

  if (age < 18) {
    const status = document.getElementById("profileStatus");
    if (status) {
      status.textContent = "ಈ MVP 18+ ಬಳಕೆದಾರರಿಗೆ ಮಾತ್ರ.";
    }
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("age", age);

  const status = document.getElementById("profileStatus");
  if (status) {
    status.textContent = "Profile save ಆಯಿತು ✅";
  }

  alert("Profile save ಆಯಿತು ✅");
}

// Send Chat Message
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
  setTimeout(() => {
    const aiMessage = document.createElement("div");
    aiMessage.className = "msg ai";

    aiMessage.textContent =
      "❤️ ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ನೀವು ಹೇಳುವುದನ್ನು ಗಮನದಿಂದ ಕೇಳುತ್ತೇನೆ. ಇನ್ನಷ್ಟು ಹೇಳಿ...";

    box.appendChild(aiMessage);

    box.scrollTop = box.scrollHeight;
  }, 600);

  box.scrollTop = box.scrollHeight;
}

// Press Enter to Send
document.addEventListener("DOMContentLoaded", function () {

  const message = document.getElementById("message");

  if (message) {
    message.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        send();
      }
    });
  }

  // Load saved Companion
  const savedCompanion = localStorage.getItem("companion");

  if (savedCompanion) {
    const cname = document.getElementById("cname");
    if (cname) {
      cname.value = savedCompanion;
    }
  }

  // Load saved Profile
  const savedUsername = localStorage.getItem("username");
  const savedAge = localStorage.getItem("age");

  if (savedUsername) {
    const username = document.getElementById("username");
    if (username) {
      username.value = savedUsername;
    }
  }

  if (savedAge) {
    const age = document.getElementById("age");
    if (age) {
      age.value = savedAge;
    }
  }

});
 
