class MediaFactory {
	static createMedia(data) {
		// Determine the type of media (image or video) based on available data
		if (data.hasOwnProperty("image")) {
			return new MediaImage(data);
		} else if (data.hasOwnProperty("video")) {
			return new MediaVideo(data);
		} else {
			throw new Error("Unknown media format");
		}
	}
}
