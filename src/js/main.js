import { refs } from './refs';
import Notiflix from "notiflix";


export function createMarkup(response) {

  addDataToArr(response);
        console.log(response);
                Notiflix.Loading.arrows();
  const eventList = response.data._embedded.events.reduce((acc, elem) => {
          acc += `<li class="item scale-up-center" id="${elem.id}">
                        <div class="card animate__animated animate__backInLeft">
                                <div class="card-svg">
                                        <img loading="lazy" width="180px" height="227px"class="card-foto" src="${elem.images[6].url}">
                                </div>
                        </div>
                        <div class="info">
                                <p class="team">${elem.name}</p>
                                <p class="start-date">${elem.dates.start.localDate}</p>
                                <div class="icon-place">
                                        <p class="place">
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 22 32">
                                                        <path fill="#fff" d="M11.2 0c-6.176 0-11.2 4.99-11.2 11.123 0 7.709 11.211 20.877 11.211 20.877s11.189-13.547 11.189-20.877c0-6.133-5.024-11.123-11.2-11.123zM14.579 14.38c-0.932 0.925-2.155 1.388-3.379 1.388s-2.448-0.463-3.379-1.388c-1.863-1.85-1.863-4.861 0-6.712 0.902-0.896 2.103-1.39 3.379-1.39s2.477 0.494 3.379 1.39c1.863 1.851 1.863 4.862 0 6.712z"></path>
                                                </svg>
                                                ${elem.dates.timezone}
                                        </p>
                                </div>
                        </div>
                  </li>`;
          return acc;
        }, '');
        refs.list.insertAdjacentHTML('beforeend', eventList);
        Notiflix.Loading.remove(600);
}

  
export function addDataToArr(resp) {
     return refs.dataArray = [...refs.dataArray, ...resp.data._embedded.events];
}


