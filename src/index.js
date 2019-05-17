console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
  fetchImages()
  fetchBreeds()

  document.getElementById('breed-dropdown').addEventListener("change", filterByLetter)

});

//CHALLENGE ONE
fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  // fetch images
  fetch(imgUrl)
  // parse response
  .then(response => response.json())
  // send data (array of image urls) to addToDom function
  .then(object => addToDom(object.message))
}

// add images to the dom
function addToDom(dogs) {
  const dogContainer = document.getElementById('dog-image-container')
  // iterate over dog urls array and create img node for each
  dogs.forEach(function(dog) {
    newDog = document.createElement('img')
    newDog.src = dog
    // add each new img node to the dom
    //dogContainer.appendChild(newDog)
  });
}


//CHALLENGE TWO
function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  // fetch breeds
  fetch(breedUrl)
  // parse response
  .then(response => response.json())
  // send data (obj of breeds) to listBreeds function
  .then(object => listBreeds(object.message))
});

function listBreeds(dogsObject) {
  // find keys of breeds object
  breedsObj = Object.keys(dogsObject)
  // iterate over each breed and create new li
  breedsObj.forEach(function (breed) {
    const dogUl = document.getElementById('dog-breeds')
    newDog = document.createElement('li')
    newDog.innerText = breed
    // on click, change color
    newDog.addEventListener("click", changeColor)
    // add to ul on dom
    dogUl.appendChild(newDog)
  })
}

//CHALLENGE THREE
function changeColor(event) {
  event.target.style.color = "darkviolet"
}


//CHALLENGE FOUR
function filterByLetter (event) {
  // get letter selected by user
  letterSelection = event.target.value
  // find all li breeds
  const allBreeds = document.querySelectorAll('#dog-breeds li')
  // iterate over each breed li and check if first letter matches selection - if not, hide from list
  for (breed of allBreeds) {
    if (breed.innerText[0] === letterSelection) {
      breed.style.display = ""
    } else {
      breed.style.display = "none"
    }
  }
}
