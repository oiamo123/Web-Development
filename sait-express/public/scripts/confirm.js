const p = document.querySelector(`p`);
let time = 5;

// FOR CONFIRMATION PAGE. UPDATES TIME AND REDIRECTS TO HOME PAGE
window.addEventListener("load", () => {
  p.textContent = `You will be redirected in ${time} seconds.`;
  setInterval(() => {
    time -= 1;
    p.textContent = `You will be redirected in ${time} seconds.`;
    if (time === 0) {
      window.location.href = "/";
    }
  }, 1000);
});
