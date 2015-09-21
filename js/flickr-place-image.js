var placeImage = {
	key:        '1bed842637720a719b5ac90bcca6133c',
	baseUrl:    'https://api.flickr.com/services/rest/?',
	format:     'json',
	safeSearch: '1',
	method:     'flickr.photos.search',

	getPhotos: function() {
		var _this = this;

		$('img.placeholder').each(function() {
			// Get the tag(s) for this placeholder image.
			var tags = $(this).data('tags');

			// Construct the AJAX call's URL.
			var url  = _this.getApiUrl(tags);

			// Save the DOM object requiring the placeholder image.
			_this.img = this;

			// Make the AJAX call.
			// -- TODO: Required to be async for multiple calls; look into async solutions.
			$.ajax({
				url: url,
				async: false,
				error: function(xhr, status, err) {
					console.log('Error! \n' + status + '\n' + err);
				}
			});
		});
	},

	getApiUrl: function(tags) {
		return this.baseUrl 
				+ 'method=' + this.method 
				+ '&api_key=' + this.key 
				+ '&format=' + this.format
				+ '&safe_search=' + this.safeSearch
				+ '&tags=' + tags;
	},

	displayPhoto: function(photo) {
		var src = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'
		$(this.img).attr('src', src);
	}
}


/*
 * jsonFlickrApi()
 *
 * Parameters:
 *    response = AJAX response from API call.
 * 
 * Description:
 *    Calls the displayPhoto() function from the placeImage namespace; sends 1 random photo
 *    object from the AJAX response as a parameter.
 */

function jsonFlickrApi(response) {
	var rand = Math.floor(Math.random() * 100);	// 100 is the default number of replies.
	var photo = response.photos.photo[rand];

	placeImage.displayPhoto(photo);
}


var photos = placeImage.getPhotos();