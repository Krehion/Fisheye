class Lightbox {
    constructor(media) {
        this._media = media;
    }

    lightboxContent() {
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
        return lightboxMediaWrapper;
    }
}