class PhotographerPage {
    constructor() {
        this.$photographerInfo = document.querySelector("#photographer-profile");
        this.$photographerGallery = document.querySelector("#gallery");
        this.photographerApi = new PhotographerApi('../../data/photographers.json');
    }

    async init() {
        // Fetch photographer data from the API
        const photographersData = await this.photographerApi.getPhotographers();
        const myPhotographer = photographersData.filter(selectId);
        function selectId(photographer) {
            return photographer.id === 243; // à remplacer par l'id réel avec searchParams
        }

        // Generate photographer profile
        myPhotographer
            .map(photographer => new Photographer(photographer)) // à retirer : .map et .forEach : ce n'est pas un tableau. Créer 1 seul modèle et 1 seul template à partir des données dans myPhotographer.  
            .forEach(photographer => {
                const template = new PhotographerProfile(photographer);
                this.$photographerInfo.appendChild(
                    template.createPhotographerProfile()
                );
            });

        // Fetch gallery data
        const galleryData = await this.photographerApi.getGallery(243 /* à remplacer par l'id réel avec searchParams */);
        const myGallery = galleryData

        // Generate gallery
        myGallery
            .map(mediaData => MediaFactory.createMedia(mediaData))
            .forEach(media => {
                const template = new PhotographerMedias(media);
                this.$photographerGallery.appendChild(
                    template.createMediaGallery()
                );
            });
    }
}

const photographerPage = new PhotographerPage();
photographerPage.init();