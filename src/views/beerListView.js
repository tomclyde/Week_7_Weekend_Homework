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

BeerListView.prototype.createBeerListItem = function (beer) {
  //console.log(beer);
  const beerDetailView = new BeerView();
  const beerDetail = beerDetailView.createBeerDetail(beer);
  return beerDetail;
};

module.exports = BeerListView;
