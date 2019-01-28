var popUp = document.querySelector('.modal');
var openPopUpButton = document.querySelectorAll('.button-open');
var closePopUpButton = popUp.querySelector('.button-close');

for (var i = 0; i < openPopUpButton.length; i++) {
	openPopUpButton[i].addEventListener('click', function (evt) {
	  popUp.classList.add('modal--show');
	});
}

closePopUpButton.addEventListener('click', function () {
  popUp.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popUp.classList.remove('modal--show');
  }
});
