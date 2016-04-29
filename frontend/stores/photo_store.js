var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var PhotoStore = new Store(AppDispatcher);

var _errors, _photos;

PhotoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "PHOTOS RECEIVED":
      console.log("photos received!");
      console.log(payload.photos);
      PhotoStore.setPhotos(payload.photos);
    break;

    case "ONE PHOTO RECEIVED":
      console.log("photo received!");
      console.log(payload.photo);
      PhotoStore.setPhotos([payload.photo]);
    break;

    case "ERROR":
      PhotoStore.setErrors(payload.errors);
      console.log(PhotoStore.errors());
    break;
  }
  PhotoStore.__emitChange();
};

PhotoStore.setPhotos = function(photos) {
  _photos = photos;
};

PhotoStore.setErrors = function(errors) {
  _errors = errors;
};

PhotoStore.errors = function() {
  if (_errors) {
    return JSON.parse(_errors.responseText);
  }
};

PhotoStore.inventory = function() {
  if (_photos) {
    return _photos.slice();
  }
};

module.exports = PhotoStore;
