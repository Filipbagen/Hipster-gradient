const gradient = () => {
  changeName()
  changeGradient()
}

const changeName = () => {
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

  const randomWord = getWord[Math.floor(Math.random() * getWord.length)]

  document.querySelector('.hipsterName').innerHTML = randomWord
}

const changeGradient = () => {
  const red1 = Math.round(Math.random() * 255)
  const red2 = Math.round(Math.random() * 255)
  const green1 = Math.round(Math.random() * 255)
  const green2 = Math.round(Math.random() * 255)
  const blue1 = Math.round(Math.random() * 255)
  const blue2 = Math.round(Math.random() * 255)

  const gradient = 'linear-gradient(rgb(' + red1 + ',' + green1 + ',' + blue1 + '), rgb(' + red2 + ',' + green2 + ',' + blue2 + '))'

  document.querySelector('body').style.background = gradient
  document.querySelector('.color').innerHTML = gradient
}
