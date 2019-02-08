const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.beers = [];
};

Beers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt)  => {
    const beerIndex = evt.detail;
    this.publishBeerDetails(beerIndex);
  })
};

Beers.prototype.getData = function () {
  console.log(this);
  const url = 'https://api.punkapi.com/v2/beers';
  const request = new Request(url);
     request.get()
       .then((activity) =>{
         this.beers = activity;
    PubSub.publish('Beers:beers-data-ready', this.beers);
  });
};


module.exports = Beers;
