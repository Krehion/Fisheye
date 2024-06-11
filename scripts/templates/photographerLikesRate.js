class PhotographerLikesRate {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerLikesRate() {
        const rateBox = document.createElement('div');
        rateBox.classList.add('likes-rate-box')
        rateBox.setAttribute("tabindex", "6");

        // Calculate and display the sum of likes
        // Select all elements with class "media-likes"
        let likesElements = document.getElementsByClassName("media-likes");
        // Initialize sum
        let sum = 0;
        // Loop through each element and sum up their values
        for (let i = 0; i < likesElements.length; i++) {
            // Convert text content to number and add to sum
            sum += parseInt(likesElements[i].textContent);
        }

        const rateContent = `
        <p class="total-likes">
            <span aria-hidden="true">${sum}</span>
            <span class="screen-reader-only">${sum} likes</span>
        </p>
        <p>${this._photographer.price}€ / jour</p>
        `
        // screen reader ignores a simple "aria-label" on the <p> element so we add a hidden text

        rateBox.innerHTML = rateContent

        return rateBox
    }
}