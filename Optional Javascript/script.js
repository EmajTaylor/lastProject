const buttons = document.getElementsByClassName("action-button");
const poppup = document.querySelector("#popup-overlay");
const popupContents = document.querySelectorAll(".popup-content");
const closeButtons = document.querySelectorAll(".close-button")


let popupContent = null;
const buttonArray = Array.from(buttons);
buttonArray.forEach((button) => {
  button.addEventListener("click", (event) => {
    const btnID = event.target.id;
    switch(btnID) {
      case "popup-1-trigger":
        popupContent = document.querySelector("#popup-1")
        popupContent.style.display = "block"
        break
      case "popup-2-trigger":
        popupContent = document.querySelector("#popup-2")
        popupContent.style.display = "block"
        break
      case "popup-3-trigger":
        popupContent = document.querySelector("#popup-3")
        popupContent.style.display = "block"
        break;

    }
    poppup.style.display = "flex";

  });
});

Array.from(closeButtons).forEach(btn=>{ 
  btn.addEventListener("click", () => {
    poppup.style.display = "none";
    Array.from(popupContents).forEach((item) => {
      item.style.display = "none"
    })
  })
});

const menuButton = document.getElementsByClassName("hamburger");
const menu = document.querySelector(".navigation-items")
menuButton[0].addEventListener("click", function() {
  menu.classList.toggle("active");
});