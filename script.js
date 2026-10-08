const music = document.getElementById("bgMusic");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");
const secretMessage = document.getElementById("secretMessage");

// -----------------------------
// MUSIC
// -----------------------------

document.addEventListener("click", function startMusic() {
  music.volume = 0.35;

  music.play().catch(() => {});

  document.removeEventListener("click", startMusic);
});

// -----------------------------
// POPUP MESSAGES
// -----------------------------

function showMessage(type) {
  if (type === "smile") {
    popupContent.innerHTML = `
        <h2>🌷 Smile, Baby Julie 🌷</h2>

        <p>
            If you're reading this right now,
            I hope you have a little smile on your face.
        </p>

        <p>
            And if you don't...
            well, I'm officially requesting one. 😤❤️
        </p>

        <p>
            You deserve a beautiful day today.
            Don't forget that.
        </p>
    `;
  }

  if (type === "verse") {
    popupContent.innerHTML = `
        <h2>✝️ A Little Reminder</h2>

        <p>
            “The Lord bless you and keep you;
            the Lord make his face shine on you
            and be gracious to you.”
        </p>

        <p><strong>— Numbers 6:24–25</strong></p>

        <br>

        <p>
            I hope God continues to guide you,
            protect you, and give you peace
            wherever you go. 🤍
        </p>
    `;
  }

  if (type === "music") {
    music.play();

    popupContent.innerHTML = `
        <h2>🎵 This One Is For You</h2>

        <p>
            Let the music play for a while.
        </p>

        <p>
            Imagine we're just sitting together,
            talking about random things,
            laughing at nothing,
            and enjoying each other's company. ❤️
        </p>

        <p>
            That's honestly one of the moments
            I want more of with you.
        </p>
    `;
  }

  popup.classList.add("show");
}

// -----------------------------
// CLOSE POPUP
// -----------------------------

function closePopup() {
  popup.classList.remove("show");
}

// Close when clicking outside

popup.addEventListener("click", function (event) {
  if (event.target === popup) {
    closePopup();
  }
});

// -----------------------------
// SECRET MESSAGE
// -----------------------------

function revealSecret() {
  ``;
  secretMessage.classList.toggle("show");

  if (secretMessage.classList.contains("show")) {
    document.getElementById("secretBtn").innerHTML = "💗";

    setTimeout(() => {
      secretMessage.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200);

    createHeartBurst();
  } else {
    document.getElementById("secretBtn").innerHTML = "✨";
  }
}

// -----------------------------
// HEART BURST
// -----------------------------

function createHeartBurst() {
  const symbols = ["❤️", "💕", "💗", "💖", "💞", "✨"];

  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "200";

    document.body.appendChild(heart);

    const x = (Math.random() - 0.5) * 500;
    const y = (Math.random() - 0.5) * 500;

    heart.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 1,
        },
        {
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.4)`,
          opacity: 0,
        },
      ],
      {
        duration: 1200 + Math.random() * 600,
        easing: "ease-out",
      },
    );

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}

// -----------------------------
// FLOATING HEARTS
// -----------------------------

function createFloatingHeart() {
  const container = document.querySelector(".hearts");

  const heart = document.createElement("div");

  const symbols = ["❤️", "💕", "💗", "💖", "💞", "✨"];

  heart.className = "heart";

  heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "%";

  heart.style.fontSize = Math.random() * 18 + 12 + "px";

  heart.style.animationDuration = Math.random() * 6 + 6 + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}

setInterval(createFloatingHeart, 650);

// -----------------------------
// ESC KEY CLOSE
// -----------------------------

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});
