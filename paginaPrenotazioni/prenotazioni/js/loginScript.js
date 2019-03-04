
var ritorno=null;
var coupon=null;

// controlla la form quando viene cliccato tasto conferma
function validaForm(){
	var spaPar=document.myForm.inputPartenza.value;
	var spaArr=document.myForm.inputArrivo.value;

	// controlla inserimento dello Spazioporto di partenza
	if(spaPar=="nessuno"){

		$(document).off('.alert.data-api');
		return false;
	}

	// controlla inserimento dello Spazioporto di arrivo
	if(spaArr=="nessuno"){
		window.alert("Inserire uno Spazioporto di arrivo");
		return false;
	}

	var data1=document.myForm.dataPart.value;
	var data2=document.myForm.dataArr.value;

	// controlla data partenza deve essere < data di ritorno
	if(data2<data1 && ritorno!=null){
		window.alert("Data non valida");
		return false;
	}

	// controllo che il coupon dell'area di testo che ci siamo nascosti sia uguale a quello
	// che la persona inserisce nell'input text "coupon" e inoltre controllo anche la dimensione
	if(!document.myForm.cparea.value.includes(document.myForm.coupon.value) || document.myForm.coupon.value.length!=10){
		window.alert("Coupon non valido");
		return false;
	}

	return true;
}

// verifico che gli Spazioporti debbano essere diversi
function verificaSpaziPorti(){
	var spaPar=document.myForm.inputPartenza.value;
	var spaArr=document.myForm.inputArrivo.value;
	if(spaPar==spaArr){
		window.alert("Lo Spazioporto di partenza deve essere diverso da quello in arrivo");
		return false;
	}
	return true;
}

// funzione che aumenta o diminuisce numero di biglietti
function upanddown(op,elemento){
    var c=document.myForm.elements[elemento];
    var v=parseInt(c.value);
    if(isNaN(v)){alert('Inserire un valore numerico nel campo '+c.name+'.'); return;}
	if(op=='+' && v>=10) {alert('Massimo numero di biglietti: 10'); return;}
	if(op=='+') v++;
	if(op=='-' && v>1 ) v--;
    c.value=v;
}

// funzione generare stringhe casuali
function guid() {
	function s4() {
	  return Math.floor((1 + Math.random()) * 0x10000)
		.toString(16)
		.substring(1);
	}
	return  'x'+s4() + s4()+'a';
  }


// funzione calcola prezzo prezzoTotale

function prezzoTotale(){

	// disabilito casella se è solo Andata o abilito se
	// viene scelta anche il ritorno
	if(document.myForm.customRadioInline1.value=="Andata"){
        document.myForm.dataArr.disabled=true;
	}
	else{
		document.myForm.dataArr.disabled=false;
	}

	if(document.myForm.coupon.value==""){
		document.myForm.coupon.value=guid();
		return;
	}

	var p_1=400;
	var p_2=800;
	var p_3=1200;
	var p_4=1600;
	var p_5=2000;
	var p_6=2400;
	var p_7=2800;
	var p_8=3200;
	var ec=100;
	var co=150;
	var bu=200;
	var ex=250;
	var spaPar=document.myForm.inputPartenza.value;
	var spaArr=document.myForm.inputArrivo.value;
	var numBig=document.myForm.biglietti.value;
	var nav=document.myForm.inputNavicella.value;

	if((spaPar=="Mercurio" && spaArr=="Venere" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Venere" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ec;
		return;
	}

	if((spaPar=="Mercurio" && spaArr=="Venere" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Venere" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*co;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Venere" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Venere" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*bu;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Venere" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Venere" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ex;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Terra" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Terra" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ec;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Terra" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Terra" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*co;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Terra" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Terra" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*co;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Terra" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Terra" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ex;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Marte" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Marte" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ec;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Marte" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Marte" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*co;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Marte" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Marte" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*bu;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Marte" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Marte" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ex;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Saturno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*ec;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Saturno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*co;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Saturno" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Saturno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*bu;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Saturno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*ex;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Giove" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Giove" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*ec;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Giove" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*co;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Giove" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Giove" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*bu;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Giove" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*ex;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Urano" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Urano" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_7*ec;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Urano" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_7*co;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Urano" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Urano" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_7*bu;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Urano" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_7*ex;
	}
	if((spaPar=="Mercurio" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Nettuno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_8*ec;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Nettuno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_8*co;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Nettuno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_8*bu;
		return;
	}
	if((spaPar=="Mercurio" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Nettuno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_8*ex;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Terra" && nav=="Economy" || spaArr=="Venere" && spaPar=="Terra" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ec;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Terra" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Terra" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*cp;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Terra" && nav=="Business" || spaArr=="Venere" && spaPar=="Terra" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*bu;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Terra" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Terra" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ex;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Marte" && nav=="Economy" || spaArr=="Venere" && spaPar=="Marte" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ec;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Marte" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Marte" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*co;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Marte" && nav=="Business" || spaArr=="Venere" && spaPar=="Marte" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*bu;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Marte" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Marte" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ex;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Venere" && spaPar=="Saturno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ec;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Saturno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*co;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Saturno" && nav=="Business" || spaArr=="Venere" && spaPar=="Saturno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*bu;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Saturno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ex;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Giove" && nav=="Economy" || spaArr=="Venere" && spaPar=="Giove" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*ec;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Giove" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*co;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Giove" && nav=="Business" || spaArr=="Venere" && spaPar=="Giove" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*bu;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Giove" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*ex;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Urano" && nav=="Economy" || spaArr=="Venere" && spaPar=="Urano" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*ec;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Urano" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*co;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Urano" && nav=="Business" || spaArr=="Venere" && spaPar=="Urano" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*bu;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Urano" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*ec;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Venere" && spaPar=="Nettuno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_7*ec;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Nettuno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_7*co;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Venere" && spaPar=="Nettuno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_7*bu;
		return;
	}
	if((spaPar=="Venere" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Nettuno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_7*ex;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Marte" && nav=="Economy" || spaArr=="Terra" && spaPar=="Marte" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ec;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Marte" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Marte" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*co;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Marte" && nav=="Business" || spaArr=="Terra" && spaPar=="Marte" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*bu;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Marte" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Marte" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ex;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Terra" && spaPar=="Saturno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ec;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Saturno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*co;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Saturno" && nav=="Business" || spaArr=="Terra" && spaPar=="Saturno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*bu;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Saturno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ex;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Giove" && nav=="Economy" || spaArr=="Terra" && spaPar=="Giove" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ec;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Giove" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*co;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Giove" && nav=="Business" || spaArr=="Terra" && spaPar=="Giove" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*bu;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Giove" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ex;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Urano" && nav=="Economy" || spaArr=="Terra" && spaPar=="Urano" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ec;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Urano" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*co;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Urano" && nav=="Business" || spaArr=="Terra" && spaPar=="Urano" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*bu;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Urano" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ex;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Terra" && spaPar=="Nettuno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ec;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Nettuno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*co;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Terra" && spaPar=="Nettuno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*bu;
		return;
	}
	if((spaPar=="Terra" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Nettuno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ex;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Marte" && spaPar=="Saturno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ec;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Marte" && spaPar=="Saturno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*co;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Saturno" && nav=="Business" || spaArr=="Marte" && spaPar=="Saturno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*bu;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Marte" && spaPar=="Saturno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ex;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Giove" && nav=="Economy" || spaArr=="Marte" && spaPar=="Giove" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ec;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Marte" && spaPar=="Giove" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*co;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Giove" && nav=="Business" || spaArr=="Marte" && spaPar=="Giove" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*bu;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Marte" && spaPar=="Giove" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ex;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Urano" && nav=="Economy" || spaArr=="Marte" && spaPar=="Urano" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ec;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Marte" && spaPar=="Urano" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*co;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Urano" && nav=="Business" || spaArr=="Marte" && spaPar=="Urano" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*bu;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Marte" && spaPar=="Urano" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ex;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Marte" && spaPar=="Nettuno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ec;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Marte" && spaPar=="Nettuno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*co;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Marte" && spaPar=="Nettuno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*bu;
		return;
	}
	if((spaPar=="Marte" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Marte" && spaPar=="Nettuno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ex;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Giove" && nav=="Economy" || spaArr=="Saturno" && spaPar=="Giove" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ec;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Saturno" && spaPar=="Giove" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*co;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Giove" && nav=="Business" || spaArr=="Saturno" && spaPar=="Giove" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*bu;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Saturno" && spaPar=="Giove" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ex;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Urano" && nav=="Economy" || spaArr=="Saturno" && spaPar=="Urano" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ec;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Saturno" && spaPar=="Urano" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*co;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Urano" && nav=="Business" || spaArr=="Saturno" && spaPar=="Urano" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*bu;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Saturno" && spaPar=="Urano" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ex;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Saturno" && spaPar=="Nettuno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ec;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Saturno" && spaPar=="Nettuno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*co;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Saturno" && spaPar=="Nettuno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*bu;
		return;
	}
	if((spaPar=="Saturno" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Saturno" && spaPar=="Nettuno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ex;
		return;
	}
	if((spaPar=="Giove" && spaArr=="Urano" && nav=="Economy" || spaArr=="Giove" && spaPar=="Urano" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ec;
		return;
	}
	if((spaPar=="Giove" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Giove" && spaPar=="Urano" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*co;
		return;
	}
	if((spaPar=="Giove" && spaArr=="Urano" && nav=="Business" || spaArr=="Giove" && spaPar=="Urano" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*bu;
		return;
	}
	if((spaPar=="Giove" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Giove" && spaPar=="Urano" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ex;
		return;
	}
	if((spaPar=="Giove" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Giove" && spaPar=="Nettuno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ec;
		return;
	}
	if((spaPar=="Giove" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Giove" && spaPar=="Nettuno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*co;
		return;
	}
	if((spaPar=="Giove" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Giove" && spaPar=="Nettuno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*bu;
		return;
	}
	if((spaPar=="Giove" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Giove" && spaPar=="Nettuno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ex;
		return;
	}
	if((spaPar=="Urano" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Urano" && spaPar=="Nettuno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ec;
		return;
	}
	if((spaPar=="Urano" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Urano" && spaPar=="Nettuno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*co;
		return;
	}
	if((spaPar=="Urano" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Urano" && spaPar=="Nettuno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*bu;
		return;
	}
	if((spaPar=="Urano" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Urano" && spaPar=="Nettuno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ex;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Mercurio" && nav=="Economy" || spaArr=="Luna" && spaPar=="Mercurio" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ec;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Mercurio" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Mercurio" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*co;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Mercurio" && nav=="Business" || spaArr=="Luna" && spaPar=="Mercurio" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*bu;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Mercurio" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Mercurio" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ex;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Venere" && nav=="Economy" || spaArr=="Luna" && spaPar=="Venere" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ec;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Venere" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Venere" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*co;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Venere" && nav=="Business" || spaArr=="Luna" && spaPar=="Venere" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*bu;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Venere" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Venere" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ex;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Terra" && nav=="Economy" || spaArr=="Luna" && spaPar=="Terra" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ec;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Terra" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Terra" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*co;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Terra" && nav=="Business" || spaArr=="Luna" && spaPar=="Terra" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*bu;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Terra" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Terra" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_1*ex;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Marte" && nav=="Economy" || spaArr=="Luna" && spaPar=="Marte" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ec;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Marte" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Marte" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*co;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Marte" && nav=="Business" || spaArr=="Luna" && spaPar=="Marte" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*bu;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Marte" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Marte" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_2*ex;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Luna" && spaPar=="Saturno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ec;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Saturno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*coo;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Saturno" && nav=="Business" || spaArr=="Luna" && spaPar=="Saturno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*bu;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Saturno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_3*ex;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Giove" && nav=="Economy" || spaArr=="Luna" && spaPar=="Giove" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ec;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Giove" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*co;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Giove" && nav=="Business" || spaArr=="Luna" && spaPar=="Giove" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*bu;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Giove" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_4*ex;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Urano" && nav=="Economy" || spaArr=="Luna" && spaPar=="Urano" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*ec;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Urano" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*co;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Urano" && nav=="Business" || spaArr=="Luna" && spaPar=="Urano" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*bu;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Urano" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_5*ex;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Luna" && spaPar=="Nettuno" && nav=="Economy")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*ec;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Nettuno" && nav=="Comfort")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*co;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Luna" && spaPar=="Nettuno" && nav=="Business")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*bu;
		return;
	}
	if((spaPar=="Luna" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Nettuno" && nav=="Exclusive")&& ritorno==null){
		document.myForm.prezzo.value=numBig*p_6*ex;
		return;
	}



   //
   //
   //CASI ANDATA E RITORNO
   //
   //



	if(spaPar=="Mercurio" && spaArr=="Venere" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Venere" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_1*ec*2;
		return;
	}

	if(spaPar=="Mercurio" && spaArr=="Venere" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Venere" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_1*co*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Venere" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Venere" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_1*bu*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Venere" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Venere" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_1*ex*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Terra" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Terra" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_3*ec*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Terra" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Terra" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_3*co*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Terra" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Terra" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_3*co*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Terra" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Terra" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_3*ex*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Marte" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Marte" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_4*ec*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Marte" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Marte" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_4*co*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Marte" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Marte" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_4*bu*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Marte" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Marte" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_4*ex*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Saturno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_5*ec*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Saturno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_5*co*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Saturno" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Saturno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_5*bu*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Saturno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_5*ex*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Giove" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Giove" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_6*ec*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Giove" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_6*co*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Giove" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Giove" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_6*bu*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Giove" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_6*ex*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Urano" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Urano" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_7*ec*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Urano" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_7*co*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Urano" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Urano" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_7*bu*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Urano" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_7*ex*2;
	}
	if(spaPar=="Mercurio" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Mercurio" && spaPar=="Nettuno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_8*ec*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Mercurio" && spaPar=="Nettuno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_8*co*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Mercurio" && spaPar=="Nettuno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_8*bu*2;
		return;
	}
	if(spaPar=="Mercurio" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Mercurio" && spaPar=="Nettuno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_8*ex*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Terra" && nav=="Economy" || spaArr=="Venere" && spaPar=="Terra" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_2*ec*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Terra" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Terra" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_2*cp*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Terra" && nav=="Business" || spaArr=="Venere" && spaPar=="Terra" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_2*bu*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Terra" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Terra" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_2*ex*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Marte" && nav=="Economy" || spaArr=="Venere" && spaPar=="Marte" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_3*ec*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Marte" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Marte" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_3*co*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Marte" && nav=="Business" || spaArr=="Venere" && spaPar=="Marte" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_3*bu*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Marte" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Marte" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_3*ex*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Venere" && spaPar=="Saturno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_4*ec*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Saturno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_4*co*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Saturno" && nav=="Business" || spaArr=="Venere" && spaPar=="Saturno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_4*bu*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Saturno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_4*ex*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Giove" && nav=="Economy" || spaArr=="Venere" && spaPar=="Giove" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_5*ec*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Giove" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_5*co*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Giove" && nav=="Business" || spaArr=="Venere" && spaPar=="Giove" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_5*bu*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Giove" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_5*ex*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Urano" && nav=="Economy" || spaArr=="Venere" && spaPar=="Urano" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_6*ec*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Urano" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_6*co*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Urano" && nav=="Business" || spaArr=="Venere" && spaPar=="Urano" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_6*bu*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Urano" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_6*ec*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Venere" && spaPar=="Nettuno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_7*ec*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Venere" && spaPar=="Nettuno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_7*co*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Venere" && spaPar=="Nettuno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_7*bu*2;
		return;
	}
	if(spaPar=="Venere" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Venere" && spaPar=="Nettuno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_7*ex*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Marte" && nav=="Economy" || spaArr=="Terra" && spaPar=="Marte" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_1*ec*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Marte" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Marte" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_1*co*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Marte" && nav=="Business" || spaArr=="Terra" && spaPar=="Marte" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_1*bu*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Marte" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Marte" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_1*ex*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Terra" && spaPar=="Saturno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_2*ec*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Saturno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_2*co*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Saturno" && nav=="Business" || spaArr=="Terra" && spaPar=="Saturno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_2*bu*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Saturno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_2*ex*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Giove" && nav=="Economy" || spaArr=="Terra" && spaPar=="Giove" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_3*ec*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Giove" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_3*co*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Giove" && nav=="Business" || spaArr=="Terra" && spaPar=="Giove" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_3*bu*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Giove" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_3*ex*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Urano" && nav=="Economy" || spaArr=="Terra" && spaPar=="Urano" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_4*ec*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Urano" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_4*co*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Urano" && nav=="Business" || spaArr=="Terra" && spaPar=="Urano" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_4*bu*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Urano" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_4*ex*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Terra" && spaPar=="Nettuno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_4*ec*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Terra" && spaPar=="Nettuno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_4*co*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Terra" && spaPar=="Nettuno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_4*bu*2;
		return;
	}
	if(spaPar=="Terra" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Terra" && spaPar=="Nettuno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_4*ex*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Marte" && spaPar=="Saturno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_1*ec*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Marte" && spaPar=="Saturno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_1*co*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Saturno" && nav=="Business" || spaArr=="Marte" && spaPar=="Saturno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_1*bu*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Marte" && spaPar=="Saturno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_1*ex*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Giove" && nav=="Economy" || spaArr=="Marte" && spaPar=="Giove" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_2*ec*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Marte" && spaPar=="Giove" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_2*co*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Giove" && nav=="Business" || spaArr=="Marte" && spaPar=="Giove" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_2*bu*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Marte" && spaPar=="Giove" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_2*ex*2
		;return;
	}
	if(spaPar=="Marte" && spaArr=="Urano" && nav=="Economy" || spaArr=="Marte" && spaPar=="Urano" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_3*ec*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Marte" && spaPar=="Urano" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_3*co*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Urano" && nav=="Business" || spaArr=="Marte" && spaPar=="Urano" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_3*bu*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Marte" && spaPar=="Urano" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_3*ex*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Marte" && spaPar=="Nettuno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_4*ec*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Marte" && spaPar=="Nettuno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_4*co*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Marte" && spaPar=="Nettuno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_4*bu*2;
		return;
	}
	if(spaPar=="Marte" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Marte" && spaPar=="Nettuno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_4*ex*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Giove" && nav=="Economy" || spaArr=="Saturno" && spaPar=="Giove" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_1*ec*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Saturno" && spaPar=="Giove" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_1*co*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Giove" && nav=="Business" || spaArr=="Saturno" && spaPar=="Giove" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_1*bu*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Saturno" && spaPar=="Giove" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_1*ex*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Urano" && nav=="Economy" || spaArr=="Saturno" && spaPar=="Urano" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_2*ec*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Saturno" && spaPar=="Urano" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_2*co*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Urano" && nav=="Business" || spaArr=="Saturno" && spaPar=="Urano" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_2*bu*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Saturno" && spaPar=="Urano" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_2*ex*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Saturno" && spaPar=="Nettuno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_3*ec*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Saturno" && spaPar=="Nettuno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_3*co*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Saturno" && spaPar=="Nettuno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_3*bu*2;
		return;
	}
	if(spaPar=="Saturno" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Saturno" && spaPar=="Nettuno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_3*ex*2;
		return;
	}
	if(spaPar=="Giove" && spaArr=="Urano" && nav=="Economy" || spaArr=="Giove" && spaPar=="Urano" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_1*ec*2;
		return;
	}
	if(spaPar=="Giove" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Giove" && spaPar=="Urano" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_1*co*2;
		return;
	}
	if(spaPar=="Giove" && spaArr=="Urano" && nav=="Business" || spaArr=="Giove" && spaPar=="Urano" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_1*bu*2;
		return;
	}
	if(spaPar=="Giove" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Giove" && spaPar=="Urano" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_1*ex*2;
		return;
	}
	if(spaPar=="Giove" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Giove" && spaPar=="Nettuno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_2*ec*2;
		return;
	}
	if(spaPar=="Giove" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Giove" && spaPar=="Nettuno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_2*co*2;
		return;
	}
	if(spaPar=="Giove" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Giove" && spaPar=="Nettuno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_2*bu*2;
		return;
	}
	if(spaPar=="Giove" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Giove" && spaPar=="Nettuno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_2*ex*2;
		return;
	}
	if(spaPar=="Urano" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Urano" && spaPar=="Nettuno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_1*ec*2;
		return;
	}
	if(spaPar=="Urano" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Urano" && spaPar=="Nettuno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_1*co*2;
		return;
	}
	if(spaPar=="Urano" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Urano" && spaPar=="Nettuno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_1*bu*2;
		return;
	}
	if(spaPar=="Urano" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Urano" && spaPar=="Nettuno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_1*ex*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Mercurio" && nav=="Economy" || spaArr=="Luna" && spaPar=="Mercurio" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_2*ec*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Mercurio" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Mercurio" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_2*co*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Mercurio" && nav=="Business" || spaArr=="Luna" && spaPar=="Mercurio" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_2*bu*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Mercurio" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Mercurio" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_2*ex*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Venere" && nav=="Economy" || spaArr=="Luna" && spaPar=="Venere" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_1*ec*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Venere" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Venere" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_1*co*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Venere" && nav=="Business" || spaArr=="Luna" && spaPar=="Venere" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_1*bu*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Venere" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Venere" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_1*ex*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Terra" && nav=="Economy" || spaArr=="Luna" && spaPar=="Terra" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_1*ec*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Terra" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Terra" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_1*co*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Terra" && nav=="Business" || spaArr=="Luna" && spaPar=="Terra" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_1*bu*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Terra" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Terra" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_1*ex*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Marte" && nav=="Economy" || spaArr=="Luna" && spaPar=="Marte" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_2*ec*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Marte" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Marte" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_2*co*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Marte" && nav=="Business" || spaArr=="Luna" && spaPar=="Marte" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_2*bu*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Marte" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Marte" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_2*ex*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Saturno" && nav=="Economy" || spaArr=="Luna" && spaPar=="Saturno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_3*ec*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Saturno" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Saturno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_3*co*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Saturno" && nav=="Business" || spaArr=="Luna" && spaPar=="Saturno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_3*bu*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Saturno" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Saturno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_3*ex*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Giove" && nav=="Economy" || spaArr=="Luna" && spaPar=="Giove" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_4*ec*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Giove" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Giove" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_4*co*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Giove" && nav=="Business" || spaArr=="Luna" && spaPar=="Giove" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_4*bu*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Giove" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Giove" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_4*ex*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Urano" && nav=="Economy" || spaArr=="Luna" && spaPar=="Urano" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_5*ec*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Urano" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Urano" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_5*co*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Urano" && nav=="Business" || spaArr=="Luna" && spaPar=="Urano" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_5*bu*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Urano" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Urano" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_5*ex*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Nettuno" && nav=="Economy" || spaArr=="Luna" && spaPar=="Nettuno" && nav=="Economy"){
		document.myForm.prezzo.value=numBig*p_6*ec*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Nettuno" && nav=="Comfort" || spaArr=="Luna" && spaPar=="Nettuno" && nav=="Comfort"){
		document.myForm.prezzo.value=numBig*p_6*co*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Nettuno" && nav=="Business" || spaArr=="Luna" && spaPar=="Nettuno" && nav=="Business"){
		document.myForm.prezzo.value=numBig*p_6*bu*2;
		return;
	}
	if(spaPar=="Luna" && spaArr=="Nettuno" && nav=="Exclusive" || spaArr=="Luna" && spaPar=="Nettuno" && nav=="Exclusive"){
		document.myForm.prezzo.value=numBig*p_6*ex*2;
		return;
	}
	else{
		document.myForm.prezzo.value=0;
		return;
	}
}
