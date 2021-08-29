$ (function(){

   $(".featured-product__rateyo").rateYo({
      rating: 4.5,
      starWidth: "14px",
      readOnly: true
    });

    $('.featured-product__slider-inner').slick({
       nextArrow: '<span class="lnr-chevron-left"></span>',
       prevArrow: '<span class="lnr-chevron-right"></span>',
    });



    var mixer = mixitup('.new-products__inner-item');

});