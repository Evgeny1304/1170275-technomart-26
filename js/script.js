//Перелистование слайдов с дрелью и перфоратаром
var sliderBtnLeft = document.querySelector('.slider-drills__btn_left');
var sliderBtnRight = document.querySelector('.slider-drills__btn_right');
var sliderRadioFirst = document.querySelector('.slider-radio-first');
var sliderRadioSecond = document.querySelector('.slider-radio-second');

sliderBtnRight.addEventListener('click', function (event) {
    event.preventDefault();
    if (sliderRadioSecond.checked) {
        sliderRadioFirst.checked = true;
    } else {
        sliderRadioSecond.checked = true;
    }
});

sliderBtnLeft.addEventListener('click', function (event) {
    event.preventDefault();
    if (sliderRadioFirst.checked) {
        sliderRadioSecond.checked = true;
    } else {
        sliderRadioFirst.checked = true;
    }
});


//Открытие блоков с услугами компании
var deliveryBtn = document.querySelectorAll('.services-list__btn')[0];
var garantBtn = document.querySelectorAll('.services-list__btn')[1];
var creditBtn = document.querySelectorAll('.services-list__btn')[2];
var deliveryBlock = document.querySelector('.service-item-delivery');
var garantBlock = document.querySelector('.service-item-guarantee');
var creditBlock = document.querySelector('.service-item-credit');

deliveryBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (garantBtn.classList.contains('services-list__btn_active') || creditBtn.classList.contains('services-list__btn_active')) {
        garantBtn.classList.remove('services-list__btn_active');
        creditBtn.classList.remove('services-list__btn_active');
        deliveryBtn.classList.add('services-list__btn_active');
    }
    if (garantBlock.classList.contains('service-item-show') || creditBlock.classList.contains('service-item-show')) {
        garantBlock.classList.remove('service-item-show');
        creditBlock.classList.remove('service-item-show');
        deliveryBlock.classList.add('service-item-show');
    }
});


garantBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (deliveryBtn.classList.contains('services-list__btn_active') || creditBtn.classList.contains('services-list__btn_active')) {
        deliveryBtn.classList.remove('services-list__btn_active');
        creditBtn.classList.remove('services-list__btn_active');
        garantBtn.classList.add('services-list__btn_active');
    }
    if (deliveryBlock.classList.contains('service-item-show') || creditBlock.classList.contains('service-item-show')) {
        deliveryBlock.classList.remove('service-item-show');
        creditBlock.classList.remove('service-item-show');
        garantBlock.classList.add('service-item-show');
    }
});

creditBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (deliveryBtn.classList.contains('services-list__btn_active') || garantBtn.classList.contains('services-list__btn_active')) {
        deliveryBtn.classList.remove('services-list__btn_active');
        garantBtn.classList.remove('services-list__btn_active');
        creditBtn.classList.add('services-list__btn_active');
    }
    if (deliveryBlock.classList.contains('service-item-show') || garantBlock.classList.contains('service-item-show')) {
        deliveryBlock.classList.remove('service-item-show');
        garantBlock.classList.remove('service-item-show');
        creditBlock.classList.add('service-item-show');
    }
});


//Открытие модального окна с картой
var mapLink = document.querySelector('.map-link');
var mapPopup = document.querySelector('.map-popup');
var popupClose = document.querySelector('.btn-close');

mapLink.addEventListener('click', function (event) {
    event.preventDefault();
    mapPopup.classList.add('modal-show');
});

popupClose.addEventListener('click', function (event) {
    event.preventDefault();
    mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        if (mapPopup.classList.contains('modal-show')) {
            mapPopup.classList.remove('modal-show');
        }
    }

});
