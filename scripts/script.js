'use strict';


// declare variables
const inputForm = document.querySelector("form");
const userMass = document.getElementById("mass");
const planetName =document.getElementById("planet");
const eMessage =document.getElementById("errorMessage");
const displayPlanet =document.getElementById("displayPlanet");
const displayInfo =document.getElementById("displayInfo");

//functions

//1

const submitHandle = function(e){
  e.preventDefault();
  if(mass.value === '' || mass.value === null){
    errorMessage('Enter the Mass of object in kg')
  }
  else if(planetName.value === 'unknown' || planetName.value === null){
    errorMessage('Choose the planet')
    displayPlanet.innerHTML=`<img src="./assests/images/unknown.png" alt="">`;
  displayInfo.style.display="none";

  }
  else if(mass.value <= 0){
    errorMessage('Mass should be positive and above 0')
  }
  else{
    eMessage.style.display="none";
    displayOutput(mass.value,planetName.value)
  } 
}

//2
const errorMessage= function(message){
  eMessage.style.display="block";
  eMessage.style.alignItems= "center";
  console.log(message)
  eMessage.innerHTML=`<h3 style="text-align:center">${message} </h3>`
  setTimeout(() => {
    eMessage.style.display="none";
  }, 5000);
}

//3
const displayOutput = function(mass,planet){
  
  let massCalculated = 0
  if(planet === 'earth'){
    massCalculated = mass * 1
  }
  else if(planet === 'jupiter'){
    massCalculated = mass * 2.34
  }
  else if(planet === 'mars'){
    massCalculated = mass * 0.38
  }
  else if(planet === 'mercury'){
    massCalculated = mass * 0.38
  }
  else if(planet === 'moon'){
    massCalculated = mass * 0.166
  }
  else if(planet === 'neptune'){
    massCalculated = mass * 1.19
  }
  else if(planet === 'pluto'){
    massCalculated = mass * 0.06
  }
  else if(planet === 'saturn'){
    massCalculated = mass * 1.06
  }
  else if(planet === 'uranus'){
    massCalculated = mass * 0.92
  }
  else if(planet === 'venus'){
    massCalculated = mass * 0.91
  }
  let result = massCalculated.toFixed(2)

  displayPlanet.style.display="flex";
  displayPlanet.innerHTML=`<img src="./assests/images/${planet}.png" alt="">`;
  displayInfo.style.display="flex";
  displayInfo.innerHTML=`<h2>The weight of an object on <p style="font-weight:900; text-transform: uppercase;" >${planet}</p></h2><span><h1>${result}kg</h1></span>`
}


//add event listeners
// 1
inputForm.addEventListener("submit", submitHandle);