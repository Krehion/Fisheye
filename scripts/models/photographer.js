class Photographer {
    constructor(data) {
        this._id = data.id
        this._name = data.name
        this._city = data.city
        this._country = data.country
        this._tagline = data.tagline
        this._price = data.price
        this._portrait = data.portrait
        // à ajouter après intégration des medias : this._likes = data.likes
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get city() {
        return this._city
    }

    get country() {
        return this._country
    }

    get tagline() {
        return this._tagline
    }

    get price() {
        return this._price
    }

    get portrait() {
        return `/assets/photographers/Photographers_ID/${this._portrait}`
    }

    // get likes() { boucle sur medias pour additioner tous les likes, initialiser à 0 }

}