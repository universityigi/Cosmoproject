<?php
require('/opt/lampp/pdf/fpdf.php');

$f_name=$_POST['nome'];
$f_cognome=$_POST['cognome'];
$f_email=$_POST['email'];
$f_biglietti=$_POST['biglietti'];
$f_datapar=$_POST['dataPart'];
$f_dataarr=$_POST['dataArr'];
$f_spapar=$_POST['spaPart'];
$f_spar=$_POST['spaArr'];
$f_prezzo=$_POST['prezzo'];
$f_coupon=$_POST['coupon'];

$pdf=new FPDF();

$pdf->AddPage();
$pdf->SetFont('Arial','B',19);


$pdf->Write(0,'Ricevuta ordine');

$pdf->Ln(5);

$pdf->Write(25,"Nome: ");
$pdf->Write(25,$f_name);
$pdf->Ln();

$pdf->Write(0,'Cognome: ');
$pdf->Write(0,$f_cognome);
$pdf->Ln();

$pdf->Write(25,'Email: ');
$pdf->Write(25,$f_email);
$pdf->Ln();

$pdf->Write(0,'Numero biglietti: ');
$pdf->Write(0,$f_biglietti);
$pdf->Ln();

$pdf->Write(25,'Data Andata: ');
$pdf->Write(25,$f_datapar);
$pdf->Ln();

$pdf->Write(0,'Data Ritorno: ');
$pdf->Write(0,$f_dataarr);
$pdf->Ln();

$pdf->Write(25,'Spazioporto di partenza: ');
$pdf->Write(25,$f_spapar);
$pdf->Ln();

$pdf->Write(0,'Spazioporto di arrivo: ');
$pdf->Write(0,$f_spar);
$pdf->Ln();

$pdf->Write(25,'Prezzo: ');
$pdf->Write(25,$f_prezzo);
$pdf->Ln();

$pdf->Write(0,'Coupon Luna: ');
$pdf->Write(0,$f_coupon);
$pdf->Ln();

$pdf->Output();
?>
