var placeImage = {
	key:    'a73f8a3031523cf6f71ebc87e9906a74',
	secret: '6c183f21bd769762',

	requestBase:   'https://api.flickr.com/services/rest/?',
	requestFormat: 'json',

	searchMethod: 'flickr.photos.search',

	getPhotos: function() {
		var url = this.requestBase + "method=" + this.searchMethod + "&format=" + this.requestFormat + "&api_key=" + this.key + "&tags=cats";

		$.ajax({
			url: url,
			success: function(data) {
				console.log('Success!');
				console.log(data);
			}
		})
		
		return url;
	}
}

var photos = placeImage.getPhotos();
console.log('Photos:');
console.log(photos);