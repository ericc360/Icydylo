window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const elements = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  }

  // run once on load
  revealOnScroll();

  // run on scroll
  window.addEventListener("scroll", revealOnScroll);

  // =========================
  // 🔊 AUDIO WITH FADE-IN
  // =========================

  const path = window.location.pathname;
  const page = path.split("/").pop();

  let audioSrc = "";

  if (page === "index.html" || page === "") {
    audioSrc = "patterns.mp3";
  } else if (page === "about.html") {
    audioSrc = "sienna.mp3";
  } else if (page === "work.html") {
    audioSrc = "intentions.mp3"; // change if you want
  }

  if (audioSrc) {
    const audio = new Audio(audioSrc);
    audio.loop = false;
    audio.volume = 0;

    function fadeInAudio() {
      let vol = 0;
      const target = 0.4;

      const fade = setInterval(() => {
        if (vol < target) {
          vol += 0.02;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 100);
    }

    // try autoplay
    audio.play().then(() => {
      fadeInAudio();
    }).catch(() => {
      // fallback if autoplay blocked
      document.addEventListener("click", () => {
        audio.play();
        fadeInAudio();
      }, { once: true });
    });
  }
});