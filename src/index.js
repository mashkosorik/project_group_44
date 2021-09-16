import "./js/main.js";
import  countryList from './js/countryList.json';
import { addDataToArr, createMarkup } from './js/main.js';
import { refs } from './js/refs';
import { onModalClose, onOpenModal } from './js/modal';
const axios = require('axios').default;
const _ = require('lodash');

addDataToArr;
onOpenModal;
onModalClose;

addCountryToSelect();
function addCountryToSelect() {
  const countriesListArr = Object.entries(countryList).reduce((acc, item) => {
    return acc += `<option class="countryOption"  value="${item[0]}"> ${item[1]}</option>`;
  }, "");
  return refs.countrySearch.innerHTML = countriesListArr;
}


const onSearch = _.debounce((e) => {
  refs.list.innerHTML = '';
  if ((!refs.searchInput.value || refs.searchInput.value === ' ') && refs.countrySearch.value === 'Choose country') { return }

    refs.name = refs.searchInput.value.trim();
  
  request();
  function request() {

    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${refs.name}&page=${refs.page}&countryCode=${refs.countrySearch.value}&apikey=MrDjiKw1cBGuG57562zYpO5puccpSyZ6`,
    )

      .then(createMarkup )
      .catch(console.log);
  }
}, 600);



refs.searchInput.addEventListener('input', onSearch);
refs.countrySearch.addEventListener('change', onSearch);
refs.list.addEventListener('click', onOpenModal);



        
        // document.querySelectorAll('.iconItem')[document.querySelectorAll('.iconItem').length - 1].addEventListener('load', () => {
        //   page += 1;
        //   if (response.data._embedded.events.length < 20) { return }
        //   request();
        // }, {once: true})  



