class PhotographerPage {
    constructor() {
        this.$photographerInfo = document.querySelector("#photographer-profile");
        this.$photographerGallery = document.querySelector("#gallery");
        this.$main = document.querySelector("#main");
        this.$modalTxt = document.querySelector(".modal-header-txt")
        this.photographerApi = new PhotographerApi('../../data/photographers.json');
    }

    selectId(photographer) {
        return photographer.id === id;
    }
    
    async init() {
        let id = parseInt(new URL(document.location).searchParams.get("id"));
        // Fetch photographer data from the API
        const photographersData = await this.photographerApi.getPhotographers();
        const myPhotographers = photographersData.filter(selectId);
        
        
        

        const myPhotographer = myPhotographers[0]; // get the (only) element from generated array

        const photographerObj = new Photographer(myPhotographer); // photographerObj is an object
        const template = new PhotographerProfile(photographerObj);

        // Generate profile section
        this.$photographerInfo.appendChild(
            template.createPhotographerProfile()
        );

        // Handle modal events now that the contact button is generated
        modal();

        // Add photographer's name in contact form
        this.$modalTxt.appendChild(
            template.getPhotographerName()
        );

        // Fetch gallery data
        const galleryData = await this.photographerApi.getGallery(id);

        // Generate gallery : à mettre dans une function -> pouvoir supprimer contenu et rappeler la function pour le tri
        galleryData
            .map(mediaData => MediaFactory.createMedia(mediaData))
            .forEach(media => {
                const template = new PhotographerMedias(media);
                this.$photographerGallery.appendChild(
                    template.createMediaGallery()
                );
            });
        

        // Handle gallery sorting by
        sortBy();

        // Fetch likes and rate data
        const templateLikes = new PhotographerLikesRate(photographerObj);

        // Generate likes and rate box
        this.$main.appendChild(
            templateLikes.createPhotographerLikesRate()
        );
    }
}

const photographerPage = new PhotographerPage();
photographerPage.init();