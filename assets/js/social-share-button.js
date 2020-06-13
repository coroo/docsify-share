$(".share").on("click", function (e) {
    $(".fab").removeClass("no");
    if (e.target != this) return;
    $(".share, .fab").toggleClass("active");
});
  