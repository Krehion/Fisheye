class PhotographerProfile {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerProfile() {
        const $photographerInfo = document.createElement('div');
        $photographerInfo.classList.add('photographer-info-wrapper')

        const infoContent = `
        <div id="photographer-info-txt">
            <h1 tabindex="0">${this._photographer.name}</h1>
            <div tabindex="0">
                <p class="info-localization">${this._photographer.city}, ${this._photographer.country}</p>
                <p class="info-tagline">${this._photographer.tagline}</p>
            </div>
        </div>
        <div id="photographer-info-contact">
          <button class="contact_button" onclick="displayModal()" aria-label="Contact me">Contactez-moi</button>
        </div>
        <div id="photographer-info-img">
            <div class="img-container" tabindex="0">
                <img src="${this._photographer.portrait}" alt="" />
            </div>
        </div>
        `
        
        $photographerInfo.innerHTML = infoContent

        return $photographerInfo
    }
}