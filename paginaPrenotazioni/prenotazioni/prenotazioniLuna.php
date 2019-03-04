<?php
session_start();
    $pianeta=$_GET["pianeta"];


$db_host='localhost';
$db_user='root';
$db_pass='Spsasc1997';
$db_name='cosmoproject';



$link = mysqli_connect('localhost', 'root', 'Spsasc1997');

mysqli_select_db($link,$db_name) or die("Impossibile connettersi al database");

$queryCoup="SELECT coupon FROM biglietto";
$resultCoup = mysqli_query($link,$queryCoup) or die("Impossibile  fare query");

$var="";
while ($line=mysqli_fetch_array($resultCoup, MYSQLI_ASSOC)){ foreach ($line as $col_value){$var.="$col_value";}}

?>

<!doctype html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Cosmoproject - Prenotazioni</title>


    <link href="../../css/bootstrap.css" rel="stylesheet">
    <link href="css/signin.css" rel="stylesheet" type="text/css">
    <link href="../../css/all.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
    <link rel="icon" href="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAxIDUxMi4wMDEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5Ny4wODEsMTQuOTE4QzQ4Ni41MzgsNC4zNzUsNDcxLjk2My0xLDQ1Ny4xMTYsMC4xNTRjLTQxLjI5MywzLjIyNC04MS44MjUsMTIuOTI1LTEyMC40NzEsMjguODMzICAgIGMtMzYuNTUyLDE1LjA0NS03Mi4wNTMsMzUuOTA4LTEwNC43OTMsNjIuOTkxYy0xOS42OSwxNi4yODgtMzcuNjEsMzQuMTU5LTUzLjY1NCw1My4zNzkgICAgYy00OS44MDEsMy4yNy05Ny4xNywyNS4xMjMtMTM0LjEyOCw2Mi4wODJjLTE3LjQ4NSwxNy40ODUtMzEuNzY2LDM3Ljc0MS00Mi40NDgsNjAuMjA2Yy0zLjA0Miw2LjM5OS0xLjcyOCwxNC4wMjEsMy4yODIsMTkuMDMgICAgYzMuMjEyLDMuMjEyLDcuNDk2LDQuOTA1LDExLjg0NCw0LjkwNWMyLjQzNSwwLDQuODktMC41MzEsNy4xODYtMS42MjNjMjYuMjEzLTEyLjQ2NCw1NC44MzUtMTguMDg2LDgyLjM4Mi0xNi40MDMgICAgYy0xLjk3NCw1LjgzNy0zLjgyMiwxMS43MjktNS41MzMsMTcuNjc3bC01My40ODksMzIuMDkzYy05LjM0NCw1LjYwNi0xMC45MTQsMTguNTEtMy4yMjUsMjYuMTk5bDI0LjcwMywyNC43MDMgICAgYy03Ljc3NiwxMC4xNzMtMTcuMjYzLDI0LjA1Ni0yNS4zMTYsMzcuOTM4Yy03LjE2OSwxMi4zNTgtMTIuMjk2LDIzLjEzMi0xNS4yNCwzMi4wMjJjLTUuMjExLDE1LjczOC0zLjg2MSwyNy43MTEsNC4wMTIsMzUuNTgzICAgIGM5LjMwNyw5LjMwNywyMi45OTEsOC4xODMsMzUuNTgzLDQuMDEyYzguODg5LTIuOTQ0LDE5LjY2My04LjA3MSwzMi4wMjItMTUuMjRjMTMuODgyLTguMDUyLDI3Ljc2NC0xNy41MzksMzcuOTM4LTI1LjMxNSAgICBsMjQuNzAzLDI0LjcwM2M3LjY2OCw3LjY2OCwyMC41NzEsNi4xNTQsMjYuMTk5LTMuMjI1bDMyLjA5My01My40ODljNS45NDgtMS43MSwxMS44NC0zLjU1OSwxNy42NzgtNS41MzMgICAgYzEuNjgyLDI3LjU0Ni0zLjk0MSw1Ni4xNjgtMTYuNDAzLDgyLjM4MmMtMy4wNDMsNi4zOTktMS43MjgsMTQuMDIxLDMuMjgyLDE5LjAzMWM1LjAxMSw1LjAxLDEyLjYzLDYuMzI0LDE5LjAzMSwzLjI4MiAgICBjMjIuNDY2LTEwLjY4Miw0Mi43MjItMjQuOTY0LDYwLjIwNi00Mi40NDhjMzYuOTU3LTM2Ljk1Nyw1OC44MTItODQuMzI3LDYyLjA4Mi0xMzQuMTI4YzE5LjIyLTE2LjA0MywzNy4wOS0zMy45NjQsNTMuMzc5LTUzLjY1NCAgICBjMjcuMDgzLTMyLjczOSw0Ny45NDQtNjguMjM4LDYyLjk5MS0xMDQuNzkxYzE1LjkwOC0zOC42NDYsMjUuNjA4LTc5LjE3OCwyOC44MzMtMTIwLjQ3MSAgICBDNTEzLjAwNSw0MC4wMjgsNTA3LjYyMywyNS40Niw0OTcuMDgxLDE0LjkxOHogTTU2LjAxMSwyNDQuMDM4YzMuNjk4LTQuNDgzLDcuNjEzLTguNzkyLDExLjc0MS0xMi45MTkgICAgYzIzLjQ2My0yMy40NjMsNTEuOC0zOS43MDksODIuMTUyLTQ3LjQ4MmMtMTEuODgxLDE4LjI1NC0yMi4yNDUsMzcuNDQ2LTMxLjAwNSw1Ny40MzQgICAgQzk4LjIxOSwyMzguNjMzLDc2LjkxNCwyMzkuNjY0LDU2LjAxMSwyNDQuMDM4eiBNODkuNDE3LDQzNS43NTljLTEyLjc5Miw3Ljg0OC0yMS43NywxMi4yMTQtMjcuODE5LDE0LjY0MyAgICBjMi40MjgtNi4wNDksNi43OTUtMTUuMDI3LDE0LjY0My0yNy44MTljNS42Mi05LjE2MSwxMS40ODgtMTcuNzE0LDE2LjQ0Ny0yNC40NDNsMjEuMTcyLDIxLjE3MiAgICBDMTA3LjEzMSw0MjQuMjcxLDk4LjU3Nyw0MzAuMTQsODkuNDE3LDQzNS43NTl6IE0xNzAuOTkyLDQyOS4wODJsLTg4LjA3NC04OC4wNzRsMjkuNjAxLTE3Ljc2MWw3Ni4yMzQsNzYuMjM0TDE3MC45OTIsNDI5LjA4MnogICAgIE0yNjcuOTYxLDQ1NS45ODdjNC4zNzUtMjAuOTAyLDUuNDA2LTQyLjIwOSwyLjk2Ny02Mi44ODZjMTkuOTg4LTguNzYxLDM5LjE4LTE5LjEyNCw1Ny40MzMtMzEuMDA1ICAgIEMzMTguOTIsMzk4Ljk2NCwyOTcuMDY1LDQzMS45ODMsMjY3Ljk2MSw0NTUuOTg3eiBNMjE0LjczLDM3OC4wOTZsLTgwLjgyNy04MC44MjZjMjYuODE3LTkwLjE2Niw4Ny4xNTgtMTY2Ljk0MiwxNjguNzkzLTIxNC41NyAgICBsMTI2LjYwMiwxMjYuNjAyQzM4Mi44MTcsMjg4Ljk3NiwzMDYuOTk4LDM1MC42NTQsMjE0LjczLDM3OC4wOTZ6IE00NzguNDU3LDUyLjI3N2MtMy40NjgsNDQuNDIyLTE0Ljg4Niw4Ni45MDctMzIuOTI1LDEyNS44OTggICAgTDMzMy44MjUsNjYuNDY4YzM4Ljk5MS0xOC4wMzksODEuNDc2LTI5LjQ1NywxMjUuODk4LTMyLjkyNWM1LjE1Ni0wLjQwNiwxMC4wMTMsMS4zOTMsMTMuNjc3LDUuMDU2ICAgIEM0NzcuMDY0LDQyLjI2Myw0NzguODYsNDcuMTIsNDc4LjQ1Nyw1Mi4yNzd6IiBmaWxsPSIjRkZEQTQ0Ii8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzQwLjA4NCwxNzEuOTE2Yy0yNi4xNDctMjYuMTQ4LTY4LjU3Ni0yNi4xNS05NC43MjQsMGMtMjYuMTE1LDI2LjExNi0yNi4xMTUsNjguNjA4LDAsOTQuNzI0ICAgIGMyNi4xMTQsMjYuMTE2LDY4LjYwOCwyNi4xMTcsOTQuNzI0LDBDMzY2LjE5OSwyNDAuNTI1LDM2Ni4xOTksMTk4LjAzMSwzNDAuMDg0LDE3MS45MTZ6IE0zMTYuNDAzLDI0Mi45NTkgICAgYy0xMy4wNTgsMTMuMDU3LTM0LjMwNCwxMy4wNTctNDcuMzYzLDBjLTEzLjA1OC0xMy4wNTgtMTMuMDU4LTM0LjMwNCwwLTQ3LjM2M2MxMy4wNTktMTMuMDYsMzQuMzAyLTEzLjA2LDQ3LjM2MiwwICAgIEMzMjkuNDYsMjA4LjY1NCwzMjkuNDYsMjI5LjkwMiwzMTYuNDAzLDI0Mi45NTl6IiBmaWxsPSIjRkZEQTQ0Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />

    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>


    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="css/sweetalert2.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


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
              <a class="nav-link js-scroll-trigger" href="prenotazioni.php?pianeta=nessuno">Prenota</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="../../index.html#team">Team</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <section id="meta" class="bg-transparent">
              <div class="col-lg-12 text-center text-warning">
                <h2 class="section text-uppercase">VIAGGIO OMAGGIO SULLA LUNA</h2>
            </div>
    </section>
        <form action="../datiUtente/datiUtente.php" class="form-signin " method="POST" name="myForm" onSubmit="return validaForm();">
            <div class="container">
                <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm"><i class="fa fa-ticket"></i>&nbsp;N° di biglietti</span>
                        </div>
                        <input type="text" name="biglietti" id="big" class="form-control form-control btn-outline-secondary:hovert text-dark font-weight-bold" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="1" required readonly>

                </div>
                <input type="text" name="cparea" value="<?php echo $var ?>" hidden>
                <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text text-dark font-weight-bold" id=""><i class='far fa-calendar-alt'></i>&nbsp;Data partenza e ritorno</span>
                        </div>
                        <input type="date" name="dataPart"class="form-control btn-outline-secondary:hover text-dark font-weight-bold" required>
                        <input type="date" name="dataArr" class="form-control btn-outline-secondary:hover text-dark font-weight-bold" required>
                </div>

                <select class="custom-select font-weight-bold mb-1" name="inputPartenza" onchange="verificaSpaziPorti();" required>
                    <option value="nessuno" disabled selected hidden>Spazioporto di partenza</option>
                    <option value="Mercurio">Mercurio</option>
                    <option value="Venere">Venere</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Giove">Giove</option>
                    <option value="Urano">Urano</option>
                    <option value="Nettuno">Nettuno</option>

                </select>
                <select class="custom-select font-weight-bold mb-1" name="inputArrivo" onchange="verificaSpaziPorti();" required>

                    <?php if($pianeta=='Luna') echo('<option value="Luna" selected>Luna</option>')?>


                </select>
                <select class="custom-select font-weight-bold mb-3" name="inputNavicella" required>
                    <option value="Exclusive" selected>Exclusive</option>
                </select>
                <div class="input-group mb-1">
                    <div class="input-group-prepend">
                         <span class="input-group-text text-dark font-weight-bold" id="inputGroup-sizing-sm" ><i class='fas fa-ticket-alt'></i>&nbsp;COUPON LUNA</span>
                    </div>
                    <input type="text" class="form-control form-control btn-outline-secondary:hover text-dark font-weight-bold" placeholder="Inserisci il coupon ricevuto" name="coupon" maxlength="20" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required>
                    <div class="invalid-feedback">Inserisci il codice ricevuto.</div>
                </div>
                <br>
                <button class="btn btn-lg btn-outline-warning btn-block" type="submit">Prosegui &nbsp; <i class='fas fa-rocket'></i></button>
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
        <script type="js/incrementa.js"></script>

        <!-- Plugin JavaScript -->
        <script src="../../js/jquery.easing.min.js"></script>
        <!-- Custom scripts for this template -->
        <script src="../../js/style.js"></script>
        <script src="js/loginScript.js"></script>
        <script src="js/sweetalert2.min.js"></script>


    </body>
</html>
