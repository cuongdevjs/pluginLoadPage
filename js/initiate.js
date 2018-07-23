document.addEventListener('DOMContentLoaded', function () {
  var toLeft = document.querySelectorAll('.loadToLeft');
  var toRight = document.querySelectorAll('.loadToRight');
  var toTop = document.querySelectorAll('.loadToTop');
  var toBottom = document.querySelectorAll('.loadToBottom');
  var theBrand = document.querySelector('.nav-logo');

  window.addEventListener('scroll', function () {
    // Load element from left to right
    for (let index = 0; index < toLeft.length; index++) {
      var locationBlock = toLeft[index].offsetTop;
      if ((window.pageYOffset > locationBlock - 300) && (window.pageYOffset < locationBlock - 240)) {
        toLeft[index].classList.add('toLeft');
        toLeft[index].classList.remove('loadToLeft');
      }
    }
    // Load element from right to left
    for (let index = 0; index < toRight.length; index++) {
      var locationBlock = toRight[index].offsetTop;
      if ((window.pageYOffset > locationBlock - 300) && (window.pageYOffset < locationBlock - 240)) {
        toRight[index].classList.add('toRight');
        toRight[index].classList.remove('loadToRight');
      }
    }
    // load element from bottom to top
    for (let index = 0; index < toBottom.length; index++) {
      const locationBlock = toBottom[index].offsetTop;
      if ((window.pageYOffset > locationBlock - 300) && (window.pageYOffset < locationBlock - 240)) {
        toBottom[index].classList.add('toBottom');
        toBottom[index].classList.remove('loadToBottom');
      }
    }
    // load element from top to bottom
    for (let index = 0; index < toTop.length; index++) {
      let locationBlock = toTop[index].offsetTop;
      if ((window.pageYOffset > locationBlock - 300) && (window.pageYOffset < locationBlock - 240)) {
        toTop[index].classList.add('toTop');
        toTop[index].classList.remove('loadToTop');
      }
    }
  });

}, false);