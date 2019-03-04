function verifica(){
	var mese=document.myForm3.MM.value;
	var anno=document.myForm3.MM.value;

	var id=document.myForm3.username.value;
	if(mese <0 || anno <0){
		window.alert("La data di scadenza non deve essere negativa");
		return false;
	}
	if(mese>12){
		window.alert("I mesi sono al massimo 12");
		return false;
	}

	if(document.myForm3.cardNumber.value.length!=16){
		window.alert("La carta deve essere di 16 caratteri");
		return false;
	}

	if(!isNaN(parseInt(id))){
		window.alert("Intestatario non può essere un numero");
		return false;
	}
	return true;
}

function verificaCarta(){
	var numCart=document.myForm3.cardNumber.value;
	if(isNaN(parseInt(numCart))){
		window.alert("Il numero della carta deve essere un numero");
		return false;
	}
}
