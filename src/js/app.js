const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const cartOpenBtn = document.querySelector(".cart-icon");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cart = document.querySelector(".cart");


toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})

function closeNav() {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
    document.body.style.overflow = 'auto';
}
function closeCart() {
    cart.classList.remove("left-0");
    cart.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
    document.body.style.overflow = 'auto';
}


navOpenBtn.addEventListener("click", () => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", closeNav)
    document.body.style.overflow = 'hidden';
})
cartOpenBtn.addEventListener("click", () => {
    cart.classList.remove("-left-64");
    cart.classList.add("left-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", closeCart)
    document.body.style.overflow = 'hidden';
})

navCloseBtn.addEventListener("click", closeNav);
cartCloseBtn.addEventListener("click", closeCart);

// scroll window
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        document.body.style.overflow = 'auto';
    } else if (overlay.classList.contains('overlay--visible')) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'auto';
    }
});

