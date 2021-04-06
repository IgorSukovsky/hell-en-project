(() => {
    const mobileMenuRef = document.querySelector("[data-mobile-menu]");
    const menuBtnOpenRef = document.querySelector("[data-mobile-menu-open]");
    const menuBtnCloseRef = document.querySelector("[data-mobile-menu-close]");


    menuBtnOpenRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    });

    menuBtnCloseRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    });
})();