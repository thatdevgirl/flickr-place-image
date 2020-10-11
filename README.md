# Flickr Place Image

__Author:__ Joni Halabi (www.jhalabi.com)

## Description

This is a quick and dirty script that uses the Flickr API to provide placeholder images for web developers and designers. All images are public Flickr user images. Please do not use these images for any sort of production or public usage without permission from the image owner.

## Usage

1. jQuery is required. (Sorry folks! Some day I will refactor this to not require jQuery, but, as stated above, this is a quick and dirty script.)

2. Include the flickr-place-image.js file in the /js/ library somewhere on your page.

3. Place the following code anywhere on your site where you require a placeholder image:
`<img src="" class="placeholder" data-tags="comma,separated,tags" />`

## Required Attributes

* **class:** The "placeholder" class is required; this class is how the script identifies where placeholder images go.

* **data-tags:** A comma-separated list of tags that is used to search for public images on Flickr.
