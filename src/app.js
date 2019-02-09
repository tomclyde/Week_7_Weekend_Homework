const SelectBeerView = require('./views/selectBeerView.js');
const ResetButtonView = require('./views/resetButtonView.js');
const BeerListView = require('./views/beerListView.js');
const BeerView = require('./views/beerview.js');
const Beers = require('./models/beers.js');

document.addEventListener('DOMContentLoaded', () => {
  const beerSelect = document.querySelector('#beer-select')
  const selectBeerView = new SelectBeerView(beerSelect);
  selectBeerView.bindEvents();

  const resetButton = document.querySelector('#reset-button')
  const resetButtonView = new ResetButtonView(resetButton);
  resetButtonView.bindEvents();

  const beerContainer = document.querySelector('#beer-container');
  const beerListView = new BeerListView(beerContainer);
  beerListView.bindEvents();

  const beers = new Beers;
  beers.bindEvents();
  beers.getData();

});
