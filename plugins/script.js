//adds event listeners to buttons
let submitButton = document.getElementById("submit-button")
submitButton.addEventListener("click", processResults)

let resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetQuiz)

let resultArea = document.getElementById("result")


//intento
var sonador = document.createElement('img');
sonador.src = 'imagenes/rock-100.jpg';

//process results
function processResults() {
  let personalityResult = getPersonality();
  console.log(personalityResult)

  resultArea.innerHTML = "Eres un Ilustrador " + personalityResult

  function getPersonality() {
    let musicaChoice = document.querySelector('input[name="musica"]:checked');
    // console.log(musicaChoice.id)
    let imagenChoice = document.querySelector('input[name="imagen"]:checked');
    // console.log(imagenChoice.id)
    let mascotaChoice = document.querySelector('input[name="mascota"]:checked');
    // console.log(mascotaChoice.id)
	let frutaChoice = document.querySelector('input[name="fruta"]:checked');
    // console.log(frutaChoice.id) 
	let colorChoice = document.querySelector('input[name="color"]:checked');
    // console.log(colorChoice.id)   
    let totalPoints = 0; // 1
    totalPoints = totalPoints + musicaPoints[musicaChoice.id]
    totalPoints = totalPoints + imagenPoints[imagenChoice.id]
    totalPoints = totalPoints + mascotaPoints[mascotaChoice.id]
	totalPoints = totalPoints + frutaPoints[frutaChoice.id]
	totalPoints = totalPoints + colorPoints[colorPoints.id]
    console.log(totalPoints)

    musicaChoice.checked = false;
    imagenChoice.checked = false;
    mascotaChoice.checked = false;
	frutaChoice.checked = false;
	colorChoice.checked = false;

    if (totalPoints <= 3) {
      return "sonador"
    } else if (totalPoints <= 6) {
      return "Profundo"
    
    } else {
      return "Rebelde"
    }
  }

}

//resets display on page
function resetQuiz() {
  resultArea.innerHTML = ""

}

//point system
let musicaPoints = {
     rock: 2,
     pop: 0,
     baladas: 0,
     kpop: 0,
}

let imagenPoints = {
     a: 0,
     b: 1,
     c: 1,
     d: 1,
}

let mascotaPoints = {
  toby: 2,
  luna: 1,
  ginger: 0,
  oso: 2,
}

let frutaPoints = {
  manzana: 2,
  fresa: 1,
  platano: 0,
  uva: 2,
}

let colorPoints = {
	rubio: 0,
	azul: 1,
	blanco: 0,
	ninguno: 1,
}
