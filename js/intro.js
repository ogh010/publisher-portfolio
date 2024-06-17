const mask = document.querySelector('.mask');
window.onmousemove = function (e) {
  const x = e.clientX;
  mask.style.left = x + 'px';
};
$(function () {
  $('button')
    .mouseover(function () {
      $('.me').css({ 'background-image': 'url(./img/intro_me2.png)' });
      $('.btnClick span').eq(0).addClass('on');
    })
    .mouseout(function () {
      $('.me').css({ 'background-image': 'url(./img/intro_me.png)' });
      $('.btnClick span').eq(0).removeClass('on');
    });
});
