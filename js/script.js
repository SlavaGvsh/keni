$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');

   });
});

$('.shop-sport-owl-carousel').owlCarousel({
   // loop:true,
   margin:40,
   nav:true,
   dots:false,

   //navText:'',
   responsive:{
       0:{
           items:1
       },
       600:{
           items:2
       },
       1000:{
           items:3
       }
   }
})
$('.shop-trend-owl-carousel').owlCarousel({
   // loop:true,
   margin:40,
   nav:true,
   dots:false,

   //navText:'',
   responsive:{
       0:{
           items:1
       },
       600:{
           items:2
       },
       1000:{
           items:2
       }
   }
})