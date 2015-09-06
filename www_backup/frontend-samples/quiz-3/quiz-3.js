function sortWords(sentence) {
	function compareWordLength(a, b) {
	  return a.length - b.length;
	}
	return sentence.split(' ').sort(compareWordLength).join(' ');
}

console.log(sortWords("The quick brown fox jumped over the lazy dog"));

console.log(sortWords("A wizard's job is to vex chumps quickly in fog"));

console.log(sortWords("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"));
