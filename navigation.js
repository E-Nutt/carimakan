const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=>{
    const visiblity = nav.getAttribute("data-visible");
     if(visiblity === "false"){
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        navToggle.style.transform = "rotate(1.5turn)";
        navToggle.style.transition = "transform 300ms";
     } else{
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        navToggle.style.transform = "rotate(0deg)";
     }
});
