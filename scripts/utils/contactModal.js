function modal() {
    // DOM Elements
    const contactBtn = document.querySelector(".contact_button");
    const closeBtn = document.querySelector(".modal-close-btn");
    const modalTitle = document.querySelector(".modal-header-txt")

    const  focusableElements = "button, [href], input, select, textarea, [tabindex]";
    const modal = document.querySelector("#contact_modal");
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

    // open contact form event
    contactBtn.addEventListener("click", displayModal);

    // hide contact form event
    closeBtn.addEventListener("click", closeModal);
    document.addEventListener('keydown', function(e) { // when escape key is pressed
        let isEscPressed = e.key === 'Escape' || e.code === 'Escape';

        if (isEscPressed && modal.getAttribute("aria-hidden") === "false") {
            closeModal();
        } else {
            return;
        }
    });

    // display contact form function
    function displayModal() {
        const header = document.getElementById("header");
        const main = document.getElementById("main");
        const modal = document.getElementById("contact_modal");
        header.setAttribute('aria-hidden', 'true')
        main.setAttribute('aria-hidden', 'true')
        modal.setAttribute('aria-hidden', 'false')
        modal.style.display = "flex";
        modalTitle.focus();
    }

    // hide contact form function
    function closeModal() {
        const header = document.getElementById("header");
        const main = document.getElementById("main");
        const modal = document.getElementById("contact_modal");
        header.setAttribute('aria-hidden', 'false')
        main.setAttribute('aria-hidden', 'false')
        modal.setAttribute('aria-hidden', 'true')
        modal.style.display = "none";
    }

    // Trap focus inside modal for keyboard navigation
    document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab' || e.code === 'Tab';

    if (!isTabPressed) {
        return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
        if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
        }
    } else { // if tab key is pressed
        if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
        }
    }
    });

    firstFocusableElement.focus();
}