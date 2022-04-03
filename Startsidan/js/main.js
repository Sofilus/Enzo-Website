const nav2 = document.querySelector(".nav2")
const nav = document.querySelector("#nav")

document.querySelector("#menubtn").addEventListener("click", () => {
    nav2.classList.toggle("active");
    nav.classList.toggle("active");
})

