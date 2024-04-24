class PhotographerMedias {
    constructor(media) {
        this._media = media
    }

    createMediaGallery() {
        const $mediaGallery = document.createElement('div');
        $mediaGallery.classList.add('media-gallery');

        const galleryContent = `
        <div>hello</div>
        `

        $mediaGallery.innerHTML = galleryContent

        return $mediaGallery
    }
}