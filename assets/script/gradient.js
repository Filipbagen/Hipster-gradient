const randWords = () => {
  displayWord()
  gradient()
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
    'LOL'
  ]

  const hipsterWord = getWord[Math.floor(Math.random() * getWord.length)]
  document.querySelector('.hipsterName').textContent = hipsterWord
}

const gradient = () => {
  const r = randNum()
  const g = randNum()
  const b = randNum()

  document.querySelector('body').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
}

const randNum = () => {
  return Math.floor(Math.random() * 256)
}