const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", function(){
  getDogs()
  getBreeds()
  const breedDropdown = document.getElementById('breed-dropdown')
  breedDropdown.addEventListener('change', filterBreeds)
})

function getDogs(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(json => {
    json.message.forEach(url => {
      const dogImg = document.createElement('img')
      dogImg.src = url
      const dogImageContainer = document.getElementById('dog-image-container')
      dogImageContainer.appendChild(dogImg)
    })
  })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getBreeds(){
  fetch(breedUrl)
  .then(res => res.json())
  .then(json => {
    Object.keys(json.message).forEach(breedName => {
      const dogBreeds = document.getElementById('dog-breeds')
      const breedLi = document.createElement('li')

      breedLi.innerText = breedName
      dogBreeds.appendChild(breedLi)
      breedLi.addEventListener('click', event => {
        event.target.style.color = 'red'
      })
    })
  })
}

function filterBreeds(event){
  const selection = event.target.value
  const allBreeds = document.querySelectorAll('#dog-breeds li')

  for(breed of allBreeds) {
    if (breed.innerText[0] === selection) {
      breed.style.display = ''
    } else {
      breed.style.display = "none"
    }
  }
}
