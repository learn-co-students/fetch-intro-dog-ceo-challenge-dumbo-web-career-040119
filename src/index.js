const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
  getDogs();
  getBreeds();
  document.getElementById('breed-dropdown').addEventListener("change", filterBreeds)
})

function getDogs() {
  fetch(imgUrl)
  .then(response => response.json())
  .then(json => {
    json.message.forEach(imageUrl => {
      let dogImage = document.createElement("img");
      dogImage.src = imageUrl;

      let dogImageContainer = document.getElementById('dog-image-container');
      dogImageContainer.appendChild(dogImage);
    })
  })
}

function getBreeds() {
  fetch(breedUrl)
  .then(response => response.json())
  .then(json => {
    let keys = Object.keys(json.message);
    keys.forEach(breedName => {
      const breedList = document.getElementById("dog-breeds");
      let breedLi = document.createElement("li");
      breedLi.innerText = breedName;
      breedList.appendChild(breedLi);
      breedLi.addEventListener("click", changeColor);
    })
  })
}

function changeColor(event) {
  event.target.style.color = "red";
}

function filterBreeds(event) {
  let letterSelected = event.target.value;
  const allBreeds = document.querySelectorAll('#dog-breeds li');

  for (breed of allBreeds) {
    if (breed.innerText[0] === letterSelected) {
      breed.style.display = "";
    } else {
      breed.style.display = "none";
    }
  }
}
