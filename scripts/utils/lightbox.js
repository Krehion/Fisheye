function lightbox(galleryData) {
    // DOM Elements
    const allMedias = document.querySelectorAll(".gallery-media-container");
    const closeLightboxBtn = document.querySelector(".lightbox-close-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const lightboxWrapper = document.querySelector(".lightbox-wrapper");
    const lightboxContainer = document.querySelector(".lightbox");

    let currentIndex = 0; // To keep track of the currently displayed media

    // Function to attach event listeners
    function attachEventListeners() {
        allMedias.forEach((mediaContainer, index) => {
            mediaContainer.addEventListener("click", () => {
                currentIndex = index;
                displayLightbox(galleryData[currentIndex]);
            });
        });

        closeLightboxBtn.addEventListener("click", closeLightbox);
        prevBtn.addEventListener("click", showPrevMedia);
        nextBtn.addEventListener("click", showNextMedia);

        document.addEventListener('keydown', function(e) {
            let isEscPressed = e.key === 'Escape' || e.code === 'Escape';
            if (isEscPressed && lightboxWrapper.getAttribute("aria-hidden") === "false") {
                closeLightbox();
            }
        });
    }

    // Display lightbox function
    function displayLightbox(mediaData) {
        const template = new Lightbox(mediaData);
        const lightboxContent = template.lightboxContent();
        const existingContent = lightboxContainer.querySelector(".lightbox-content-wrapper");

        if (existingContent) {
            lightboxContainer.replaceChild(lightboxContent, existingContent);
        } else {
            lightboxContainer.appendChild(lightboxContent);
        }

        lightboxWrapper.style.display = "flex";
        lightboxWrapper.setAttribute('aria-hidden', 'false');
    }

    // Show previous media
    function showPrevMedia() {
        currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        displayLightbox(galleryData[currentIndex]);
    }

    // Show next media
    function showNextMedia() {
        currentIndex = (currentIndex + 1) % galleryData.length;
        displayLightbox(galleryData[currentIndex]);
    }

    // Hide lightbox function
    function closeLightbox() {
        lightboxWrapper.style.display = "none";
        lightboxWrapper.setAttribute('aria-hidden', 'true');
    }

    // Attach event listeners initially
    attachEventListeners();
}