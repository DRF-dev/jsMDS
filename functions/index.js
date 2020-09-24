"use script";

/**
 * Question n°1
 * myPutStr return the string sentence or "et pourquoi pas 42"
 * @param {any} param : a parameter type String or Number
 */
function myPutStr(param) {
  if (typeof param === "number") {
    return `${param} et pourquoi pas 42`
  }
  return param
}

//console.log(myPutStr("Hello world !"))

/**
 * Question n°2
 * @param {Number} heigth : is a heigth to calculate a surface
 * @param {Number} width : is a width to calculate a surface
 */
function computeSurfaceM2(heigth, width) {
  if (typeof heigth !== "number" || typeof width !== "number") {
    return "L'un des paramètres n'est pas de type 'number'"
  }
  return `${heigth * width}m2`
}

//console.log(computeSurfaceM2(14, 32))

/**
 * Question n°3
 * createMyButton create a form and a submit button
 */
function createMyButton() {
  var form = document.createElement('form')
  var button = document.createElement('button')
  button.textContent = "Déclencher un prompt"
  button.type = "submit"
  form.appendChild(button)
  document.body.appendChild(form)
  return form
}

/**
 * detectMyAgeByNigth return an answer to a prompt request
 */
function detectMyAgeByNigth() {
  var ageByNigth = Number(prompt("Ecrivez ici votre âge"))
  if (ageByNigth > 0 && ageByNigth <= 17) {
    return alert(`Vous ne pouvez pas entrez, vous avez ${ageByNigth} ans`)
  } 
  if(ageByNigth > 17 && ageByNigth < 42) {
    return alert(`Vous pouvez entrer vous avez ${ageByNigth} ans`)
  } 
  if (ageByNigth >= 42) {
    return alert(`Bienvenue nouveau patron âgé de ${ageByNigth} ans`)
  }
  alert("Paramètre incorrect !")
  return detectMyAgeByNigth()
}

var form = createMyButton()
form.addEventListener('submit', () => detectMyAgeByNigth())

/**
 * Question n°4
 * matrixGenerator return a matrix
 * @param {Number[][]} matrix : A 2 dimension's array
 */
function matrixGenerator(matrix) {
  var table = document.createElement('table')
  table.style.borderCollapse = "collapse"
  for (let i = 0; i < matrix.length; i++) {
    var line = document.createElement('tr')
    line.style.border = "1px solid black"
    for (let j = 0; j < matrix[i].length; j++) {
      var column = document.createElement('th')
      column.textContent = matrix[i][j]
      column.style.border = "1px solid black"
      line.appendChild(column)
    }
    table.appendChild(line)
  }
  document.body.appendChild(table)
}
matrixGenerator([[0,0,1],[1,1,1],[0,0,0]])

/**
 * Question n°5
 * currentTime return the current time
 */
function currentTime() {
  var date = new Date()
  var currentDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`  
  return currentDate
}

/**
 * showCurrentTime will add the watch to our html file
 */
function showCurrentTime() {
  var span = document.createElement('span')
  span.textContent = currentTime()
  document.body.appendChild(span)
  setInterval(function() {
    span.textContent = currentTime()
  }, 1000)
}
showCurrentTime()

/**
 * Question n°6
 * finobacciSuite is a function who will return the result of the addition the 2 previous generation 
 * @param {Number} number : number is the generation of the finobacci suite who we want
 */
function finobacciSuite(number) {
  if(typeof number !== 'number') return 'Il ne s\'agit pas d\'un nombre'
  if(number < 2) return number
  return finobacciSuite(number-1) + finobacciSuite(number-2)
}
console.log(finobacciSuite(14))
