const BeerView = function () {

}

BeerView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  //beerDetail.classList.add('beer-detail');

  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerDetail.appendChild(name);
  return beerDetail;

  // const detailsList = document.createElement('ul');
  // const meaning = this.createDetailListItem('Meaning', beer.meaning);
  // detailsList.appendChild(meaning);
  //
  // const height = this.createDetailListItem('Height', beer.height)
  // detailsList.appendChild(height);
  //
  // beerDetail.appendChild(detailsList);
  // return beerDetail;
};

// BeerView.prototype.createDetailListItem = function (label, property) {
//   const element = document.createElement('li');
//   element.textContent = `${label}: ${property}`;
//   return element;
// };

module.exports = BeerView;
