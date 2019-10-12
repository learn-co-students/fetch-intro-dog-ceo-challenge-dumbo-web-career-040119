console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function(){
    //console.log('hello');
    let choices = document.getElementById('breed-dropdown');
    generateAlphabet(choices); 
    getDogs();
    choices.addEventListener('change',function(e){
        //console.log(e.target.value);
        clearDogBreeds()
        getDogBreeds(e.target.value);
    })   
})

function generateAlphabet(choices){
    //generate choices element for each alphabet
    alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
    alphabetArray.forEach(function(letter){
        let option = document.createElement('option');
        option.value = letter;
        option.innerText = letter;
        choices.appendChild(option);
    })
   
}

function clearDogBreeds(){
    //clears existing dog breeds every change in choice
    let dogBreeds = document.getElementById('dog-breeds');
    //console.log(dogBreeds.firstChild);
    while(dogBreeds.firstChild){
        dogBreeds.removeChild(dogBreeds.firstChild);
    }
    
    
}

function getDogs(){
    //fetch random dogs
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => {
        let dogContainer = document.getElementById('dog-image-container');
         //console.log(data.message);
        for(let i = 0; i < data.message.length; i++){
            let img = document.createElement('img');
            img.src = data.message[i];
            dogContainer.appendChild(img);
        }
    })
}

function getDogBreeds(breed){
    //get breeds by selected first letter
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => {
         let dogBreeds = document.getElementById('dog-breeds');
        //console.log(data.message.length);
        let dataArray = data.message
        console.log(data.message)
        //organizes data.message by key: values format
        let newData = Object.keys(dataArray).map(function(key){
            debugger
            return `${key} : ${dataArray[key]}`;
        });

        for(let i= 0; i< newData.length; i++){
            //splits new data information. compares first letter of each breed and compares with the selected option letter
            if (newData[i].split("")[0] === breed){
                let li = document.createElement('li');
                li.innerText = newData[i];
                li.addEventListener('click',function(e){
                    e.target.style.color = 'red';
                }); 
                dogBreeds.appendChild(li);
            }
            
           

        }
    })
}