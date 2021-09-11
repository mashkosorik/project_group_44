// import './sass/main.scss';

import apiService from './js/apiService';
// import refs from './js/refs';
// import debounce from 'lodash.debounce';
// import event from './tamplates/event.hbs';

// // apiService.toGetFeatch();
// const btn = document.querySelector('.load-more');

// refs.search.addEventListener(
//   'input',
//   debounce(e => {
//     apiService.resetPage();
//     if (e.target.value.trim() === '') {
//       refs.gallery.innerHTML = '';
//       return;
//     }
//     apiService.query = e.target.value;
//     apiService.toGetFeatch().then(data => {
//       refs.gallery.innerHTML = event(data);
//       //   , removeClass(data);
//     });
//   }, 500),
// );

// refs.loadMoreBtn.addEventListener('click', () => {
//   apiService.setPage();
//   autoScroll();
//   apiService.toGetFeatch().then(data => {
//     refs.gallery.insertAdjacentHTML('beforeend', event(data)), removeClass(data);
//   });
// });

// function removeClass(data) {
//   console.log(data.length);
//   if (data.length > 11) {
//     btn.classList.remove('is-hidden');
//   } else {
//     btn.classList.add('is-hidden');
//   }
// }

// function autoScroll() {
//   let scrollHeight = Math.max(document.body.scrollHeight);
//   setTimeout(() => {
//     window.scrollTo({
//       top: scrollHeight,
//       behavior: 'smooth',
//     });
//   }, 500);
// }
