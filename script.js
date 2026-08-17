// Kannada Soulmate AI - Mobile MVP

// Screen / Tab switching
function show(id, btn) {
  // Hide all screens
  document.querySelectorAll(".screen").forEach(function (screen) {
    screen.classList.remove("active");
  });

  // Show selected screen
  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.add("active");
  }

  // Update active button
  document.querySelectorAll(".tabs button").forEach(function (button) {
    button.classList.remove("active");
  });

  if (btn) {
    btn.classList.add("active");
  }
}

// Open chat
function showById(id) {
  const element = document.getElementById(id);

  if (element) {
    element.classList.add("active");

    document.querySelectorAll(".screen").forEach(function (screen) {
      if (screen.id !== id) {
        screen.classList.remove("active");
      }
    });
  }
}

// Save companion profile
function saveCompanion() {
  const nameElement = document.getElementById("cname");
  const personalityElement = document.getElementById("personality");

  const name = nameElement ? nameElement.value : "ಸಖಿ";
  const personality = personalityElement
    ? personalityElement.value
    : "ಸ್ನೇಹಪರ";

  localStorage.setItem("companionName", name);
  localStorage.setItem("companionPersonality", personality);

  alert("Companion profile saved ❤️");
}

// Save user profile
function saveProfile() {
  const username = document.getElementById("username");
  const age = document.getElementById("age");

  if (username) {
    localStorage.setItem("username", username.value);
  }

  if (age) {
    localStorage.setItem("age", age.value);
  }

  const status = document.getElementById("profileStatus");

  if (status) {
    status.textContent = "Profile saved successfully ✓";
  }
}

// Send chat message
function send() {
  const input = document.getElementById("message");

  if (!input) {
    return;
  }

  const text = input.value.trim();

  if (!text) {
    return;
  }

  const chatbox = document.getElementById("chatbox");

  if (!chatbox) {
    return;
  }

  // User message
  const userMessage = document.createElement("div");
  userMessage.className = "msg user";
  userMessage.textContent = text;

  chatbox.appendChild(userMessage);

  // Clear input
  input.value = "";

  // Demo AI reply
  setTimeout(function () {
    const aiMessage = document.createElement("div");
    aiMessage.className = "msg ai";

    aiMessage.textContent =
      "ನಾನು ಇಲ್ಲಿದ್ದೇನೆ ❤️ ನಿನ್ನ ಮಾತನ್ನು ಕೇಳಲು ಸಿದ್ಧ. ಇನ್ನಷ್ಟು ಹೇಳು.";

    chatbox.appendChild(aiMessage);

    // Scroll to latest message
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 600);

  // Scroll immediately
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Enter key sends message
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
  const savedName = localStorage.getItem("companionName");
  const savedPersonality = localStorage.getItem("companionPersonality");

  const nameElement = document.getElementById("cname");
  const personalityElement = document.getElementById("personality");

  if (savedName && nameElement) {
    nameElement.value = savedName;
  }

  if (savedPersonality && personalityElement) {
    personalityElement.value = savedPersonality;
  }
});
