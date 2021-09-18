import { refs } from "./refs";
import modalTemplate from '../templates/modalDesktop.hbs';
import { createMarkup } from "./main";
const axios = require('axios').default;


function onLoadMoreFromAuthor(evt) {
  refs.name = evt.target.closest('.modal__window').dataset.author;
 axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${refs.name}&apikey=MrDjiKw1cBGuG57562zYpO5puccpSyZ6`,
      )
   .then((resp) => {
      refs.list.innerHTML = '';

          createMarkup(resp);
      })
        .catch(console.log);
}



export function onOpenModal(evt) {
  if (evt.target.nodeName !== 'IMG') { return };
	@@ -28,15 +9,14 @@ export function onOpenModal(evt) {
    return item.id === itemId;
  });

  const { dates: { start, timezone }, name, info, images, url, priceRanges } = choosenItem;
  refs.modal.innerHTML = modalTemplate({ dates:{start, timezone},name,info,images,url, priceRanges });
  refs.modal.classList.remove('hidden');

  document.querySelector('.authorInfoBtn').addEventListener('click', onLoadMoreFromAuthor);
  refs.modal.addEventListener('click', onModalClose);
}

export function onModalClose(e) {
  if(e.target.classList.contains('modal__back-drop')||e.target.classList.contains('modal__close-btn-icon')||e.target.classList.contains('authorInfoBtn'))
 { e.target.closest('.modal__back-drop').classList.add('hidden')}
}
