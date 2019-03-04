<?php
    session_start();
    if(isset($_POST['prezzo'])){
      $prezzo=$_POST['prezzo'];
      $_SESSION['pre']=$prezzo;
    }
    else{
      $_SESSION['pre']='null';
    }

    $coupon=$_POST['coupon'];
    $_SESSION['coup']=$coupon;

    $nbiglietti=$_POST['biglietti'];
    $_SESSION['biglietti']=$nbiglietti;
    $datap=$_POST['dataPart'];
    $_SESSION['datapart']=$datap;

    $spapar=$_POST['inputPartenza'];
    $_SESSION['spar']=$spapar;
    $spaarr=$_POST['inputArrivo'];
    $_SESSION['spaarr']=$spaarr;

    if(isset($_POST['dataArr'])){
      $datar=$_POST['dataArr'];
      $_SESSION['dataarr']=$datar;
    }
    else{
      $_SESSION['dataarr']='null';
    }
    $db_name='cosmoproject';
    $link = mysqli_connect('localhost', 'root', 'Spsasc1997') or die("Impossibile connettersi al php");

    mysqli_select_db($link,$db_name) or die("Impossibile connettersi al database");
    if($spaarr=='Luna'){
      $queryC="SELECT arrivo FROM biglietto WHERE arrivo='Luna' and coupon='$coupon'";
      $resultC = mysqli_query($link,$queryC);
      $rowC=mysqli_fetch_assoc($resultC);
      if($rowC["arrivo"]=='Luna'){
        echo ("<script LANGUAGE='JavaScript'>
          window.alert('Coupon già utilizzato!');
          window.location.href='../prenotazioni/prenotazioniLuna.php?pianeta=Luna';
          </script>");
      }
    }
    if($_SESSION['dataarr']!='null'){

      $queryB = "SELECT SUM(nbiglietti) FROM biglietto WHERE datapartenza = '$datap' and dataarrivo='$datar' and partenza='$spapar' and arrivo='$spaarr' GROUP BY nbiglietti";
      $resultB = mysqli_query($link,$queryB) or die("Impossibile  fare query");
      $row=mysqli_fetch_assoc($resultB);
      if($row["SUM(nbiglietti)"]+$nbiglietti>10){

        echo ("<script LANGUAGE='JavaScript'>
          window.alert('Biglietti esauriti per questa data!');
          window.location.href='../prenotazioni/prenotazioni.php?pianeta=$spaarr';
          </script>");
      }
    }
    if($_SESSION['dataarr']=='null'){
      $queryB = "SELECT SUM(nbiglietti) FROM biglietto WHERE datapartenza = '$datap' and partenza='$spapar' and arrivo='$spaarr' GROUP BY nbiglietti";
      $resultB = mysqli_query($link,$queryB) or die("Impossibile  fare query");
      $row=mysqli_fetch_assoc($resultB);
      if($row["SUM(nbiglietti)"]+$nbiglietti>10){

        echo ("<script LANGUAGE='JavaScript'>
          window.alert('Biglietti esauriti per questa data!');
          window.location.href='../prenotazioni/prenotazioni.php?pianeta=$spaarr';
          </script>");
      }

    }

?>

<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
        <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <link href="../../css/bootstrap.css" rel="stylesheet">
    <link href="css/datiUtente.css" rel="stylesheet" type="text/css">
    <title>Cosmoproject - Dati Utente</title>

    <link href="../../css/all.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">



    <link href="../../css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

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

        <section id="contact" class="bg-transparent">
                  <div class="col-lg-12  text-center text-warning">
                    <h2 class="section text-uppercase">Inserisci i tuoi dati</h2>
                </div>
        </section>

            <form action="../pagamento/pagamento.php" class="form-signin " align="center" method="POST" name="myForm2" novalidate>
                <div class="container">

                    <div class="input-group mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm"><i class="material-icons">person</i>&nbsp;Nome</span>
                        </div>
                        <input type="text" class="form-control form-control btn-outline-secondary:hover text-dark font-weight-bold" name="nome" maxlength="20" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required onchange="validaNome();">
                        <div class="invalid-feedback">Inserisci tuo nome.</div>
                    </div>
                    <div class="input-group mb-4">
                            <div class="input-group-prepend">
                              <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm"><i class="material-icons">person</i>&nbsp;Cognome</span>
                            </div>
                            <input type="text" class="form-control form-control btn-outline-secondary:hover text-dark font-weight-bold"  name="cognome" maxlength="20" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required onchange="validaCognome();">
                            <div class="invalid-feedback">Inserisci tuo cognome.</div>
                    </div>

                    <div class="input-group mb-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm">@&nbsp;Email</span>
                        </div>
                        <input type="email" class="form-control form-control btn-outline-secondary:hover text-dark font-weight-bold" name="email" maxlength="255" aria-label="Small" aria-describedby="inputGroup-sizing-sm" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required><div class="invalid-feedback">Inserisci email.</div>

                    </div>
                    <div class="input-group mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm"><i class="material-icons">local_phone</i>&nbsp;Phone</span>
                        </div>
                        <input type="number" class="form-control form-control btn-outline-secondary:hover text-dark font-weight-bold" name="phone" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required onchange="return verificaNumero()"><div class="invalid-feedback">Inserisci numero di telefono.</div>
                    </div>


                </div>

                <button class="btn btn-lg btn-outline-warning btn-block" type="submit">Prosegui &nbsp; <i class='fas fa-rocket'></i></button>
            </form>


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
        <script src="js/loginScript.js"></script>

    </body>
</html>
