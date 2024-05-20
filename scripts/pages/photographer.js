class PhotographerPage {
    constructor() {
        this.photographerInfo = document.querySelector("#photographer-profile");
        this.photographerGallery = document.querySelector("#gallery");
        this.main = document.querySelector("#main");
        this.modalTxt = document.querySelector(".modal-header-txt");
        this.photographerApi = new PhotographerApi('../../data/photographers.json');
    }
    
    async init() {
        let id = parseInt(new URL(document.location).searchParams.get("id"));

        // Create profile section
        const photographerObj = await this.getPhotographer(id);
        this.setProfile(photographerObj);

        // Create gallery section
        const galleryData = await this.photographerApi.getGallery(id);
        this.setGallery(galleryData);

        // Handle gallery sorting by
        this.handleSort(galleryData);

        // Fetch likes and rate data
        const templateLikes = new PhotographerLikesRate(photographerObj);

        // Generate likes and rate box
        this.main.appendChild(
            templateLikes.createPhotographerLikesRate()
        );
    }

    handleSort(galleryData) {
        const currentFilter = document.querySelector("#current_filter");
        currentFilter.addEventListener("change", function(e){
            e.preventDefault();

            // Trigger the right sorting corresponding to #current_filter
            let newGalleryData;
            if (currentFilter.innerText == "Titre") {
                newGalleryData = this.sortByTitle(galleryData);
            } else if (currentFilter.innerText == "Popularité") {
                newGalleryData = this.sortByPop(galleryData);
            } else if (currentFilter.innerText == "Date") {
                newGalleryData = this.sortByDate(galleryData);
            }

            // Empty current gallery
            this.dropGallery();

            // Generate new gallery
            this.setGallery(newGalleryData);
        }.bind(this)); // Use bind to keep the context of 'this'
    }
    
// TODO
    sortByPop(medias) {
        const mediaOrdered = Array.from(medias);
        mediaOrdered.sort(function (a, b) {
            return a.likes - b.likes;
        });
        console.log(mediaOrdered);
        // Update gallery with sorted data
        this.dropGallery();
        this.setGallery(mediaOrdered);
    }

// TODO
    sortByDate() {
        // Sorting logic here
        }
    
// TODO
    sortByTitle() {
        // Sorting logic here
    }

    // Empty gallery (used to display new sorted one)
    dropGallery() {
        this.photographerGallery.innerHTML = "";
    }

    // Generate gallery
    setGallery(galleryData) {
        galleryData
            .map(mediaData => MediaFactory.createMedia(mediaData))
            .forEach(media => {
                const template = new PhotographerMedias(media);
                this.photographerGallery.appendChild(
                    template.createMediaGallery()
                );
            });
    }

    // Generate profile section
    setProfile(photographerObj) {
        const template = new PhotographerProfile(photographerObj);
        this.photographerInfo.appendChild(
            template.createPhotographerProfile()
        );

        // Handle modal events now that the contact button is generated
        modal();

        // Add photographer's name in contact form
        this.modalTxt.appendChild(
            template.getPhotographerName()
        );
    }

    async getPhotographer(id) {
        // Fetch photographer data from the API
        const photographersData = await this.photographerApi.getPhotographers();
        const myPhotographers = photographersData.filter(function(photographer) {
            return photographer.id === id;
        });

        // get the (only) element from generated array
        const myPhotographerId = myPhotographers[0];
        
        // photographerObj is an object
        return new Photographer(myPhotographerId);
    }
}

const photographerPage = new PhotographerPage();
photographerPage.init();
