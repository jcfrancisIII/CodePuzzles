$(function() {
	var form = $('form'),
		result = $('#result-template'),
		results = $('#results');
		
	form.on('submit', function() {

		var newResult = result.clone().show(),
			formInput = form.children('input[name=sentence]'),
			formVal = formInput.val();
		
		newResult.children('p.input').text(formVal);
		
		if ( isPangram(formVal) === true ) {
			newResult.children('p.conclusion').text('This sentence is not a pangram!');
		} else {
			newResult.children('p.conclusion').text('This sentence is a pangram!');
		}
		
        results.prepend(newResult);

        formInput.val('');

        return false;
    });
	
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

});
