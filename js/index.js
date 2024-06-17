/*새로운 창*/
$(document).ready(function () {
  $("a[href^='http']").attr('target', '_blank');
});
$(function () {
  /*섹션1 하트클릭 애니메이션*/
  $('.AboutTag a').click(function () {
    var _index = $(this).index();
    $('.AboutTagHeart div').eq(_index).toggleClass('on');
  });
  /*about me*/
  $('#section1 div .Aboutleft')
    .mouseover(function () {
      $('#section1 div .Aboutleft .bg2').css({
        'background-image': 'url(./img/me5.png)',
      });
    })
    .mouseout(function () {
      $('#section1 div .Aboutleft .bg2').css({
        'background-image': 'url(./img/me4.png)',
      });
    });
  /*contact me*/
  $('#section5 .myInfo .infoInner .me')
    .mouseover(function () {
      $('#section5 .myInfo .infoInner .me').css({
        'background-image': 'url(./img/contact_me.png)',
      });
    })
    .mouseout(function () {
      $('#section5 .myInfo .infoInner .me').css({
        'background-image': 'url(./img/me7.png)',
      });
    });

  /*portfolio link걸기*/

  $('#section3 .pContainer .pCont .pComputer .slideView2 div')
    .eq(0)
    .click(function () {
      $(location).attr('href', 'https://ogh010.github.io/jeju/');
    });
  $('#section3 .pContainer .pCont .pComputer .slideView2 div')
    .eq(1)
    .click(function () {
      $(location).attr('href', 'https://ogh010.github.io/kb-bank/');
    });
  $('#section3 .pContainer .pCont .pComputer .slideView2 div')
    .eq(2)
    .click(function () {
      $(location).attr('href', 'https://ogh010.github.io/watch-clone/');
    });
  $(
    '#section3 .pResponsive .res3 .phoneImg .phoneImgInner div , #section3 .pResponsive .res3 .padImg .padImgInner div'
  ).click(function () {
    $(location).attr('href', 'https://ogh010.github.io/Starbucks-web/');
  });
  $('#section3 .pContainer .pCont .pComputer .slideView2 div')
    .eq(3)
    .click(function () {
      $(location).attr('href', '#');
    });

  /*탭*/
  $('.con20 .tab0 .tabCont0 div').eq(1).hide();
  $('.con20 .tab0 .tabTitle0 li').eq(0).addClass('on');
  $('.con20 .tab0 .tabTitle0 li').click(function () {
    var _index = $(this).index();
    $('.con20 .tab0 .tabCont0 div').hide();
    $('.con20 .tab0 .tabCont0 div').eq(_index).show();
    $('.con20 .tab0 .tabTitle0 li').removeClass('on');
    $('.con20 .tab0 .tabTitle0 li').eq(_index).addClass('on');
  });

  $('.con21 .tab1 .tabCont1 div').eq(1).hide();
  $('.con21 .tab1 .tabTitle1 li').eq(0).addClass('on');
  $('.con21 .tab1 .tabTitle1 li').click(function () {
    var _index = $(this).index();
    $('.con21 .tab1 .tabCont1 div').hide();
    $('.con21 .tab1 .tabCont1 div').eq(_index).show();
    $('.con21 .tab1 .tabTitle1 li').removeClass('on');
    $('.con21 .tab1 .tabTitle1 li').eq(_index).addClass('on');
  });

  $('.con22 .tab2 .tabCont2 div').eq(1).hide();
  $('.con22 .tab2 .tabTitle2 li').eq(0).addClass('on');
  $('.con22 .tab2 .tabTitle2 li').click(function () {
    var _index = $(this).index();
    $('.con22 .tab2 .tabCont2 div').hide();
    $('.con22 .tab2 .tabCont2 div').eq(_index).show();
    $('.con22 .tab2 .tabTitle2 li').removeClass('on');
    $('.con22 .tab2 .tabTitle2 li').eq(_index).addClass('on');
  });

  $('.con23 .tab3 .tabCont3 div').eq(1).hide();
  $('.con23 .tab3 .tabTitle3 li').eq(0).addClass('on');
  $('.con23 .tab3 .tabTitle3 li').click(function () {
    var _index = $(this).index();
    $('.con23 .tab3 .tabCont3 div').hide();
    $('.con23 .tab3 .tabCont3 div').eq(_index).show();
    $('.con23 .tab3 .tabTitle3 li').removeClass('on');
    $('.con23 .tab3 .tabTitle3 li').eq(_index).addClass('on');
  });
});
