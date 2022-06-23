const about = document.getElementById('about');

window.addEventListener("resize", () => {
  if (about.clientWidth > 600 && about.clientWidth < 900) {
    location.reload();
  }
});
