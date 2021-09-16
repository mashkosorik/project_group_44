import { refs } from "./refs";
import modalTemplate from '../templates/modalDesktop.hbs';

export function onOpenModal(evt) {
  if (evt.target.nodeName !== 'IMG') { return };

  const itemId = evt.target.closest('.item').id;
  const choosenItem = refs.dataArray.find(item => {
    return item.id === itemId;
  });

  const { dates: { start, timezone }, name, info, images,url, priceRanges } = choosenItem;
  refs.modal.innerHTML = modalTemplate({ dates:{start, timezone},name,info,images,url, priceRanges });
  refs.modal.classList.remove('hidden');

  refs.modal.addEventListener('click', onModalClose);
}

export function onModalClose(e) {
  if(e.target.classList.contains('modal__back-drop')||e.target.classList.contains('modal__close-btn-icon'))
 { e.target.closest('.modal__back-drop').classList.add('hidden')}
}