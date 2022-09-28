$(".navbar_gnb,.sub_shadow").on("mouseenter mouseleave", function (aa) {
  if ($(window).width() > 1169) {
    //pc(데스크탑) 상태였을때만
    if (aa.type == "mouseenter") {
      //마우스를 올려놨을때
      $(".sub").stop().slideDown();
      $(".sub_shadow").stop().fadeIn();
    } else {
      $(".sub")
        .stop()
        .slideUp(200, function () {
          $(".sub").removeAttr("style");
        });
      $(".sub_shadow")
        .stop()
        .fadeOut(200, function () {
          $(this).removeAttr("style");
        });
    }
  }
});

//모바일-메인메뉴 클릭하면 서브메뉴 나옴
const $mainBtn = $(".navbar_gnb > li > a"); //메인메뉴

$mainBtn.click(function () {
  if ($(window).width() < 1170) {
    //모바일 상태였을때만
    if (!$(this).parents("li").hasClass("on")) {
      //클릭한 a의 부모 li에 on클라스가 없을때
      $(".sub").slideUp(200);
      $(".navbar_gnb > li").removeClass("on");
      $(this).siblings(".sub").slideDown(500);
      $(this).parents("li").addClass("on");
    } else {
      $(this).siblings(".sub").slideDown(500);
      $(this).parents("li").addClass("on");
      $(".sub").slideUp(200);
      $(".navbar_gnb > li").removeClass("on");
      //클릭한부분이 이미 열려있는 상태(on클라스가 있는 형태)
    }
  }
});

//모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$(".trigger").click(function () {
  $(this).toggleClass("open");

  if ($(".trigger").hasClass("open")) {
    $(".gnb").animate({ right: 0 }, 400);
    $("header").animate({ left: -250 }, 400);
  } else {
    $(".gnb").animate({ right: -250 }, 400);
    $("header").animate({ left: 0 }, 400);
    $(".sub").slideUp(200);
    $(".navbar_gnb > li").removeClass("on");
  }
});
/*
  mouseenter/mouseleave  - 자식 요소가 있다면 해당 자식요소 영역은 제외
  mouseover/mouseout    - 자식 요소가 있다면 해당 자식요소까지 포함(자식요소를 더 확실하게 인식)

*/
/*모바일 상태에서 서브메뉴를 열고 데스크 탑 상태로 바꿀떄 스타일 사라짐
 */
$(window).resize(function () {
  if ($(window).width() > 1169) {
    $(".sub").removeAttr("style");
    $(".navbar_gnb > li").removeClass("on");
  }
});
