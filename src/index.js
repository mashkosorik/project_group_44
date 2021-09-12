import modalTemplate from './templates/modalDesktop.hbs';
const axios = require('axios').default;

const refs = {
  searchInput: document.querySelector('.searchInput'),
  list: document.querySelector('.gallery'),
  modal: document.querySelector('.modal__back-drop'),
  // closeBtn: document.querySelector('.modal__close-btn'),
};
let dataArray = [];

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
      dataArray = [...dataArray, ...response.data._embedded.events];
      // console.log(dataArray);


      const eventList = dataArray.reduce((acc, elem) => {
        acc += `<li class="item" id="${elem.id}"><div><img width="180px" class="iconItem" src="${elem.images[6].url}"></div><div><p>${elem.name}</p><p>${elem.dates.start.localDate}</p><p>${elem.dates.timezone}</p></div></li>`;
        return acc;
      }, '');
      
      return (refs.list.innerHTML = eventList);
    })
    .catch(console.log);
}

function onOpenModal(evt) {
  if (evt.target.nodeName !== 'IMG') { return };

  const itemId = evt.target.closest('.item').id;
  const choosenItem = dataArray.find(item => { return item.id === itemId; });
  const { dates:{start, timezone},name,info } = choosenItem;
  refs.modal.innerHTML = modalTemplate({ dates:{start, timezone},name,info });
  refs.modal.classList.remove('hidden');
  console.log(choosenItem);
  refs.modal.addEventListener('click', onModalClose);
  
}

function onModalClose(e) {
  if(e.target.classList.contains('modal__back-drop')||e.target.classList.contains('modal__close-btn'))
 { e.target.closest('.modal__back-drop').classList.add('hidden')}
}

refs.searchInput.addEventListener('input', onEventSearch);
refs.list.addEventListener('click', onOpenModal);

