$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      solarsys = $("#solar-system");

  // funzione init -> settato visione 3D e settato il bottone sulla velocità
  var init = function() {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  };

  // funzione rimuove o aggiunge una classe specificata da viewport
  // qui la usiamo per le classi relative alla velocità, distanza, dimensione
  // (vedi alla fine del file)
  var setView = function(view) { universe.removeClass().addClass(view); };

  //cambia pianeta selezionato
  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    // mostra i valori del pianeta scelto, in base alla scelta
    // da te fatta tra velocità,dimensione,distanza
    solarsys.removeClass().addClass(ref);
    // selezionando(cliccando una volta) su quel pianeta esso diventa "attivo"
    // cioè, se togliessi queste funzionei (due righe sotto) avrei tutti i Pianeti active
    // le scritte di tutti i pianeti che ho cliccato risulterebbero "gialle"
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

jQuery(function($) {
    $('#golink1').click(function() {
        return false;
        // doppio click mi riporta a pagina specificata
        // in ogni url del "golink" selezionato
    }).dblclick(function() {
        window.location = this.href;
        return false;
    });
});

jQuery(function($) {
  $('#golink2').click(function() {
      return false;
  }).dblclick(function() {
      window.location = this.href;
      return false;
  });
});


jQuery(function($) {
  $('#golink3').click(function() {
      return false;
  }).dblclick(function() {
      window.location = this.href;
      return false;
  });
});

jQuery(function($) {
$('#golink4').click(function() {
    return false;
}).dblclick(function() {
    window.location = this.href;
    return false;
});
});

jQuery(function($) {
  $('#golink5').click(function() {
      return false;
  }).dblclick(function() {
      window.location = this.href;
      return false;
  });
});

jQuery(function($) {
$('#golink6').click(function() {
    return false;
}).dblclick(function() {
    window.location = this.href;
    return false;
});
});

jQuery(function($) {
  $('#golink7').click(function() {
      return false;
  }).dblclick(function() {
      window.location = this.href;
      return false;
  });
});

jQuery(function($) {
$('#golink8').click(function() {
    return false;
}).dblclick(function() {
    window.location = this.href;
    return false;
});
});

jQuery(function($) {
    $('#golink9').click(function() {
        return false;
    }).dblclick(function() {
        window.location = this.href;
        return false;
    });
  });


  // toggleClass controlla ogni elemento per i nomi di classe view-3D view-2D
  // Aggiunge se mancano e Rimuove se esistono
  // Sorta di metodo di Attivazione / Disattivazione.
  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
  $(".set-size").click(function() { setView("scale-s set-size"); });
  $(".set-distance").click(function() { setView("scale-d set-distance"); });

  init();

});
