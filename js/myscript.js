$(function () {
  var _pos = [100, 100, 90, 85, 45, 65, 80, 90, 100]; //내 스킬값 _index값으로 찾는거임
  var setId; //밑에 체크박스
  $('#section2 .link-wrap .link-unit .btn').mouseover(function () {
    var _index = $(this).parent().index(); //인덱스 찾기 a가아닌 li
    var _posReverse = 100 - _pos[_index]; //파도높이에 맞게 반전을 줘야함 ...100-(값)하면 됨
    $('#section2 .wave-wrap .unit').css(
      'transform',
      'translateY(' + _posReverse + '%)'
    ); //파도의 높이값 제어
    clearInterval(setId); //또해줘야함.. 클리어인터벌
    setId = setInterval(checkPos, 10); //카운팅 효과를 위한 setInterval을 호출하고 변수에 담음!!

    $('#section2 .skillExplain li').removeClass('active');
    $('#section2 .skillExplain li').eq(_index).addClass('active');
    $('#section2 .fish')
      .css('transform', 'translateY(' + _posReverse + '%)')
      .addClass('on');
    $('#section2 .fish').addClass('on');
    $('#section2 .fish2').addClass('on2');
  });
  $('#section2 .link-wrap .link-unit .btn').mouseout(function () {
    //마우스아웃하면 파도가 밑으로
    $('#section2 .wave-wrap .unit').css('transform', 'translateY(100%)');
    $('#section2 .skillExplain li').removeClass('active');
    $('#section2 .fish').removeClass('on');
    $('#section2 .fish2').removeClass('on2');
  });

  $('#section2 .wave-wrap .unit').on('transitionend', function () {
    //setInterval을 멈추기 위한 애니메이션 끝시점end 체크(transition 움직임이 끝날때)
    clearInterval(setId); //setInterval을 clear처리하면 반복적으로 움직이던게 멈춘다
  });

  //숫자카운팅하는 함수
  function checkPos() {
    var _tpos = $('#section2 .wave-wrap .unit').css('transform').split(',')[5]; //파도(unit)에 대한 transform값중에서 6번째 값만 가져오는것 (?)
    _tpos = _tpos.replace(')', ''); //값뒤의 ")"부분을 replace를 통해 제거
    var _th = $('#section2 .wave-wrap').height(); //백분률로 표현하기 위한 전체 높이값을 알아냄
    var _per = _tpos / _th; //현재값 / 전체값 (소수)
    var _per1 = 100 - Math.round(_per * 100); //백분율로 표현후 또 반전시켜줘야함
    $('#section2 .wave-wrap .unit .num > strong').text(_per1); //strong 값이 바뀌게 하는고임
  }

  /*section5 마지막*/
  $('#section5 .myInfo')
    .mouseover(function () {
      $(this).css({ backgroundColor: 'lavender' });
      $('#section5 .myInfo span').stop().animate({ width: '44px' });
    })
    .mouseout(function () {
      $(this).css({ backgroundColor: 'rgba(255, 255, 255, 0.53)' });
      $('#section5 .myInfo span').stop().animate({ width: '0px' });
    });

  $('#section5 .contactSns , #section5 .contactSns2')
    .mouseover(function () {
      $('#section5 .contactSns ul li , #section5 .contactSns2 ul li').css({
        'animation-play-state': 'paused',
      });
    })
    .mouseout(function () {
      $('#section5 .contactSns ul li , #section5 .contactSns2 ul li').css({
        'animation-play-state': 'running',
      });
    });

  $('#section5 .ContactInner .ContactRight .form .inputBox input[type=text]')
    .focus(function () {
      $(this).addClass('focus');
    })
    .blur(function () {
      $(this).removeClass('focus');
    });

  /*포트폴리오부분*/

  var n = 0;
  var $slideLength = $('#section3 .pBg .slideViewBg div').length;
  $('.allNum').text('/ ' + $slideLength);

  function fadeInOutBG(n) {
    /*포트폴리오배경*/
    $('#section3 .pBg .slideViewBg div').stop().fadeOut(800);
    $('#section3 .pBg .slideViewBg div')
      .eq(n % 4)
      .stop()
      .fadeIn(500);

    /*반응형 부분*/
    $('#section3 .pResponsive .slideViewBg2 .res').stop().fadeOut(100);
    $(
      '#section3 .pResponsive .slideViewBg2 .res, #section3 .pResponsive .slideViewBg2 .res > *'
    )
      .eq(n % 4)
      .stop()
      .fadeIn(100);

    /*포트폴리오 설명부분*/
    $('#section3 .pContainer .pText .slideView .con')
      .stop()
      .animate({ left: '-120%' }, 400);
    $('#section3 .pContainer .pText .slideView .con')
      .eq(n % 4)
      .css('left', '120%')
      .stop()
      .animate({ left: '0%' }, 500);
    /*포트폴리오 설명tab부분*/
    $('#section3 .pContainer .pText2 .slideView2 .con2')
      .stop()
      .animate({ left: '-120%' }, 400);
    $('#section3 .pContainer .pText2 .slideView2 .con2 ')
      .eq(n % 4)
      .css('left', '120%')
      .stop()
      .animate({ left: '0%' }, 500);

    /*포트폴리오 모니터부분*/
    $('#section3 .pContainer .pCont .pComputer .slideView2 div')
      .stop()
      .animate({ left: '-100%' }, 400);
    $('#section3 .pContainer .pCont .pComputer .slideView2 div')
      .eq(n % 4)
      .css('left', '100%')
      .stop()
      .animate({ left: '0%' }, 300);
  }
  function currentIn(n) {
    /*포트폴리오 현재위치 번호*/
    $('.current').text((n % $slideLength) + 1);
  }

  $('#section3 .pContainer .pText .text').eq(0).addClass('on');
  $('#section3 .pContainer .pText h1').eq(0).addClass('on');
  fadeInOutBG(0);
  currentIn(0);
  var posY = 0; //포트폴리오 네비바
  $('#section3 .indicator .prev').click(function () {
    n--;
    fadeInOutBG(n);
    currentIn(n);

    if (posY < 50) {
      posY = +400;
    }
    posY -= 100;

    $('.line .pLine')
      .stop()
      .animate({ height: posY + 'px' });
    $('#section3 .pContainer .pText p').removeClass('on');
    $('#section3 .pContainer .pText p')
      .eq(n % 4)
      .addClass('on');
    $('#section3 .pContainer .pText h1').removeClass('on');
    $('#section3 .pContainer .pText h1')
      .eq(n % 4)
      .addClass('on');
  });
  $('#section3 .indicator .next').click(function () {
    n++;
    fadeInOutBG(n);
    currentIn(n);

    if (posY > 200) {
      posY = -100;
    } else if ($('.line .pLine').height() > 400) {
      posY = -400;
    }
    posY += 100;
    $('.line .pLine')
      .stop()
      .animate({ height: posY + 'px' });
    $('#section3 .pContainer .pText p').removeClass('on');
    $('#section3 .pContainer .pText p')
      .eq(n % 4)
      .addClass('on');
    $('#section3 .pContainer .pText h1').removeClass('on');
    $('#section3 .pContainer .pText h1')
      .eq(n % 4)
      .addClass('on');
  });
});
