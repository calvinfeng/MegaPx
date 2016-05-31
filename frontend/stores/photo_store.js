var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PhotoStore = new Store(AppDispatcher);

var _errors, _photos, _photo;

PhotoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "PHOTOS RECEIVED":
      PhotoStore.setPhotos(payload.photos);
      PhotoStore.__emitChange();
    break;

    case "ONE PHOTO RECEIVED":
      PhotoStore.setErrors(null);
      PhotoStore.setIndividualPhoto(payload.photo);
      PhotoStore.__emitChange();
    break;

    // case "PHOTO DELETED":
    //   PhotoStore.setErrors(null);
    //   PhotoStore.setPhotos(payload.photos);
    //   PhotoStore.__emitChange();
    // break;

    case "PHOTO ERROR":
      PhotoStore.setErrors(payload.errors);
      PhotoStore.__emitChange();
    break;
  }
};

// Setters
PhotoStore.setIndividualPhoto = function(photo) {
  _photo = photo;
  _photos.push(photo);
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
