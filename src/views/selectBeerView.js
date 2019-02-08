const PubSub = require('../helpers/pub_sub');

const SelectBeerView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectBeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-data-ready', (evt) => {
    this.populateSelect(evt.detail);
  });

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectBeerView:change', selectedIndex);
  });
};

SelectBeerView.prototype.populateSelect = function (beers) {
  beers.forEach((beer, index) => {
    const option = this.createBeerOption(beer, index);
    this.selectElement.appendChild(option);
  })
};

SelectBeerView.prototype.createBeerOption = function (beer, index) {
  const option = document.createElement('option');
  option.textContent = beer.name;
  option.value = index;
  return option;
};

module.exports = SelectBeerView;
