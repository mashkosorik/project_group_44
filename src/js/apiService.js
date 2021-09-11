export default {
  //   query: 'css',
  //   page: 1,
  apiKey: `NTzEJU18J6UGDnl6dkdP6mMsSXTAlgpe`,
  //   type: 'GET',
  //   url:
  //     'https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=NTzEJU18J6UGDnl6dkdP6mMsSXTAlgpe',
  //   async: true,
  //   dataType: 'json',
  //   success: function (json) {
  //     console.log(json);
  //     // Parse the response.
  //     // Do other things.
  //   },
  //   error: function (xhr, status, err) {
  //     // This time, we do not end up here!
  //   },
  //   async toGetFeatch() {
  //     let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${this.apiKey}`;
  //     console.log(url);
  //     let response = await fetch(url);
  //     // let result = await page.json();
  //     // console.log(result);
  //     return response;
  //   },
  //   setPage() {
  //     this.page += 1;
  //     `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${this.apiKey}`;
  //   },
  //   resetPage() {
  //     this.page = 1;
  //   },
};
fetch(
  `https://app.ticketmaster.com/discovery/v2/events.json?apikey=NTzEJU18J6UGDnl6dkdP6mMsSXTAlgpe`,
)
  .then(response => {
    return response.json();
  })
  .then(event => {
    console.log(event._embedded.events);
  })
  .catch(error => {
    console.log(error);
  });
// GET /discovery/v2/events.json?apikey=NTzEJU18J6UGDnl6dkdP6mMsSXTAlgpe&size=1 HTTP/1.1
// Host: app.ticketmaster.com
// X-Target-URI: https://app.ticketmaster.com
// Connection: Keep-Alive
