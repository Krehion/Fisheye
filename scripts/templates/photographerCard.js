function photographerTemplate(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/Photographers_ID/${portrait}`;

    function getUserCardDOM() {
        // create all needed elements
        const article = document.createElement('article');
        const link = document.createElement('a');
        link.setAttribute("href", "photographer.html?id=" + id);
        const imgContainer = document.createElement('div')
        imgContainer.setAttribute("class", "imgContainer")
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", "")
        const h2 = document.createElement('h2');
        h2.textContent = name;
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
        article.appendChild(localization);
        article.appendChild(citation);
        article.appendChild(rate);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}