const gradient = () => {
  displayWord()
  displayGradient()
}

const displayWord = () => {
  const getWord = [
    'Avocado Toast',
    'Cray',
    'Slay',
    'Gucci',
    'Squad Goals',
    'Finesse',
    'Turnt',
    'Snached',
    'Amazeballs',
    'Awks',
    'Devo',
    'Grill',
    'Povo',
    'LOL',
    'Baguette',
    'Sour Dough',
    'Dope',
    'My Bad',
    'Rack',
    'Shizzle',
    'Chillax',
    'Whatevs',
    'YOLO',
    'SWAG',
    'FOMO',
    'Cray Cray',
    'Awesomesauce',
    'Fan',
    'Bro'
  ]

  const hipsterWord = getWord[Math.floor(Math.random() * getWord.length)]
  document.querySelector('.hipsterName').textContent = hipsterWord
}

const randHex1 = () => {
  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16)
  return '#' + randomColor1
}

const randHex2 = () => {
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16)
  return '#' + randomColor2
}

const displayGradient = () => {
  const color1 = randHex1()
  const color2 = randHex2()
  document.querySelector('.color').textContent = 'HEX' + ' (' + color1 + ')' + ' → ' + '(' + color2 + ')'
  var gradient = 'linear-gradient(' + color1 + ', ' + color2 + ')'
  document.querySelector('body').style.background = gradient
}
