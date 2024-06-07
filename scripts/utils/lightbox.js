function lightbox(galleryData) {
    // DOM Elements
    const allMedias = document.querySelectorAll(".gallery-media-container");
    const closeLightboxBtn = document.querySelector(".lightbox-close-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const lightboxWrapper = document.querySelector(".lightbox-wrapper");
    const lightboxContainer = document.querySelector(".lightbox");

    let currentIndex = 0; // To keep track of the currently displayed media

    function updateFocusableElements() {
        const focusableElementsSelector = "button, [tabindex], img, video, p";
        const focusableContent = lightboxWrapper.querySelectorAll(focusableElementsSelector);

        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        // Trap focus inside modal for keyboard navigation
        lightboxWrapper.addEventListener('keydown', function(e) {
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

    // Function to attach event listeners
    function attachEventListeners() {
        // Display lightbox events
        allMedias.forEach((mediaContainer, index) => {
            mediaContainer.addEventListener("click", () => {
                currentIndex = index;
                displayLightbox(galleryData[currentIndex]);
            });
            mediaContainer.addEventListener("keydown", function(e) {
                let isEnterPressed = e.key === 'Enter' || e.code === 'Enter';
                let isSpacePressed = e.key === ' ' || e.code === 'Space';
                if (isEnterPressed || isSpacePressed) {
                    event.preventDefault(); // Prevent default behavior (scrolling down for space key)
                    currentIndex = index;
                    displayLightbox(galleryData[currentIndex]);
                }
            });
        });

        // Nav to previous media events
        prevBtn.addEventListener("click", showPrevMedia);
        document.addEventListener('keydown', function(e) {
            let isLeftArrowPressed = e.key === 'ArrowLeft' || e.code === 'ArrowLeft';
            if (isLeftArrowPressed && lightboxWrapper.getAttribute("aria-hidden") === "false") {
                showPrevMedia();
            }
        });

        // Nav to next media events
        nextBtn.addEventListener("click", showNextMedia);
        document.addEventListener('keydown', function(e) {
            let isRightArrowPressed = e.key === 'ArrowRight' || e.code === 'ArrowRight';
            if (isRightArrowPressed && lightboxWrapper.getAttribute("aria-hidden") === "false") {
                showNextMedia();
            }
        });

        // Close lightbox events 
        closeLightboxBtn.addEventListener("click", closeLightbox);
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

        if (existingContent) { // remove previously displayed content before generating a new one
            lightboxContainer.replaceChild(lightboxContent, existingContent);
        } else {
            lightboxContainer.appendChild(lightboxContent);
        }

        lightboxWrapper.style.display = "flex";
        lightboxWrapper.setAttribute('aria-hidden', 'false');

        // Update focusable elements and trap focus
        updateFocusableElements();
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