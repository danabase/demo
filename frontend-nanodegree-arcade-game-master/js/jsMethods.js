function dnaStrand(dna) {
 var arr = dna.split('');
 var newDna = '';
 for (var i = 0;i < arr.length; i++) {
 	if (arr[i] == 'A') {
 		newDna = newDna.concat('T');
 	} else if (arr[i] =='T') {
 		newDna = newDna.concat('A');
 	} else if (arr[i] =='C') {
 		newDna = newDna.concat('G');
 	} else if (arr[i] == 'G') {
 		newDna = newDna.concat('C');
 	};
 }
 return newDna;
};

console.log(dnaStrand('AAAA'));