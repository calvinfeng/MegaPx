const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo-constants');

let _errors, _photos, _photo;

const PhotoStore = new Store(Dispatcher);
PhotoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PhotoConstants.RECEIVE:
      PhotoStore.setPhotos(payload.photos);
      PhotoStore.__emitChange();
    break;

    case PhotoConstants.RECEIVE_ONE:
      PhotoStore.setErrors(null);
      PhotoStore.setIndividualPhoto(payload.photo);
      PhotoStore.__emitChange();
    break;

    // case PhotoConstants.DELETE:
    //   PhotoStore.setErrors(null);
    //   PhotoStore.setPhotos(payload.photos);
    //   PhotoStore.__emitChange();
    // break;

    case PhotoConstants.ERROR:
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
  _photo = null;
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
