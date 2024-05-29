function lightbox() {
    // DOM Elements
    const allMedias = document.querySelectorAll(".gallery-media-container");
    const closeLightboxBtn = document.querySelector(".lightbox-close-btn")

    const lightboxWrapper = document.querySelector(".lightbox-wrapper");

    // display lightbox event
    allMedias.forEach(image => {
        image.addEventListener("click", displayLightbox)
    });

    // hide lightbox event
    closeLightboxBtn.addEventListener("click", closeLightbox);
    document.addEventListener('keydown', function(e) { // when escape key is pressed
        let isEscPressed = e.key === 'Escape' || e.code === 'Escape';

        if (isEscPressed && lightboxWrapper.getAttribute("aria-hidden") === "false") {
            closeLightbox();
        } else {
            return;
        }
    });

    // display lightbox function
    function displayLightbox() {
        lightboxWrapper.style.display = "flex";
        lightboxWrapper.setAttribute('aria-hidden', 'false')
    }

    // hide lightbox function
    function closeLightbox() {
        lightboxWrapper.style.display = "none";
        lightboxWrapper.setAttribute('aria-hidden', 'true')
    }
}