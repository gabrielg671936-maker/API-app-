fetch("https://tarotapi.dev/api/v1/cards/random?n=10")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    // handle ten random cards
  })
  .catch(function (error) {
    // handle what went wrong
  });


  //make variable called cards and do cards=response
