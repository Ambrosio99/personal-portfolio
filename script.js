/* Animação de rolagem */

function scrollsuave() {
  const linksint = document.querySelectorAll('.js-menu a[href^="#"]');
  linksint.forEach((item) => {
    item.addEventListener("click", scrollto);
  });
  function scrollto(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}
scrollsuave();

/* Animação de rolagem rodapé pro inicio*/

function scrolltoinit() {
  const initfooter = document.querySelector(".toinit");
  initfooter.addEventListener("click", scrolltoinit);
  function scrolltoinit(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}
scrolltoinit();
