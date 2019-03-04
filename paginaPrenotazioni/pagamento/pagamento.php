<?php
   session_start();
   $name=$_POST['nome'];
   $_SESSION['nome']=$name;

   $cognome=$_POST['cognome'];
   $_SESSION['cognome']=$cognome;
   $email=$_POST['email'];
   $_SESSION['email']=$email;

?>

<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Cosmoproject - Pagamento</title>

    <!--file css -->
    <link href="../../css/bootstrap.css" rel="stylesheet">
    <link href="../../css/all.css" rel="stylesheet" type="text/css">
    <link href="../../css/style.css" rel="stylesheet">

    <!-- link per i font-->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
    <link rel="icon" href="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgNDY2LjIyNyA0NjYuMjI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjYuMjI3IDQ2Ni4yMjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDYzLjM2LDIuODUyYy0xLjkwNi0xLjgwNS00LjE4OC0yLjcxMi02Ljg1NC0yLjcxMmMtNDkuNjc3LDAtOTAuNjk0LDYuNzU1LTEyMy4wNTEsMjAuMjcxICAgYy0zMi4zNTMsMTMuNTE4LTY2LjQyNCwzOC4wNzItMTAyLjIwOCw3My42NjJjLTE1LjIyNSwxNS40MTgtMzEuOTc3LDMzLjk3Ny01MC4yNDgsNTUuNjc1bC0xMDguMjA1LDUuNzA4ICAgYy0zLjA0NiwwLjM4Ny01LjUyLDEuOTA2LTcuNDIzLDQuNTdMMS40MTgsMjY5LjY2NmMtMi4yODUsMy44MDYtMS44MDcsNy41MTksMS40MjcsMTEuMTM2bDE4LjI3MSwxOC4yNzEgICBjMS43MTQsMS43MTQsMy45MDEsMi41NjksNi41NjcsMi41NjljMS4xNDMsMCwxLjk5Ny0wLjA5NiwyLjU2OC0wLjI4N2w3OC44MDItMjQuMjczbDgwLjIyOCw4MC4yMzJsLTI0LjI2OSw3OC43OTUgICBjLTAuOTQ5LDMuNDMtMC4xODgsNi40NzIsMi4yODUsOS4xMzhsMTguMjcyLDE4LjI3NGMyLjA5NCwxLjcwNyw0LjI4NSwyLjU2Niw2LjU2NywyLjU2NmMxLjcxNiwwLDMuMjM4LTAuMzg0LDQuNTY5LTEuMTQ0ICAgbDEwOS42MzktNjMuOTUzYzIuNjY2LTEuOTAyLDQuMTg2LTQuMzczLDQuNTY4LTcuNDE5bDUuNzA4LTEwOC4yMDljMjEuNy0xOC4yNzQsNDAuMjYyLTM1LjAyMiw1NS42NzYtNTAuMjUxICAgYzMzLjg5LTM0LjA3NCw1OC4wMDktNjguMzc4LDcyLjM3NS0xMDIuOTIzYzE0LjM3My0zNC41NDcsMjEuNTU2LTc1LjUxOSwyMS41NTYtMTIyLjkxQzQ2Ni4yMjQsNi44MDQsNDY1LjI3Myw0LjY2NCw0NjMuMzYsMi44NTJ6ICAgIE0zOTQuMjc3LDExMC45MmMtNS4zMjUsNS4zMjYtMTEuOCw3Ljk5NC0xOS40MTQsNy45OTRzLTE0LjA4Mi0yLjY2NS0xOS40MTQtNy45OTRjLTUuMzI1LTUuMzMtNy45OTQtMTEuODAyLTcuOTk0LTE5LjQxNyAgIGMwLTcuNjExLDIuNjY2LTE0LjA4NCw3Ljk5NC0xOS40MTRjNS4zMjgtNS4zMjcsMTEuOC03Ljk5MywxOS40MTQtNy45OTNzMTQuMDg2LDIuNjYzLDE5LjQxNCw3Ljk5M3M3Ljk5NCwxMS44MDMsNy45OTQsMTkuNDE0ICAgQzQwMi4yNzEsOTkuMTE5LDM5OS42MTIsMTA1LjU4NiwzOTQuMjc3LDExMC45MnoiIGZpbGw9IiNGRkRBNDQiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />

    <!--link icone -->
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    </head>
    <body background= "https://images.wallpaperscraft.com/image/starry_sky_stars_space_120412_1280x720.jpg">


       <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="../../index.html#page-top" style="font-family: 'Ubuntu', sans-serif;">Cosmoproject&nbsp;<i class="fa fa-rocket"></i></a>

        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="../../destinazioni.html#destinazioni">Destinazioni</a>
            </li>
            <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="../../planetario/planetario.html">Planetario</a>
                </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="../prenotazioni/prenotazioni.php?pianeta=nessuno">Prenota</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="../../index.html#team">Team</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    <section id="meta" class="bg-transparent" style="margin-bottom: -4%;">
        <div class=" text-center text-warning">
                <h2 class=" text-uppercase">Pagamento</h2>
        </div>
    </section>

    <form action="../prenotazioni/database.php" class="form-signin text-center" method="POST" name="myForm3" onsubmit="return verifica();">

        <div class="container" align="center">
            <aside class="col-sm-6">
                <article class="card">
                    <div class="card-body">

                        <ul class="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
                                <i class="fa fa-credit-card"></i> Carta di Credito</a></li>

                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
                                <i class="fa fa-university"></i>  Bonifico Bancario</a></li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="nav-tab-card">

                                <form role="form">
                                    <div class="form-group">
                                        <label for="username">Intestatario</label>
                                        <input type="text" class="form-control" name="username" placeholder="" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="cardNumber">Numero di Carta</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="cardNumber" placeholder="" onchange="return verificaCarta()" required="">
                                            <div class="input-group-append">
                                                <span class="input-group-text text-muted">
                                                    <i class="fab fa-cc-visa"></i>   <i class="fab fa-cc-amex"></i>  
                                                    <i class="fab fa-cc-mastercard"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="form-group">
                                            <label><span class="hidden-xs">Scadenza</span> </label>
                                            <div class="input-group">
                                                <input type="number" class="form-control" placeholder="MM" name="MM" min="1" max="12" required>
                                                <input type="number" class="form-control" placeholder="YY" name="YY" min="19" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i class="fa fa-question-circle"></i></label>
                                            <input type="number" class="form-control" min="101" max="999" required="">
                                        </div> 
                                    </div>
                                </div>
                                 <div class="form-group">
                                        <label for="username"><i class='fas fa-shopping-cart'></i>&nbsp;Carrello</label>
                                        <input type="text" class="form-control" name="username" placeholder="" value="<?php if($_SESSION['pre']=='null') echo(0); else echo($_SESSION['pre']); ?>" readonly>
                                    </div>
                                </form>
                            </div>
                        <div class="tab-pane fade" id="nav-tab-bank">
                            <p>Dettagli Bonifico</p>
                                <dl class="param">
                                   <dt>BANCA: </dt>
                                   <dd> COSMO BANK</dd>
                                </dl>
                                <dl class="param">
                                    <dt>Numero: </dt>
                                    <dd> 29182019</dd>
                                </dl>
                                    <dl class="param">
                                    <dt>IBAN: </dt>
                                    <dd> 19971997</dd>
                                </dl>
                            </div>
                           </div>

                    </div>
                </article>

            <button class="btn btn-lg btn-outline-warning btn-block mt-4" type="submit" >Conferma&nbsp; <i class='fas fa-rocket'></i></button>
            </aside>

        </div>

    </form>
    <br><br>

    <footer>
        <div class="container">
        <div class="row">
            <div class="text-left">
                <span class="copyright text-light">Copyright &copy; Progetto LTW 2018</span>
            </div>
        </div>
        </div>
    </footer>

        <script src="../../js/jquery.min.js"></script>
        <script src="../../js/bootstrap.bundle.min.js"></script>

        <!-- Plugin JavaScript -->
        <script src="../../js/jquery.easing.min.js"></script>
        <!-- Custom scripts for this template -->
        <script src="../../js/style.js"></script>
        <script src="js/verifica.js" ></script>
    </body>
</html>
