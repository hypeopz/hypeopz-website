// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const navCta = document.querySelector('.nav-cta');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      if (navCta) navCta.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close menu after clicking a link (mobile)
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        if (navCta) navCta.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
// Scroll To Top
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
// Loading Screen
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.classList.add("hidden");
    }
});
// Sticky Navbar Shadow
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
// Active Menu Highlight

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
// Success Toast

const form = document.querySelector(".contact-form");
const toast = document.getElementById("toast");

if(form){

form.addEventListener("submit",function(){

toast.classList.add("show");

setTimeout(function(){

toast.classList.remove("show");

},3000);

});

}
// Smooth page transition

document.querySelectorAll("a").forEach(link=>{

    const href = link.getAttribute("href");

    if(
        href &&
        !href.startsWith("#") &&
        !href.startsWith("javascript") &&
        !link.hasAttribute("target")
    ){

        link.addEventListener("click",function(e){

            e.preventDefault();

            document.body.style.opacity="0";

            setTimeout(()=>{
                window.location=this.href;
            },300);

        });

    }

});