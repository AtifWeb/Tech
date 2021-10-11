let burgerIcon = document.querySelector(".burger-icon");
let SideBar = document.querySelector("aside");
burgerIcon.addEventListener("click", () => {
  SideBar.classList.toggle("active");
});
