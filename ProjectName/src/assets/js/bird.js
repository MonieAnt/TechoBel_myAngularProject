var hoverMeState = false;
$(".green-bird").hover(function () {
  $("body").toggleClass("hovered");
  if (hoverMeState == false) {
    hoverMeState = true;
    $(".hover-me").addClass("display-none");
  }
});
