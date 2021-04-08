(() => {
    const backdropRef = document.querySelector("[data-backdrop]");
    const modalBtnOpenRef = document.querySelector("[data-modal-open]");
    const modalBtnCloseRef = document.querySelector("[data-modal-close]");


    modalBtnOpenRef.addEventListener("click", () => {
    backdropRef.classList.toggle("is-open");
    });

    modalBtnCloseRef.addEventListener("click", () => {
    backdropRef.classList.toggle("is-open");
    });
})();