


(function($) {

    $("#getusers").on('click', function(){


    $.ajax({
      method: "GET",
      url: "top.php",
    }).done(function( data) {
      var result= $.parseJSON(data);
      var string='<table tex-align="center" align="center" width="70%" style="margin-left:33%"><th>Pianeta</th><th>N° prenotazioni</th><tr>';


      $.each( result, function( key, value ) {

        string += "<tr> <td>"+value['pianeta'] + "</td><td>"+value['max']+ "</td></tr>";
        });
           string += '</table><br>';
        $("#records").html(string);
     });
});



  // viene mostrato popup e settato il tempo di
  // rilevazione popup (10sec)
  $('#overlay').modal('show');

        setTimeout(function() {
        $('#overlay').modal('hide');
    }, 10000);


  "use strict";
  // scrolla in base al identificatore che do all'inizio delle sezioni
  // per esempio dato che ho messo id=team nella sezione team, con
  // questa funzione posso scrollare con un tempo di 1sec alla sezione team
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });


  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });


  //scollando da effetto scuro
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  navbarCollapse();

  $(window).scroll(navbarCollapse);


})(jQuery);
function refresh(){
  document.getElementById("getusers").value="Refresh";
  return true;
}
