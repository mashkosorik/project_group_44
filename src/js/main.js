import { refs } from './refs';


export function createMarkup(response) {
        addDataToArr(response);
        const eventList = response.data._embedded.events.reduce((acc, elem) => {
          acc += `<li class="item" id="${elem.id}"><div><img loading="lazy" width="180px"  height="227px"class="iconItem" src="${elem.images[6].url}"></div><div><p>${elem.name}</p><p>${elem.dates.start.localDate}</p><p>${elem.dates.timezone}</p></div></li>`;
          return acc;
        }, '');
        return refs.list.insertAdjacentHTML('beforeend', eventList);
}

  
export function addDataToArr(response) {
      refs.dataArray = [...refs.dataArray, ...response.data._embedded.events];
}