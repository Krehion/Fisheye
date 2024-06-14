class PhotographerPage {
	constructor() {
		this.photographerInfo = document.querySelector("#photographer-profile");
		this.photographerGallery = document.querySelector("#gallery");
		this.main = document.querySelector("#main");
		this.modalTxt = document.querySelector(".modal-header-txt");
		this.lightboxContainer = document.querySelector(".lightbox");
		this.photographerApi = new PhotographerApi("../../data/photographers.json");
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

		// Add media to lightbox
		this.setLightbox(galleryData);

		// Fetch likes and rate data
		const templateLikes = new PhotographerLikesRate(photographerObj);

		// Generate likes and rate box
		this.main.appendChild(templateLikes.createPhotographerLikesRate());
	}

	handleSort(galleryData) {
		const currentFilter = document.querySelector("#current_filter");

		// Create observer (event listener won't work for inner text changes)
		const filterObserver = new MutationObserver((mutationsList) => {
			for (let mutation of mutationsList) {
				if (mutation.type === "childList") {
					// Trigger the right sorting corresponding to #current_filter
					let newGalleryData;
					if (currentFilter.innerText === "Titre") {
						newGalleryData = this.sortByTitle(galleryData);
					} else if (currentFilter.innerText === "Popularité") {
						newGalleryData = this.sortByPop(galleryData);
					} else if (currentFilter.innerText === "Date") {
						newGalleryData = this.sortByDate(galleryData);
					}

					// Empty current gallery & lightbox
					this.dropGallery();
					this.dropLightbox();

					// Generate new gallery & lightbox content
					this.setGallery(newGalleryData);
					this.setLightbox(newGalleryData);
				}
			}
		});

		// Configuration of the observer
		const config = { childList: true, subtree: true };

		// Start observing the target node for configured mutations
		filterObserver.observe(currentFilter, config);
	}

	sortByPop(medias) {
		const mediaOrdered = medias.slice().sort((a, b) => b.likes - a.likes);
		return mediaOrdered;
	}

	sortByDate(medias) {
		const mediaOrdered = medias
			.slice()
			.sort((a, b) => new Date(b.date) - new Date(a.date));
		return mediaOrdered;
	}

	sortByTitle(medias) {
		const mediaOrdered = medias
			.slice()
			.sort((a, b) => a.title.localeCompare(b.title));
		return mediaOrdered;
	}

	// Empty gallery (used to display new sorted one)
	dropGallery() {
		this.photographerGallery.innerHTML = "";
	}

	// Generate gallery
	setGallery(galleryData) {
		if (!galleryData || !Array.isArray(galleryData)) {
			console.error("Invalid galleryData:", galleryData);
			return;
		}
		galleryData.forEach((mediaData) => {
			const media = MediaFactory.createMedia(mediaData);
			const template = new PhotographerMedias(media);
			this.photographerGallery.appendChild(template.createMediaGallery());
		});
		likes();
	}

	//  Empty lightbox (used to display new sorted one)
	dropLightbox() {
		const lightboxDynamicContent = document.querySelector(
			".lightbox-content-wrapper"
		);
		if (lightboxDynamicContent) {
			this.lightboxContainer.removeChild(lightboxDynamicContent);
		}
	}

	// Generate lightbox
	setLightbox(galleryData) {
		const template = new Lightbox(galleryData[0]); // Pass the first media data initially
		this.lightboxContainer.appendChild(template.lightboxContent());
		lightbox(galleryData);
	}

	// Generate profile section
	setProfile(photographerObj) {
		const template = new PhotographerProfile(photographerObj);
		this.photographerInfo.appendChild(template.createPhotographerProfile());

		// Handle modal events now that the contact button is generated
		modal();

		// Add photographer's name in contact form
		this.modalTxt.appendChild(template.getPhotographerName());
	}

	async getPhotographer(id) {
		// Fetch photographer data from the API
		const photographersData = await this.photographerApi.getPhotographers();
		const myPhotographers = photographersData.filter(
			(photographer) => photographer.id === id
		);

		// get the (only) element from generated array
		const myPhotographerId = myPhotographers[0];

		// photographerObj is an object
		return new Photographer(myPhotographerId);
	}
}

const photographerPage = new PhotographerPage();
photographerPage.init();
