const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beerView.js');

const BeerListView = function (container) {
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-data-ready', (evt) => {
    this.clearList();
    this.renderBeerView(evt.detail);
  });

  PubSub.subscribe('Beer:beer-info-ready', (evt) => {
    this.clearList();
    this.renderDetailedBeerView(evt.detail);
  });
};

BeerListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

BeerListView.prototype.renderBeerView = function (beers) {
  beers.forEach((beer) => {
    const beerItem = this.createBeerListItem(beer);
    this.container.appendChild(beerItem);
  });
};

BeerListView.prototype.renderDetailedBeerView = function (beer) {
    const beerItem = this.createBeerDetailedItem(beer);
    this.container.appendChild(beerItem);
};

BeerListView.prototype.createBeerListItem = function (beer) {
  const beerDetailView = new BeerView();
  const beerDetail = beerDetailView.createBeerDetail(beer);
  return beerDetail;
};

BeerListView.prototype.createBeerDetailedItem = function (beer) {
  const beerExtraDetailView = new BeerView();
  const beerExtraDetail = beerExtraDetailView.createExtraBeerDetail(beer);
  return beerExtraDetail;
};

module.exports = BeerListView;
