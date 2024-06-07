class PhotographerProfile {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerProfile() {
        const $photographerInfo = document.createElement('div');
        $photographerInfo.classList.add('photographer-info-wrapper')

        const infoContent = `
        <div id="photographer-info-txt">
            <h1 tabindex="2" id="info-name">${this._photographer.name}</h1>
            <div tabindex="3">
                <p class="info-localization">${this._photographer.city}, ${this._photographer.country}</p>
                <p class="info-tagline">${this._photographer.tagline}</p>
            </div>
        </div>
        <div id="photographer-info-contact">
          <button class="contact_button" aria-label="Contactez-moi" tabindex="4">Contactez-moi</button>
        </div>
        <div id="photographer-info-img">
            <div class="img-container" tabindex="5">
                <img src="${this._photographer.portrait}" alt="" />
            </div>
        </div>
        `
        
        $photographerInfo.innerHTML = infoContent

        return $photographerInfo
    }

    getPhotographerName() {
        const $photographerContactName = document.createElement('p')
        $photographerContactName.classList.add('modal-form-name')

        const nameContent = `${this._photographer.name}`

        $photographerContactName.innerHTML = nameContent

        return $photographerContactName
    }
}