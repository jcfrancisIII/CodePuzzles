$(function() {
	var form = $('form'),
		resultTemplate = $('#result-template'),
		results = $('#results');
		
	resultTemplate.hide();
		
	form.on('submit', function() {

		var result = resultTemplate.children('.result').clone(),
			formInput = form.children('input[name=sentence]'),
			formVal = formInput.val();
		
		if (formVal === '') {
			return false;
		}
		
		result.children('p.input').text(formVal);
		
		console.log(formVal);
		if ( isPangram(formVal) === false ) {
			result.children('p.conclusion').addClass('wrong').text('This sentence is not a pangram!');
		} else {
			result.children('p.conclusion').addClass('right').text('This sentence is a pangram!');
		}
		
        results.prepend(result);

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
