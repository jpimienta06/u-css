$(document).ready(function(){

  $(window).on("scroll",function(){
    var win = $(window).scrollTop();
    if(win > 120){
      $(".rd-navbar").removeClass('rd-navbar-scroll-no-color');
      $(".rd-navbar").addClass('rd-navbar-scroll-color');
    }
    else{
      $(".rd-navbar").removeClass('rd-navbar-scroll-color');
      $(".rd-navbar").addClass('rd-navbar-scroll-no-color');
    }
  });

});
