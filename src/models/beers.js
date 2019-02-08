const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.beers = [];
};

Beers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectBeerView:change', (evt)  => {
    const beerIndex = evt.detail;
    this.publishBeerDetails(beerIndex);
  })
};

Beers.prototype.getData = function () {
  const url = 'https://api.punkapi.com/v2/beers';
  const request = new Request(url);
     request.get()
       .then((activity) =>{
         this.beers = activity;
    PubSub.publish('Beers:beers-data-ready', this.beers);
  });
};

Beers.prototype.publishBeerDetails = function (beerIndex) {
  const beerSelected = this.beerDetails(beerIndex);
  console.log(beerSelected);
  PubSub.publish('Beer:beer-info-ready', beerSelected);
};

Beers.prototype.beerDetails = function (beerIndex) {
  const selectedBeer = this.beers[beerIndex];
  return selectedBeer;
};


module.exports = Beers;
