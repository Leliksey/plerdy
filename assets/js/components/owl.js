
$('.slider__items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        dots: true,
        variableWidth: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        dots: true,
        variableWidth: true,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        dots: true,
        variableWidth: true,
      }
    },
  ]
  });
$(".slider__nav img:first-child").click(function() {
    $(".slick-prev").click();
});
$(".slider__nav img:last-child").click(function() {
    $(".slick-next").click();
})