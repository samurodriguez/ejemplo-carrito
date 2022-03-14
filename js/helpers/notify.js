export const notify = (message, icon = "✅") => {
  const aside = document.querySelector("aside");

  aside.firstChild.textContent = icon + " " + message;

  aside.style.opacity = 1;

  setTimeout(() => {
    aside.style.opacity = 0;
  }, 2000);
};
