import { refs } from './refs';
// import { lastItemObserve } from './scroll';


export function createMarkup(response) {

        addDataToArr(response);
  const eventList = response.data._embedded.events.reduce((acc, elem) => {
          acc += `<li class="item" id="${elem.id}"><div class="card animate__animated animate__backInLeft"><div class="card-svg"><img loading="lazy" width="180px" height="227px"class="card-foto" src="${elem.images[6].url}"></div></div><div class="info"><p class="team">${elem.name}</p><p class="start-date">${elem.dates.start.localDate}</p><div class="icon-place"><p class="place">${elem.dates.timezone}</p></div></div></li>`;
          return acc;
        }, '');
        refs.list.insertAdjacentHTML('beforeend', eventList);

        
}

  
export function addDataToArr(resp) {
     return refs.dataArray = [...refs.dataArray, ...resp.data._embedded.events];
}


