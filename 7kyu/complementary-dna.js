// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells 
// and carries the "instructions" for the development and functioning of living organisms.


// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).


// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// my solution

function DNAStrand(dna){
    var result= "";
            for(var i =0; i<dna.length; i++) 
            {
          if (dna[i]==="A") 
         {
          result +="T";
         }
          else if (dna[i]==="T") 
         {
          result += "A";
          }
          else if (dna[i]==="C")
          {
          result +="G";
          }
          else if (dna[i]==="G")
          {
          result += "C";
          }
          else {
          result +=dna[i];
          }
           }
       return result;
}


function DNAStrand(dna){
    let newDNA = "";
    let dnaKeys = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    }; 
    for (let i = 0; i < dna.length; i++) {
      let char = dna[i];
      
      newDNA += dnaKeys[char];
    }
    return newDNA;
}



function DNAStrand(dna){
	var complements = {
  	A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
	return dna.split('').map(function(char) {
		return complements[char];
  }).join('');
}



function DNAStrand(dna){
    var code = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    }
    return dna.split('').map(function(i) { return code[i] }).join('')
}