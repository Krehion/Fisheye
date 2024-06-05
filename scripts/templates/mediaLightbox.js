class Lightbox {
    constructor(media) {
        this._media = media;
    }

    lightboxContent() {
        // Create global wrapper for styling
        const lightboxContentWrapper = document.createElement("div");
        lightboxContentWrapper.classList.add("lightbox-content-wrapper");

        // Create media wrapper
        const lightboxMediaWrapper = document.createElement("div");
        lightboxMediaWrapper.classList.add("lightbox-media");
        let lightboxMedia;

        if (this._media.image) {
            lightboxMedia = `<img src="assets/photographers/${this._media.photographerId}/${this._media.image}" alt="${this._media.title}"  aria-label="vue agrandie de la photo" tabindex="0" />`;
        } else if (this._media.video) {
            lightboxMedia = `
            <video controls>
                <source src="assets/photographers/${this._media.photographerId}/${this._media.video}" type="video/mp4"  aria-label="vue agrandie de la vidéo" tabindex="0" >
                Your browser does not support the video tag.
            </video>`;
        }

        lightboxMediaWrapper.innerHTML = lightboxMedia;

        // Create textbox for media title
        const lightboxTitle = document.createElement("p");
        lightboxTitle.setAttribute("id", "lightbox-title");
        lightboxTitle.setAttribute("tabindex", "0")
        lightboxTitle.textContent = this._media.title;

        // Add media & title to global wrapper
        lightboxContentWrapper.appendChild(lightboxMediaWrapper);
        lightboxContentWrapper.appendChild(lightboxTitle);

        return lightboxContentWrapper;
    }
}