var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var PhotoStore = new Store(AppDispatcher);

var _errors, _photos, _photo;

PhotoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "PHOTOS RECEIVED":
      console.log("Store has received photos from API!");
      PhotoStore.setPhotos(payload.photos);
    break;

    case "ONE PHOTO RECEIVED":
      console.log("Store has received one photo from API; successful POST");
      PhotoStore.setIndividualPhoto(payload.photo);
    break;

    case "PHOTO DELETED":

    break;

    case "ERROR":
      PhotoStore.setErrors(payload.errors);
      console.log(PhotoStore.errors());
    break;
  }
  PhotoStore.__emitChange();
};

// Setters

PhotoStore.setIndividualPhoto = function(photo) {
  _photo = photo;
};

PhotoStore.setPhotos = function(photos) {
  _photos = photos;
};

PhotoStore.setErrors = function(errors) {
  _errors = errors;
};

// Getters

PhotoStore.errors = function() {
  if (_errors) {
    return JSON.parse(_errors.responseText);
  }
};

PhotoStore.photo = function() {
  return _photo;
};

PhotoStore.inventory = function() {
  if (_photos) {
    return _photos.slice();
  }
};

module.exports = PhotoStore;
