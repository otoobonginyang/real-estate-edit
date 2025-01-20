const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
const body=document.body

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", (e) =>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))
body.addEventListener("click", () =>{
    body.classList.remove("active")
})
console.log(body)
