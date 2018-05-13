
function divide(a, b){

	var resultat = NaN;


	if( Number(b) != 0){
		resultat = Number(a) / Number(b);
	}


	console.log(resultat);
	return resultat;
}

var nb1 = process.argv[2];
var nb2 = process.argv[3];

console.log("Nombre 1 " + nb1);
console.log("Nombre 2 " + nb2);
divide(nb1, nb2);
