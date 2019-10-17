//Перелистование слайдов с дрелью и перфоратаром
var sliderBtnLeft = document.querySelector('.slider-drills__btn_left');
var sliderBtnRight = document.querySelector('.slider-drills__btn_right');
var sliderRadioFirst = document.querySelector('.slider-radio-first');
var sliderRadioSecond = document.querySelector('.slider-radio-second');

sliderBtnRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (sliderRadioSecond.checked) {
        sliderRadioFirst.checked = true;
    } else {
        sliderRadioSecond.checked = true;
    }
});

sliderBtnLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
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

deliveryBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
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


garantBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
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

creditBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
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
var popupClose = mapPopup.querySelector('.btn-close');

mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
});

popupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
});


//Открытие модального окна с формой обратной связи
var feedbackPopup = document.querySelector('.feedback-popup');
var feedbackLink = document.querySelector('.contact__link');
var feedbackClose = feedbackPopup.querySelector('.btn-close');
var feedbackForm = feedbackPopup.querySelector('.feedback');
var feedbackName = feedbackPopup.querySelector('[name=feedback-name]');
var feedbackMail = feedbackPopup.querySelector('[name=feedback-mail]');
var feedbackText = feedbackPopup.querySelector('[name=feedback-text]');

var isStorageSupport = true;
var storage = '';

try {
    storage = localStorage.getItem('name');
} catch (error) {
    isStorageSupport = false;
}

feedbackLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('modal-show');
    if (storage) {
        feedbackName.value = storage;
        feedbackMail.focus();
    } else {
        feedbackName.focus();
    }
});

feedbackClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-show');
    feedbackPopup.classList.remove('modal-error');
});

feedbackForm.addEventListener('submit', function (evt) {
    if (!feedbackName.value || !feedbackMail.value || !feedbackText.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove('modal-error');
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add('modal-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('name', feedbackName.value);
            localStorage.setItem('mail', feedbackMail.value);
            localStorage.setItem('text', feedbackText.value);
        }
    }
});

//Обработчик события на закрытие модальных окон кнопкой ESC
window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains('modal-show') || feedbackPopup.classList.contains('modal-show')) {
            mapPopup.classList.remove('modal-show');
            feedbackPopup.classList.remove('modal-show');
            feedbackPopup.classList.remove('modal-error');
        }
    }
});
