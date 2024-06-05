class Lightbox {
    constructor(media) {
        this._media = media;
    }

    lightboxContent() {
        const lightboxContentWrapper = document.createElement("div");
        lightboxContentWrapper.classList.add("lightbox-content-wrapper");

        const lightboxMediaWrapper = document.createElement("div");
        lightboxMediaWrapper.classList.add("lightbox-media");
        let lightboxMedia;

        if (this._media.image) {
            lightboxMedia = `<img src="assets/photographers/${this._media.photographerId}/${this._media.image}" alt="${this._media.title}" />`;
        } else if (this._media.video) {
            lightboxMedia = `
            <video controls>
                <source src="assets/photographers/${this._media.photographerId}/${this._media.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
        }

        lightboxMediaWrapper.innerHTML = lightboxMedia;

        const lightboxTitle = document.createElement("div");
        lightboxTitle.classList.add("lightbox-title");
        lightboxTitle.textContent = this._media.title;

        lightboxContentWrapper.appendChild(lightboxMediaWrapper);
        lightboxContentWrapper.appendChild(lightboxTitle);

        return lightboxContentWrapper;
    }
}
