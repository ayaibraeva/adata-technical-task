const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");
const navigation = document.querySelector("#navigation");
const closeBtn= document.querySelector(".close-btn");
hamburger.addEventListener("click", () => {
 navigation.classList.remove("nav-bar-display-none");
 navigation.classList.add("nav-bar-mobile-page");
 console.log("hello");
});
closeBtn.addEventListener("click", () =>{
  navigation.classList.remove("nav-bar-mobile-page");
  navigation.classList.add("nav-bar-display-none");
  console.log("hello2");
});



