setTimeout(function() {
    // DOM Elements
    const contactBtn = document.querySelector(".contact_button");
    const closeBtn = document.querySelector(".modal-close-btn")

    // open contact form event
    contactBtn.addEventListener("click", displayModal);

    // hide contact form event
    closeBtn.addEventListener("click", closeModal);

    // display contact form function
    function displayModal() {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "flex";
    }

    // hide contact form function
    function closeModal() {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "none";
    }
}, 200);