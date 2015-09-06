function countTo(amount) {
	for (var i = 1; i <= amount; i++)
	{
		setTimeout(function (second) {
			return function() {console.log(second)};
		}(i), i * 1000);
	}
}

countTo(10);
