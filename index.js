const gameWindow = document.querySelector('.game-window');
const gameCounter = document.querySelector('.counter');
let i = 0;
let timeInterval = 1000;

const getXPositionOfElement = () => {
  return Math.floor(Math.random() * gameWindow.clientWidth);
};

const getYPositionOfElement = () => {
  return Math.floor(Math.random() * gameWindow.clientHeight);
};

const deleteItem = (item) => {
  item.classList.remove('circle');
  item.remove();
};

const getGameLevel = () => {
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
};

const showElements = () => {
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
};

showElements();
