class Api {
	/**
	 *
	 * @param {string} url
	 */
	constructor(url) {
		this._url = url;
	}

	async get() {
		return fetch(this._url)
			.then((res) => res.json())
			.catch((err) => console.log("an error occurs", err));
	}
}

class PhotographerApi extends Api {
	/**
	 *
	 * @param {string} url
	 */
	constructor(url) {
		super(url);
	}

	async getData() {
		return await this.get();
	}

	async getPhotographers() {
		const data = await this.getData();
		return data.photographers || [];
	}

	async getMedia() {
		const data = await this.getData();
		return data.media || [];
	}

	async getGallery(photographerId) {
		const media = await this.getMedia();
		// create a new array of media that match with the photographer's ID
		const gallery = media.filter(
			(item) => item.photographerId === photographerId
		);

		return gallery;
	}
}
