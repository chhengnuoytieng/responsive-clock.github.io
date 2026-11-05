const hamburager = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks")

hamburager.addEventListener("click", () => {

    navlinks.classList.toggle("navlinks-active");

})