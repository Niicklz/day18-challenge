const buttons = document.querySelectorAll("[data-buttons]") as NodeListOf<HTMLButtonElement>;
const app = document.getElementById("app")!;
let counter = 1;
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (counter === 5 && btn.dataset.buttons === "next") counter = 0;
    if (counter === 1 && btn.dataset.buttons === "prev") counter = 6; 

    if (btn.dataset.buttons === "next") {
      counter++;
      app.style.backgroundImage = `url(/src/assets/image${counter}.avif)`;
    } else {
      counter--;
      app.style.backgroundImage = `url(/src/assets/image${counter}.avif)`;
    }
  });
});
