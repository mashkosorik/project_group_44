export const refs = {
  searchInput: document.querySelector('.searchInput'),
  countrySearch: document.querySelector('.countrySearch'),
  list: document.querySelector('.gallery'),
  modal: document.querySelector('.modal__back-drop'),
    dataArray: [],
    page: 0,
  name: '',
  scrollOptions: {
                root: null,
                rootMargin: "0px 0px -110px 0px",
                threshold: 1,
    }
};