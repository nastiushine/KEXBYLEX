//----------------------SLIDER-PRINCIPALA-----------------------
function startCounter(element, targetValue) {
    let currentValue = 0;
    let timerId = setInterval(() => {
        element.textContent = ++currentValue;
        if (currentValue === targetValue) {
            clearInterval(timerId);
        }
    }, 20);
}

const counters = document.querySelectorAll('.counter__item.element-animation');
const firstElement = document.querySelector('.element-show');

const handleTransitionEnd = () => {
    let previousCounter = Promise.resolve();

    counters.forEach(counter => {
        const valueEl = counter.querySelector('.counter__value');
        const labelEl = counter.querySelector('.counter__label');
        const targetValue = parseInt(labelEl.textContent.split(' ')[1]);

        previousCounter = previousCounter.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    startCounter(valueEl, targetValue);
                    resolve();
                }, 10);
            });
        });
    });

    firstElement.removeEventListener('transitionend', handleTransitionEnd);
}

if (firstElement) {
    handleTransitionEnd();
} else {
    counters[0].addEventListener('transitionend', handleTransitionEnd);
}



const sliderImages = document.querySelectorAll('.slider__img'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot'),
    sliderBtnNext = document.querySelector('.slider__btn-next');


let sliderCount = 0,
    sliderWidth;

window.addEventListener('resize', showSlide);

sliderBtnNext.addEventListener('click', nextSlide);

setInterval(() => {
    nextSlide()
}, 3000);


function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}


function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})


let left = document.getElementsByClassName('bi-caret-left-fill')[0];
let right = document.getElementsByClassName('bi-caret-right-fill')[0];
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right.addEventListener('click', () => {
    cards.scrollLeft += 140;
})


let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price_cont = document.getElementById('price_cont');

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
    ele.addEventListener('click', () => {
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        price_cont.innerText = ele.getElementsByTagName('h4')[0].innerText
    })
})
const logo = document.querySelector('#logo');
const cards1 = document.querySelectorAll('.card');
cards1.forEach(card => {
    card.addEventListener('click', () => {
        logo.classList.add('rotate');
        setTimeout(() => {
            logo.classList.remove('rotate');
        }, 2000);
    });
});


function changeColor(color) {
    var div = document.getElementById("logo");
    div.style.backgroundColor = color;
}
function changeText(text) {
    var p = document.getElementById("text");
    p.textContent = text;
}
document.getElementById("1").addEventListener("click", function () {
    changeColor("#c98b34");
    changeText("Ассорти из картофеля - это сочное и вкусное сочетание картошки фри, картошки по-деревенски и картофельных шариков. Ассорти из картофеля - отличное блюдо, которое подойдет как для перекуса в компании.");
});

document.getElementById("2").addEventListener("click", function () {
    changeColor("#851804");
    changeText("Борщ готовится на основе свеклы и других овощей, которые обжариваются с луком и морковью, затем варятся до готовности. А так же свежие пампушки приготовленные по домашнему рецепту придают борщу более насыщенный вкус.");

});

document.getElementById("3").addEventListener("click", function () {
    changeColor("#cfc29d");
    changeText("Пельмени, которые точно удовлетворят ваш аппетит! Наше нежное тесто, сделанное из высококачественной муки, и сочное куриное мясо создают незабываемый вкусовой опыт. ");

});
document.getElementById("4").addEventListener("click", function () {
    changeColor("#ce804f");
    changeText("Сэндвич - это простое и вкусное блюдо, которое можно подать как для завтрака, так и для обеда. Состоит круассана разрезаного попалам. Внутри сэндвича находится начинки из: соуса, лист салата, ветчина, сыр, огурец, помидор");

});
document.getElementById("5").addEventListener("click", function () {
    changeColor("#c47169");
    changeText(" Пицца готовится по традиционным рецептам из свежих натуральных ингредиентов. Наше тесто мягкое и тонкое, а начинка состоит из: соуса помодоро, моцарелла, ветчины, кукурузы, грибов, переца и спек");

});
document.getElementById("6").addEventListener("click", function () {
    changeColor("#d9a840");
    changeText("В состав супа входит: куриное мясо, картофель, морковь, лук, рис, томатная паста и специи. Суп получается очень насыщенным и ароматным, с легкой остринкой и нежной текстурой.");

});
document.getElementById("7").addEventListener("click", function () {
    changeColor("#d28339");
    changeText("Слоеное тесто круассана получается таким пышным, хрустящим и ароматным. А так же существует широкий выбор начинок для круассанов, таких как классический сливочный, шоколадный, ванильный, фруктовый и многие другие.");

});
document.getElementById("8").addEventListener("click", function () {
    changeColor("#787917");
    window.location.href = "HTML/meniu.html";
});

