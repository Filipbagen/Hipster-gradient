const randWords = () => {
  displayWord()
  getColor1()
  displayGradient()
  test()
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
    'Fan'
  ]

  const hipsterWord = getWord[Math.floor(Math.random() * getWord.length)]
  document.querySelector('.hipsterName').textContent = hipsterWord
}

const randNum = () => {
  return Math.floor(Math.random() * 256)
}



const getColor1 = () => {
  const r = randNum()
  const g = randNum()
  const b = randNum()

  const color1 = r + ', ' + g + ', ' + b
  return color1
}


const getColor2 = () => {
  const r = randNum()
  const g = randNum()
  const b = randNum()

  const color2 = r + ', ' + g + ', ' + b
  return color2
}


const displayGradient = () => {
  const RGB1 = getColor1()
  const RGB2 = getColor2()
  document.querySelector('body').style.backgroundColor = gradient
  document.querySelector('.color').textContent = 'RGB' + '(' + RGB1 + ')'
  console.log(RGB1)
  console.log(RGB2)
}


const test = () => {
  var c = document.querySelector('#canvas');
  var ctx = c.getContext("2d");

  // Create gradient
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "blue");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(10, 10, 200, 100);
}

const gradient = "linear-gradient(" + 90 + "deg, " + 'red' + ", " + 'green' + ")";