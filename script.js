const button = document.getElementById("drawButton");
const input = document.getElementById("userQuestion");
const container = document.querySelector(".cards");

const imageMap = {
  "The Fool": "images/the-fool.jpg",
  "The Magician": "images/the-magician.png",
  "The Empress": "images/the-empress.png",
  "The Emperor": "images/the-emperor.png",
  "The Hierophant": "images/the-hierophant.png",
  "The Priestess": "images/the-high priestess.png",
  "The Strength": "images/the-strength.png",
  "The Hermit": "images/the-hermit.png",
  "The Wheel of Fortune": "images/the-wheel.png",
};

button.addEventListener("click", () => {
  const question = input.value.trim();

  if (!question) {
    alert("Please enter a question for the cards!");
    return;
  }

  fetch("https://tarotapi.dev/api/v1/cards/random?n=4")
    .then(res => res.json())
    .then(data => {
      const cards = data.cards;
      container.innerHTML = "";

      cards.forEach(card => {
        container.innerHTML += `
          <div class="card">
            <img src="${imageMap[card.name] || 'images/default.png'}" alt="${card.name}" />
            <h2>${card.name}</h2>
            <p>${card.meaning_up}</p>
          </div>
        `;
      });
    })
    .catch(err => {
      container.innerHTML = "<p>Something went wrong.</p>";
      console.error(err);
    });
});
