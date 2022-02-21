  let position = 0;
  const slidesToShow = 5;
  const slidesToScroll = 5;
  const container = document.querySelector(".slider");
  const track = document.querySelector(".slider__wrapper");
  const btnPrev = document.querySelector(".slider__button--prev");
  const btnNext = document.querySelector(".slider__button--next");
  const items = document.querySelectorAll(".slider-item");
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  
  for(let i = 0; i < itemsCount; i++) {
      const cloneItem = items[i].cloneNode(true);
      cloneItem.classList.add('cloneNode')
      track.appendChild(cloneItem);
  }
  items.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
  })
  btnNext.addEventListener('click', () => {
      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth; ;
      setPosition()
  });
  btnPrev.addEventListener('click', () => {
      const itemsLeft = Math.abs(position) / itemWidth;
      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      setPosition()
  });
  
  const setPosition = () => {
      track.style.transform = `translateX(${position}px)`;
  } 

 

