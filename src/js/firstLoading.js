import axios from "axios";
import { createMarkup } from "./main";
import { refs } from "./refs";


export function firstLoadding() {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?&page=${refs.page}&apikey=MrDjiKw1cBGuG57562zYpO5puccpSyZ6`,
      )
      .then((resp) => {
          createMarkup(resp);

            const observer = new IntersectionObserver(intsElem => {
                intsElem.forEach(element => {
                    if (element.isIntersecting) {
                        refs.page += 1;
                        firstLoadding();
                    }
                })
            }, refs.scrollOptions);

            const lastItem = document.querySelectorAll('.item')[document.querySelectorAll('.item').length - 1];
            observer.observe(lastItem);
      })
        .catch(console.log);
}