const gameWindow = document.querySelector('.game-window');
const gameCounter = document.querySelector('.counter');
let i = 0;
let timeInterval = 1000;

function getXPositionOfElement() {
  const xPosition = Math.floor(Math.random() * gameWindow.clientWidth);
  return xPosition;
}


function getYPositionOfElement() {
  const yPosition = Math.floor(Math.random() * gameWindow.clientHeight);
  return yPosition;
}


function deleteItem(item) {
  item.classList.remove('circle');
  item.remove();
}

function getGameLevel() {
  switch(i) {
    case 20:
      timeInterval -= 200;
    break;
    case 40:
      timeInterval -= 200;
    break;
    case 60:
      timeInterval -= 100;
      break;
  }
}



function showElements() {
  const element = document.createElement('div');
  element.style.top = `${getYPositionOfElement()}px`;
  element.style.left = `${getXPositionOfElement()}px`;
  element.classList.add('circle');
  gameWindow.append(element);
  setTimeout(deleteItem, 4000, element);

  element.addEventListener('mousedown', () => {
    i++;
    gameCounter.textContent = i;
    getGameLevel();
    deleteItem(element);
  });
  setTimeout(showElements, timeInterval);
}

showElements();