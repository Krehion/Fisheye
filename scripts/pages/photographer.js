class PhotographerPage {
    constructor() {
        this.$photographerInfo = document.querySelector("#photographer-profile");
        this.$photographerGallery = document.querySelector("#gallery");
        this.$main = document.querySelector("#main");
        this.$modalTxt = document.querySelector(".modal-header-txt")
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

        const myPhotographer = myPhotographers[0]; // get the (only) element from generated array

        const photographerObj = new Photographer(myPhotographer); // photographerObj is an object
        const template = new PhotographerProfile(photographerObj);

        // Generate profile section
        this.$photographerInfo.appendChild(
            template.createPhotographerProfile()
        );

        // Add photographeer's name in contact form
        this.$modalTxt.appendChild(
            template.getPhotographerName()
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