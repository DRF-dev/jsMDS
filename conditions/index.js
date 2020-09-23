'use strict';
/**
 * Exercice n° 1
 */

var agePerson = Number(prompt("Entrez l'âge de la personne :"))

if (agePerson >= 0 && agePerson <= 17) {
  alert(`Vous ne pouvez pas entrez, vous avez ${agePerson} ans`)
} else if(agePerson > 17 && agePerson < 42) {
  alert(`Vous pouvez entrer vous avez ${agePerson} ans`)
} else if (agePerson >= 42) {
  alert(`Bienvenue nouveau patron âgé de ${agePerson} ans`)
} else {
  alert("Entrer une valeur de type 'number'")
}

/**
 * Exercice n°2
 */

var rand = Math.floor(Math.random() * 30)

if (rand >= 0 && rand <= 10) {
  alert("Cool !")
} else if (rand >= 11 && rand <= 20) {
  alert("Tepid")
} else if (rand >= 21 && rand <= 30) {
  alert("Warm")
} else {
  console.error("Erreur !")
}

/**
 * Exercice n° 3
 */

var date = new Date()
var arrayDay = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]
switch (date.getDay()) {
  case 0:
    alert(`Aujourd'hui nous somme le ${arrayDay[date.getDay()]}`)
    break;
  case 1:
    alert(`Aujourd'hui nous somme le ${arrayDay[date.getDay()]}`)
    break;
  case 2:
    alert(`Aujourd'hui nous somme le ${arrayDay[date.getDay()]}`)
    break;
  case 3:
    alert(`Aujourd'hui nous somme le ${arrayDay[date.getDay()]}`)
    break;
  case 4:
    alert(`Aujourd'hui nous somme le ${arrayDay[date.getDay()]}`)
    break;
  case 5:
    alert(`Aujourd'hui nous somme le ${arrayDay[date.getDay()]}`)
    break;
  case 6:
    alert(`Aujourd'hui nous somme le ${arrayDay[date.getDay()]}`)
    break;
  default:
    break;
}

/**
 * Exercice n°4
 */

var promptStory = Number(prompt("Il y'a 3 fin différentes laquelle voulez vous ?"))
var initStory = "Cette histoire possède 3 fin différentes, l'une d'elles est que 42 est"

switch (promptStory) {
  case 1:
    alert(`${initStory} un simple nombre.`)
    break;
  case 2:
    alert(`${initStory} un âge ni vieux ni jeune`)
    break;
  case 3:
    alert(`${initStory} la grande réponse sur la vie l'univers et le reste.`)
    break;
  default:
    alert("Vous n'avez pas selectionné un nombre entre 1 et 3")
    break;
}

/**
 * Exercice n°5
 */

//C'est impossible de faire un early return sans faire de fonction c'est donc une question piège

/**
 * Exercice n°6
 */

var isExist;
isExist? alert(42):alert('Cette variable n\'existe pas !')

/**
 * Exercice n°7
 */

var familyNumber = (Number(prompt("Entrez un nombre :"))).toString().split('')

switch (familyNumber.length) {
  case 1:
    alert(`${familyNumber.join("")} appartient à la famille des 0`)
    break;
  case 2:
    switch (Number(familyNumber[0])) {
      case 1:
        alert(`${familyNumber.join('')} appartient à la famille des 10`)
        break;
      case 2:
        alert(`${familyNumber.join('')} appartient à la famille des 20`)
        break;
      case 3:
        alert(`${familyNumber.join('')} appartient à la famille des 30`)
        break;
      case 4:
        alert(`${familyNumber.join('')} appartient à la famille des 40`)
        break;
      default:
        alert("Ce nombre contient bien 2 chiffres mais est supérieur à 50 !")
        break;
    }
    break;
  default:
    alert("Ceci n'est pas un nombre ou un nombre au dessus de 100")
    break;
}