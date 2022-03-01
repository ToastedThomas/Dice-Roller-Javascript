const diceButtons = [document.getElementById('d6'), 
document.getElementById('d2'), ]
const availableDice = ['d6', 'd2']
const rollDiceButton = document.getElementById('diceRoll');
const reRollButton = document.getElementById('reRollButton');
const homeButton = document.getElementById('menuButton');
var diceType;
var rolls = [];

diceButtons.forEach((element, index) => {
element.onclick = function() { 
    diceButtons.forEach((element) => {
      element.style.backgroundColor = "#394a50";
    })
    diceButtons[index].style.backgroundColor = "#819796";
    diceSelect(index);
  };
})
rollDiceButton.onclick = function() {
  hideMenu();
  clearTable();
  rollTheDice();
}
reRollButton.onclick = function() { rollDiceButton.click(); }
homeButton.onclick = function() { 
  clearTable();
  document.getElementById('afterRollMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'flex';
  document.getElementById('diceTable').style.display = 'none';
}
function diceSelect(index) {
  document.getElementById('selectedDice').innerHTML = availableDice[index];
  diceType = availableDice[index]
}
function hideMenu() {
  document.getElementById('afterRollMenu').style.display = 'block';
  document.getElementById('mainMenu').style.display = 'none';
  document.getElementById('diceTable').style.display = 'flex';
}
function rollTheDice() {
  var numOfDice = document.getElementsByTagName("input")[0].value;
  for (var i = 0; i < numOfDice; i++) {
    var img = document.createElement('img');
    var div = document.createElement('div');
    img.src = 'images/d6_4.png';
    img.classList.add('diceOnTable');
    img.setAttribute('id', i)
    div.classList.add('diceOnTableHold');
    div.appendChild(img);
    document.getElementById('diceTable').appendChild(div);
    rolls[i] = i;
    console.log(div)
  }
  rolls.forEach((element, index) => {
    element = randomNum();
    console.log(element);
    document.getElementById(index).src = 'images/'+diceType+'_'+element+'.png';
  })
}
function clearTable() {
  rolls = [0];
  diceToDelete = document.querySelectorAll('.diceOnTableHold');
  diceToDelete.forEach(element => {
    document.getElementById('diceTable').removeChild(element);
  })
}
function randomNum() {
  if (diceType == 'd6') {
    return (Math.floor(Math.random() * 6) + 1);
  } else if (diceType == 'd2') {
    return (Math.floor(Math.random() * 2) + 1);
  }
}