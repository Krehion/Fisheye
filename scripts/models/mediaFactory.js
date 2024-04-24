class MediaFactory {
    constructor(media, type) {
        // It the media is a photography, return the image model
        if (type === 'image') {
            return new Image(media)
        // If the media is a vieo, return the video model
        } else if (type === 'video') {
            return new Video(media)
        // throw error if unrecognized format
        } else {
            throw 'Unknown type format'
        }
    }
 }