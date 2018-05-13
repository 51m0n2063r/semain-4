
function add(a, b){
r
	var resultat = Number(a) + Number(b);

	console.log(resultat);

	return resultat;

console.log(process.argv);

var nb1 = process.argv[2];
var nb2 = process.argv[3];

console.log("Nombre 1 " + nb1);
console.log("Nombre 2 " + nb2);

add(nb1, nb2);
