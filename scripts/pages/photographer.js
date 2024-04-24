class PhotographerPage {
    constructor() {
        this.$photographerInfo = document.querySelector("#main");
        this.photographerApi = new PhotographerApi('../../data/photographers.json');
    }

    async init() {
        // Fetch photographer data from the API
        const photographersData = await this.photographerApi.getPhotographers();
        const myPhotographer = photographersData.filter(selectId);
        function selectId(photographer) {
            return photographer.id === 243; // à filtrer sur searchparams au lieu de 243
        }

        // Generate photographer page content
        myPhotographer
            .map(photographer => new Photographer(photographer)) // à retirer : .map et .forEach : ce n'est pas un tableau. Créer 1 seul modèle et 1 seul template à partir des données dans myPhotographer.  
            .forEach(photographer => {
                const template = new PhotographerProfile(photographer);
                this.$photographerInfo.appendChild(
                    template.createPhotographerProfile()
                );
            });
    }
}

const photographerPage = new PhotographerPage();
photographerPage.init();