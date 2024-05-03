class PhotographerPage {
    constructor() {
        this.$photographerInfo = document.querySelector("#photographer-profile");
        this.$photographerGallery = document.querySelector("#gallery");
        this.photographerApi = new PhotographerApi('../../data/photographers.json');
    }

    async init() {
        let id = parseInt(new URL(document.location).searchParams.get("id"));
        // Fetch photographer data from the API
        const photographersData = await this.photographerApi.getPhotographers();
        const myPhotographers = photographersData.filter(selectId);
        
        
        function selectId(photographer) {
            return photographer.id === id;
        }

        const myPhotographer = myPhotographers[0]; // récupérer seul élément du tableau généré

        const photographerObj = new Photographer(myPhotographer); // renvoie un objet photographer
        const template = new PhotographerProfile(photographerObj);
        this.$photographerInfo.appendChild(
            template.createPhotographerProfile()
        );

        // Fetch gallery data
        const galleryData = await this.photographerApi.getGallery(id);
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