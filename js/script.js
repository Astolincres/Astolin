const carouselContaienr = document.getElementById('carousel');

for (let i = 2; i<31; i++) {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(/img/carousel/${i+1}.jpg)`;
    div.classList.add('carousel_item');
    carouselContaienr.appendChild(div);
}

const div = document.createElement('div');
div.style.backgroundImage = `url(/img/carousel/3.jpg)`;
div.classList.add('carousel_item');
carouselContaienr.appendChild(div);