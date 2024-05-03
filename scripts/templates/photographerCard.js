function photographerTemplate(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/Photographers_ID/${portrait}`;

    function getUserCardDOM() {
        // create all needed elements
        const article = document.createElement('article');
        const link = document.createElement('a');
        link.setAttribute("href", "photographer.html?id=" + id);
        link.setAttribute("aria-label", name)
        const imgContainer = document.createElement('div')
        imgContainer.setAttribute("class", "img-container")
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", "")
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const txtContainer = document.createElement('div')
        txtContainer.setAttribute("class", "txt-container")
        txtContainer.setAttribute("tabindex", "0")
        const localization = document.createElement('p');
        localization.textContent = city + ', ' + country;
        localization.setAttribute("class", "localization")
        const citation = document.createElement('p');
        citation.textContent = tagline;
        citation.setAttribute("class", "citation")
        const rate = document.createElement('p');
        rate.textContent = price + "€/jour";
        rate.setAttribute("class", "rate")

        // articulate elements in order
        article.appendChild(link);
        link.appendChild(imgContainer);
        imgContainer.appendChild(img);
        link.appendChild(h2);
        article.appendChild(txtContainer);
        txtContainer.appendChild(localization);
        txtContainer.appendChild(citation);
        txtContainer.appendChild(rate);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}