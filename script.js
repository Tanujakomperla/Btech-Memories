const heartContainer = document.querySelector('.heart-container');
const heartColors = ['#ff69b4', '#ff4d6d', '#ff3366', '#ff99aa'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-symbol');
  heart.innerText = '💖';

  const size = Math.random() * 20 + 20;
  heart.style.fontSize = `${size}px`;

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

  // Wait for any user interaction to safely play the audio
  window.addEventListener("click", () => {
    const audio = document.getElementById("bg-audio");
    if (audio.paused) {
      audio.play().catch((err) => {
        console.error("Audio play was blocked:", err);
      });
    }
  });



setInterval(createHeart, 300);
