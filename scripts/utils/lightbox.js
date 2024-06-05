function lightbox(galleryData) {
    // DOM Elements
    const allMedias = document.querySelectorAll(".gallery-media-container");
    const closeLightboxBtn = document.querySelector(".lightbox-close-btn");
    const lightboxWrapper = document.querySelector(".lightbox-wrapper");
    const lightboxMediaContainer = document.querySelector(".lightbox");

    // Display lightbox event
    allMedias.forEach((mediaContainer, index) => {
        mediaContainer.addEventListener("click", () => {
            const mediaData = galleryData[index]; // Get corresponding media data
            displayLightbox(mediaData);
        });
    });

    // Hide lightbox event
    closeLightboxBtn.addEventListener("click", closeLightbox);
    document.addEventListener('keydown', function(e) {
        let isEscPressed = e.key === 'Escape' || e.code === 'Escape';
        if (isEscPressed && lightboxWrapper.getAttribute("aria-hidden") === "false") {
            closeLightbox();
        }
    });

    // Display lightbox function
    function displayLightbox(mediaData) {
        const template = new Lightbox(mediaData);
        const lightboxContent = template.lightboxContent();
        const lightboxMedia = lightboxMediaContainer.querySelector(".lightbox-media");

        if (lightboxMedia) {
            lightboxMediaContainer.replaceChild(lightboxContent, lightboxMedia);
        } else {
            lightboxMediaContainer.appendChild(lightboxContent);
        }

        lightboxWrapper.style.display = "flex";
        lightboxWrapper.setAttribute('aria-hidden', 'false');
    }

    // Hide lightbox function
    function closeLightbox() {
        lightboxWrapper.style.display = "none";
        lightboxWrapper.setAttribute('aria-hidden', 'true');
    }
}
