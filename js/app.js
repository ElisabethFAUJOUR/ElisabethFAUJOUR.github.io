const app = {

    // ----- INIT FUNCTION -----

    init() {
        app.smoothScroll();
    },

    // ----- MODULES FUNCTIONS -----

    /**
     * Smooth scrool between sections
     */
    smoothScroll() {
        app.observeElements();
        app.listenToClickNavLinks();
        app.listenToClickLogoLink();
        app.listenToClickScrollArrow();
    },

    // ----- LISTENER EVENTS -----
    /**
     * Smooth elements display when scrolling page 
     */
    observeElements() {
        const elements = document.querySelectorAll(".fade-in");
        const options = {
          root: null, // élement racine utilisé comme zone d'intersection, "null" => fenêtre du navigateur 
          rootMargin: "0px", // marge supplémentaire 
          threshold: 0.2 // l'élément doit être au moins 20% visible pour être considérer comme intersectant 
        };
      
        const observer = new IntersectionObserver((entries, observer) => { // instance de IntersectionObserver avec pour paramètre un callback
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in-visible");
              observer.unobserve(entry.target);
            }
          });
        }, options);
      
        elements.forEach(element => {
          observer.observe(element);
        });
      },

    /**
     * Listener click on nav bar links and smooth scroll
     */
    listenToClickNavLinks() {
        const navLinkElems = document.querySelectorAll(".nav__link");
        navLinkElems.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const targetIdElem = link.getAttribute("href");
                const targetSectionElem = document.querySelector(targetIdElem);
                targetSectionElem.scrollIntoView({ behavior: "smooth" });
            });
        });
    },

     /**
     * Listener click on logo link and smooth scroll
     */
    listenToClickLogoLink() {
        const logoLinkElem = document.querySelector(".logo__link");
        logoLinkElem.addEventListener("click", (event) => {
            event.preventDefault();
            const homeSectionElem = document.querySelector("#home");
            homeSectionElem.scrollIntoView({ behavior: "smooth" });
        });
    },

    /**
     * Listener click on arrow scrollDown link and smooth scroll
     */
    listenToClickScrollArrow() {
        const scrollDownElem = document.querySelector(".scrollDown_link");
        const aboutSectionElem = document.querySelector("#about");
        scrollDownElem.addEventListener("click", (event) => {
            event.preventDefault();
            aboutSectionElem.scrollIntoView({ behavior: "smooth" });
        });
    },


}

window.addEventListener("DOMContentLoaded", app.init);




