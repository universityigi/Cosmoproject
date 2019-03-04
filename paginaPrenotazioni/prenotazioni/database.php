<?php

session_start();

$db_name='cosmoproject';

$nome=$_SESSION['nome'];
$cognome=$_SESSION['cognome'];
$email=$_SESSION['email'];
$biglietti=$_SESSION['biglietti'];
$datapar=$_SESSION['datapart'];
$dataarr=$_SESSION['dataarr'];
$spapar=$_SESSION['spar'];
$spaar=$_SESSION['spaarr'];
$prezzo=$_SESSION['pre'];
$coupon=$_SESSION['coup'];



$link = mysqli_connect('localhost', 'root', 'Spsasc1997');

mysqli_select_db($link,$db_name) or die("Impossibile connettersi al database");

$sql="INSERT INTO biglietto(nome,cognome,email,nbiglietti,datapartenza,dataarrivo,partenza,arrivo,coupon) VALUES ('$nome', '$cognome', '$email','$biglietti','$datapar','$dataarr','$spapar','$spaar','$coupon')";
if (!mysqli_query($link, $sql)) {
echo "Error: " . $sql . "<br>" . mysqli_error($link);
}
mysqli_close($link);


?>
 <!DOCTYPE html>
 <html>
 <head>
   <meta charset="utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <title>Page Title</title>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
   <script src="main.js"></script>
 </head>
 <body>
 <html lang="en">
    <head>
    <meta charset="utf-8">
        <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <link href="../../css/bootstrap.css" rel="stylesheet">
    <link href="../datiUtente/css/datiUtente.css" rel="stylesheet" type="text/css">
    <link href="css/signin.css" rel="stylesheet" type="text/css">

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
        <section id="contact" class="bg-transparent">
                  <div class="col-lg-12 mb-0 text-center text-warning">
                    <h2 class="section text-uppercase">Riepilogo</h2>
                </div>
        </section>

        <form action="riepilogo.php" class="form-signin " align="center" method="POST" name="myForm2" novalidate>
            <div class="container">

                <div class="input-group mb-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm"><i class="material-icons">person</i>&nbsp;Nome</span>
                    </div>
                    <input type="text" class="form-control form-control btn-outline-secondary:hover text-dark font-weight-bold" name="nome" maxlength="20" aria-label="Small" value="<?php echo($nome);?>"aria-describedby="inputGroup-sizing-sm" readonly>

                </div>
                <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm"><i class="material-icons">person</i>&nbsp;Cognome</span>
                        </div>
                        <input type="text" class="form-control form-control btn-outline-secondary:hover text-dark font-weight-bold"  name="cognome" maxlength="20" aria-label="Small" value="<?php echo($cognome); ?>" aria-describedby="inputGroup-sizing-sm" readonly>

                </div>

                <div class="input-group mb-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm">@&nbsp;Email</span>
                    </div>
                    <input type="email" class="form-control form-control btn-outline-secondary:hover text-dark font-weight-bold" name="email" maxlength="255" aria-label="Small" value="<?php echo($email); ?>" aria-describedby="inputGroup-sizing-sm" readonly>

                </div>
                <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm"><i class="fa fa-ticket"></i>&nbsp;N° di biglietti</span>
                        </div>
                        <input type="text" name="biglietti" id="big" class="form-control form-control btn-outline-secondary:hovert text-dark font-weight-bold" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="<?php echo($biglietti); ?>"  readonly>
                </div>
                <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text text-dark font-weight-bold" id=""><i class='far fa-calendar-alt'></i>&nbsp;Data partenza e ritorno</span>
                        </div>
                        <input type="date" name="dataPart"class="form-control btn-outline-secondary:hover text-dark font-weight-bold" value="<?php echo($datapar); ?>" readonly>
                        <input type="date" name="dataArr" class="form-control btn-outline-secondary:hover text-dark font-weight-bold" value="<?php echo($dataarr); ?>" readonly>
                </div>
                <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text text-dark font-weight-bold" id=""><i class='far fa-calendar-alt'></i>&nbsp;Spazioporto partenza e arrivo</span>
                        </div>
                        <input type="text" name="spaPart"class="form-control btn-outline-secondary:hover text-dark font-weight-bold" value="<?php echo($spapar); ?>" readonly>
                        <input type="text" name="spaArr" class="form-control btn-outline-secondary:hover text-dark font-weight-bold" value="<?php echo($spaar); ?>" readonly>
                </div>
                <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm"><i class="material-icons">euro_symbol</i>&nbsp;Prezzo</span>
                        </div>
                        <input type="text" name="prezzo" id="big" class="form-control form-control btn-outline-secondary:hovert text-dark font-weight-bold" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="<?php if($prezzo=='null') echo('0'); else echo($prezzo); ?>"  readonly>
                </div>
                <div class="input-group mb-4">
                    <div class="input-group-prepend">
                         <span class="input-group-text text-dark font-weight-bold" name="coup" id="inputGroup-sizing-sm"><i class='fas fa-ticket-alt'></i>&nbsp;COUPON</span>
                    </div>
                    <input type="text" class="form-control form-control btn-outline-secondary:hover text-dark font-weight-bold" name="coupon" maxlength="20" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="<?php echo($coupon);?>" readonly>
                </div>
            <div class="row ">
            <a type="button" class="btn btn-lg btn-outline-warning ml-3 mr-3"  href="../../indexpopup.html" target="_blank" style="color:white;">Torna alla home &nbsp; <i class='fas fa-rocket'></i></a>
            <button class="btn btn-lg btn-outline-danger" type="submit">Scarica ricevuta &nbsp;<i class="fa fa-file-pdf-o"></i></button>
            </div>
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
