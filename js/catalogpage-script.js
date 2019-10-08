//Открытие модального с информацией о покупке товара
var userLinkBookmark = document.querySelectorAll('.user-list__link')[0];
var bookmarkCount = userLinkBookmark.querySelector('span');
var userLinkCart = document.querySelectorAll('.user-list__link')[1];
var productCartCount = userLinkCart.querySelector('span');
var addCartBtns = document.querySelectorAll('.products__btn');
var addBookmarkBtns = document.querySelectorAll('.products__btn_bookmark');
var addCartPopup = document.querySelector('.add-cart-popup');
var addCartPopupClose = addCartPopup.querySelector('.btn-close');
var checkOut = addCartPopup.querySelectorAll('.add-cart-menu__link')[0];
var continueShop = addCartPopup.querySelectorAll('.add-cart-menu__link')[1];

var productCartSum = +productCartCount.textContent;

for (var i = 0; i < addCartBtns.length; i++) {
    addCartBtns[i].addEventListener('click', function (event) {
        event.preventDefault();
        productCartSum++;
        userLinkCart.classList.add('user-list__link_add-product');
        addCartPopup.classList.add('modal-show');
        productCartCount.textContent = String(productCartSum);
    });
}

var bookmarkSum = +bookmarkCount.textContent;

for (var i = 0; i < addBookmarkBtns.length; i++) {
    addBookmarkBtns[i].addEventListener('click', function (event) {
        event.preventDefault();
        bookmarkSum++;
        userLinkBookmark.classList.add('user-list__link_add-product');
        bookmarkCount.textContent = String(bookmarkSum);
    });
}

addCartPopupClose.addEventListener('click', function (event) {
    event.preventDefault();
    addCartPopup.classList.remove('modal-show');
});

checkOut.addEventListener('click', function (event) {
    event.preventDefault();
    addCartPopup.classList.remove('modal-show');
});

continueShop.addEventListener('click', function (event) {
    event.preventDefault();
    addCartPopup.classList.remove('modal-show');
});
