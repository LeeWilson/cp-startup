var ToastDispatcher = require('../dispatchers/toastDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/constants');
var Actions = Constants.ActionTypes;
var Events = Constants.EventTypes;
var assign = require('object-assign');

var _initCalled = false;
var isOpen = false;
var message = '';
var _callBack;
var _showOverlay;

var ToastStore = assign({}, EventEmitter.prototype, {

  init: function () {
    if (_initCalled) {
      return;
    }
    _initCalled = true;
  },

  emitChange: function () {
    this.emit(Events.CHANGE_EVENT);
  },

  addChangeListener: function (eventType, listener) {
    if (!listener) {
      listener = eventType;
      eventType = Events.CHANGE_EVENT;
    }
    this.on(eventType, listener);
  },

  removeChangeListener: function (eventType, listener) {
    if (!listener) {
      listener = eventType;
      eventType = Events.CHANGE_EVENT;
    }
    this.removeListener(eventType, listener);
  },

  get: function () {
    return { isOpen: isOpen, message: message };
  },

  getSnackData: function(){
    return { isOpen: isOpen, message: message, snackAction: _callBack, showOverlay: _showOverlay };
  },

  update: function (data) {
      isOpen = data.isOpen || false;
      message = data.message || '';
      this.emitChange();
  },

  updateSnackData: function (data) {
    isOpen = data.isOpen || false;
    message = data.message || '';
    _callBack = data.callBack
    _showOverlay = data.showOverlay || false;
    this.emit(Events.SNACK_UPDATE);
  }

});

ToastStore.dispatchToken = ToastDispatcher.register(function (payload) {
  switch (payload.type) {
    case Actions.GET_TOAST:
      ToastStore.get(payload);
      break;
    case Actions.UPDATE_TOAST:
      ToastStore.update(payload.data);
      break;
    default:
      break;
  }
  return true;
});

module.exports = ToastStore;
