console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => data.message.forEach(slap))

  function slap(data){
    const div = document.querySelector("div#dog-image-container")
    const ul = document.createElement("ul")
    ul.innerHTML += `<li><img src="${data}"/></li>`
    div.appendChild(ul)
  }


fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  // .then(data => console.log(data.message))
  .then(data => Object.keys(data.message).forEach(function(key) {
    // console.log(key, data.message[key]);

      const ulList = document.querySelector("ul#dog-breeds")
      ulList.innerHTML += `<li class="dog">${key} - ${data.message[key]}</li>`
      const li = document.querySelector("ul#dog-breeds").querySelector("li")
      ulList.addEventListener("click", event => {
        // debugger
        // event.target.innerHTML.includes(" - ")
        if (event.target.className === "dog") {
            event.target.style.backgroundColor = "pink"
          }

        })
  }))
