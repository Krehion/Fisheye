class PhotographerLikesRate {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerLikesRate() { //WIP : reste à gérer calcul des likes
        const $rateBox = document.createElement('div');
        $rateBox.classList.add('likes-rate-box')

        const $rateContent = `
        <p>297&nbsp;081&nbsp;<span class="total-likes-heart">♥</span></p>
        <p>${this._photographer.price}€ / jour</p>
        `
        
        $rateBox.innerHTML = $rateContent

        return $rateBox
    }
}