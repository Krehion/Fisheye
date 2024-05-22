class PhotographerMedias {
    constructor(media) {
        this._media = media
    }

    createMediaGallery() {
        const $mediaGallery = document.createElement('article');
        $mediaGallery.classList.add('gallery-media');

        let mediaContent;

        if (this._media instanceof MediaImage) {
            mediaContent = `
            <div class="gallery-media-container">
                <img src="assets/photographers/${this._media.photographerId}/miniatures/${this._media.image}" alt="" />
            </div>`;
        } else if (this._media instanceof MediaVideo) {
            mediaContent = `
            <div class="gallery-media-container">
                <video>
                    <source src="assets/photographers/${this._media.photographerId}/miniatures/${this._media.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>`;
        }

        const galleryText = `
        <div class="gallery-text-container">
            <h2>${this._media.title}</h2>
            <div><span class="media-likes">${this._media.likes}</span> <input type="checkbox" class="heart">♥</input></div>
        </div>`;

        $mediaGallery.innerHTML = mediaContent + galleryText;

        return $mediaGallery
    }
}