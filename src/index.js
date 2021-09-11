const axios = require('axios').default;

const refs = {
  searchInput: document.querySelector('.searchInput'),
  list: document.querySelector('.gallery'),
};

function onEventSearch(e) {
  let name = '';
  if (!refs.searchInput.value || refs.searchInput.value === ' ') {
    return;
  }
  name = refs.searchInput.value;
  axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${name}&apikey=MrDjiKw1cBGuG57562zYpO5puccpSyZ6`,
    )
    .then(function (response) {
      const eventList = response.data._embedded.events.reduce((acc, elem) => {
        acc += `<li class="item"><div><img width="180px" class="iconItem" src="${elem.images[6].url}"></div><div><p>${elem.name}</p><p>${elem.dates.start.localDate}</p><p>${elem.dates.timezone}</p></div></li>`;
        return acc;
      }, '');
      return (refs.list.innerHTML = eventList);
    })
    .catch(console.log);
}

refs.searchInput.addEventListener('input', onEventSearch);
