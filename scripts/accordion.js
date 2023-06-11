const accordion = document.querySelectorAll(".events__item-info");
const accordionParent = document.querySelectorAll(".events__item");

accordion.forEach((item) =>
  item.addEventListener("click", () => {
    const parent = item.parentElement;

    if (parent.classList.contains("open")) {
      return;
    } else {
      for (const el of accordionParent) {
        el.classList.remove("open");
      }
      for (el of accordion) {
        el.classList.remove("open");
      }
      item.classList.add("open");
      parent.classList.add("open");
    }
  })
);
