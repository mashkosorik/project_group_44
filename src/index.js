import './sass/main'
import "./js/main.js";


import  countryList from './js/countryList.json';
import { addDataToArr, createMarkup } from './js/main.js';
import { refs } from './js/refs';
import { onModalClose, onOpenModal } from './js/modal';
import { property } from "lodash";
import { firstLoadding } from "./js/firstLoading.js";

const axios = require('axios').default;
const _ = require('lodash');


firstLoadding();
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

  refs.name = refs.searchInput.value.trim();
  let countryCode = `&countryCode=${refs.countrySearch.value}`;
  
  if(refs.searchInput.value && refs.countrySearch.value === 'TITLE'){ countryCode = ''; }
  
  request();
  function request() {

    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${refs.name}&page=${refs.page}${countryCode}&apikey=${refs.apiKey}`,
      )
      .then((resp) => {
        createMarkup(resp);

        const observer = new IntersectionObserver(intsElem => {
              intsElem.forEach(element => {
                  if (element.isIntersecting) {
                      refs.page += 1;
                      request();
                  }
              })
        }, refs.scrollOptions);

            const lastItem = document.querySelectorAll('.item')[document.querySelectorAll('.item').length - 1];
            observer.observe(lastItem);
      })
      .catch(console.log);
  }
}, 600);


refs.searchInput.addEventListener('input', onSearch);
refs.countrySearch.addEventListener('change', onSearch);
refs.list.addEventListener('click', onOpenModal);


