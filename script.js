const button = document.getElementById("drawButton");
const input = document.getElementById("userQuestion");
const container = document.querySelector(".cards");

button.addEventListener("click", () => {
  const question = input.value.trim();

  if (!question) {
    alert("Please enter a question for the cards!");
    return;
  }


  // https://youtu.be/zUcc4vW-jsI needed a little help so i refereced to this video :)

  fetch("https://tarotapi.dev/api/v1/cards/random?n=4")
    .then(res => res.json())
    .then(data => {
      const cards = data.cards;
      container.innerHTML = ""; 

      cards.forEach(card => {
        container.innerHTML += `
          <div class="card">
            <img src="${card.image}" alt="${card.name}" />
            <h2>${card.name}</h2>
            <p>${card.meaning_up}</p>
          </div>
        `;
      });
    })
    .catch(err => {
      container.innerHTML = "<p>Oops! Something went wrong.</p>";
      console.error(err);
    });
});


