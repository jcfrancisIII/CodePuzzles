function isPangram(pangram) {
	var letter;
	newPangram = pangram.toLowerCase();
    for (var i = 0; i < 26; i++) {
		letter = String.fromCharCode(97 + i);
		if ( newPangram.indexOf(letter) === -1) {	
			return false;
		} else if ( i === 25 ) {
			return true;
		}
	}
}

console.log(isPangram("The quick brown fox jumped over the lazy dog"));
console.log(isPangram("A wizard's job is to vex chumps quickly in fog"));
console.log(isPangram("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"));
console.log(isPangram("This is not a pangram"));