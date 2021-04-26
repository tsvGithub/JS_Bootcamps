"use strict";

//select elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal); //NodeList(3)
// 0: button.show-modal
// 1: button.show-modal
// 2: button.show-modal
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
// }
//Show modal 1
//Show modal 2
//Show modal 3
//------------
//2
const openModal = function () {
  //not use dot-hidden ('.hidden'),
  //just 'hidden' class! Dot is only for selector,
  //but here we not selecting anything, we just
  //passing in the name of the class (string)
  //   modal.classList.remove("hidden", 'ddd', kkk);
  //modal have class 'hidden'=> remove it & make modal visible
  modal.classList.remove("hidden");
  //or:
  //   modal.style.display = "block";

  //make overlay over the buttons visible
  overlay.classList.remove("hidden");
};

//4
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//1
for (let i = 0; i < btnsOpenModal.length; i++) {
  //open Modal
  btnsOpenModal[i].addEventListener("click", openModal);
}

//3 close modal window & overlay
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//keyboard events:
//remove modal by escape key
document.addEventListener("keydown", function (e) {
  //   console.log(e.key); //Escape
  //if ecs pressed =>
  //if event is esc & if modal is open =>
  //if modal does not contain class 'hidden'
  //it is visible => close modal window
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    //see above (4)
    closeModal();
  }
});
