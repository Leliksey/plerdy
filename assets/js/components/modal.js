$(document).on("click", ".custom-button", function () {
  $(".popup").addClass("open");
});
$(document).on("click", ".popup__close", function () {
  $(".popup").removeClass("open");
});
$(document).on("click", ".popup .custom-button", function () {
  if($(".popup__input").val() == "" && $(".popup__input-ph").val() == "") {
    $(".popup__input").addClass("danger");
    $(".country-phone").addClass("danger");
    $(".popup__alarm").removeClass("hide");
  } else if ($(".popup__input-n").val() == "") {
    $(".popup__input").addClass("danger");
    $('.popup__input-n').parent().find(".popup__alarm").removeClass("hide");
  } else if ($("#phone").val() == "") {
    $(".country-phone").addClass("danger");
    $("#phone").parent().parent().find(".popup__alarm").removeClass("hide");
  } else {
    alert("To the Moon!!!")
  }
});
$("#phone").mask("(99) 999-9999");

$('.popup__input').bind('input propertychange', function() {
    $(this).removeClass("danger");
    $(this).parent().find(".popup__alarm").addClass("hide");
})

$('.popup__input-ph').on("keyup", function () {
  let ph = $('.popup__input-ph').val()
  if(ph != null) {
    $(".country-phone").removeClass("danger");
    $(".country-phone").parent().find(".popup__alarm").addClass("hide");
  }
  
})