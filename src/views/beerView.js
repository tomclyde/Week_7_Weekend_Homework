const BeerView = function () {

}

BeerView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  //beerDetail.classList.add('beer-detail');

  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerDetail.appendChild(name);
  return beerDetail;
};

BeerView.prototype.createExtraBeerDetail = function (beer) {
  console.log("in extra");
  const beerExtraDetail = document.createElement('div');
  //beerDetail.classList.add('beer-detail');

  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerExtraDetail.appendChild(name);


  const detailsList = document.createElement('ul');
  const tagline = this.createDetailListItem('Tagline', beer.tagline);
  detailsList.appendChild(tagline);

  const description = this.createDetailListItem('Description', beer.description)
  detailsList.appendChild(description);

  beerExtraDetail.appendChild(detailsList);
  return beerExtraDetail;

};

BeerView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = BeerView;
