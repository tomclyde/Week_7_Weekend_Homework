const PubSub = require('../helpers/pub_sub');

const ResetButtonView = function (buttonElement) {
  this.buttonElement = buttonElement;
};

ResetButtonView.prototype.bindEvents = function () {
  this.buttonElement.addEventListener('click', (evt) => {
    PubSub.publish('ResetButtonView:pressed', null);
  });
};


module.exports = ResetButtonView;
