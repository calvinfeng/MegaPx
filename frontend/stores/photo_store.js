var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var PhotoStore = new Store(AppDispatcher);

var _errors;

PhotoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "PHOTO RECEIVED":
      console.log("photo received!");
      console.log(payload.photo);
    break;

    case "ERROR":
      PhotoStore.setErrors(payload.errors);
      console.log(PhotoStore.errors());
    break;
  }
  PhotoStore.__emitChange();
};

PhotoStore.setErrors = function(errors) {
  _errors = errors;
};

PhotoStore.errors = function() {
  if (_errors) {
    return JSON.parse(_errors.responseText);
  }
};
