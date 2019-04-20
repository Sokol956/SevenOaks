var slideOne = document.querySelector('.head-background');
var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');

arrowRight.addEventListener('click', function(evt) {
    evt.preventDefault();
    slideOne.classList.add('background-two')
})

arrowLeft.addEventListener('click', function(evt) {
    evt.preventDefault();
    slideOne.classList.remove('background-two')
})

var popup = document.querySelector('.popup-dark');
var openPopup = document.querySelector('.sub-open');
var closePopup = document.querySelector('.popup-close');

openPopup.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('popup-show');
});

closePopup.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('popup-show');
});