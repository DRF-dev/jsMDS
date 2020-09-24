"use strict";

/**
 * Exercice n°1
 */

var arrayTable = [1,2,3,4,5,8]
for (var i = 0; i < arrayTable.length; i++) {
  console.log(`table de ${arrayTable[i]}`)
  for (var j = 1; j <= 10; j++) {
    console.log(`${arrayTable[i]} * ${j} = ${arrayTable[i]*j}`)
  }
}
 
/**
 * Exercice n°2
 */

var body = document.getElementsByTagName('body')[0]
var list = document.createElement('ul')
for (var i = 1; i <= 10; i++) {
  var operation = document.createElement('li')
  operation.textContent = `5 * ${i} = ${5*i}`
  list.appendChild(operation)
}
body.appendChild(list)

/**
 * Exercice n°3
 */

var increment = 0;
while (true) {
  increment++
  console.log("5 + " + increment + " = " + 5*increment)
  if(increment >= 10) break
}

/**
 * Exercice n°4
 */

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(operation => console.log("5 * " + operation + " = " + 5*operation))

/**
 * Exercice n°5
 */

var objetEx5 = {
  'name': '42',
  'age': '42',
}
var res = 0;

for (const key in objetEx5) {
  res === 0? res = Number(objetEx5[key]) : res *= Number(objetEx5[key])
}
console.log(res)

/**
 * Exercice n°6
 */

var nbr = [5, 4, 3, 2, 1]
for (var i = 0; i < nbr.length; i++) {
  for (var j = 0; j < nbr.length - 1; j++) {
    if(nbr[j] > nbr[j+1]) {
      var temp = nbr[j]
      nbr[j] = nbr[j+1]
      nbr[j+1] = temp
    }
  }
}
console.log(nbr)

/**
 * Exercice n°7
 */

var cloth = {
  "tShirt": {},
  "pullOver": {},
  "sweetShirt": {}
}
var parentCloth = {
  'nameCloth': ["tShirt", "pullOver", "sweetShirt"],
  'size': ["XS", "S", "L", "M", "XL", "XXL"],
  'price': [49.99, 99.99, 149.99],
  'tva': [20]
} 

for (const key in parentCloth['nameCloth']) {
  var size = parentCloth['size'][Math.floor(Math.random() * 6)]
  var price = parentCloth['price'][Math.floor(Math.random() * 3)]
  var tva = price * (parentCloth['tva'][0]/100)
  var newCloth = {
    'nameCloth': parentCloth['nameCloth'][key],
    'size': parentCloth['size'][4],
    'price': price - tva,
    'tva': tva
  }
  cloth[parentCloth['nameCloth'][key]] = newCloth
}
console.log(cloth)

/**
 * Exercice n°8
 */

var input = document.getElementsByTagName('input')[0]
var date = new Date()
var year = date.getFullYear()

var select = document.createElement("select")
select.name = "year"
for (let i = 1980; i <= year; i++) {
  var option = document.createElement("option")
  option.value = i
  option.textContent = i
  select.appendChild(option)
}
body.appendChild(select)