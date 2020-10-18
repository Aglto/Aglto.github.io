const gameWindow = document.querySelector('.game-window');
let i = 0;

function getXPositionOfElement() {
  let xPosition = Math.floor(Math.random() * gameWindow.clientWidth);
  return xPosition;
}


function getYPositionOfElement() {
  let yPosition = Math.floor(Math.random() * gameWindow.clientHeight);
  return yPosition;
}


function del(item) {
  item.classList.remove('circle');
  item.remove();
}

function random() {
  const element = document.createElement('div');
  element.style.top = `${getYPositionOfElement()}px`;
  element.style.left = `${getXPositionOfElement()}px`;
  element.classList.add('circle');
  gameWindow.append(element);
  setTimeout(del, 4000, element);

  element.addEventListener('click', () => {
    i++;
    console.log(i);
    del(element);
  });
}



setInterval(random, 1000);




 