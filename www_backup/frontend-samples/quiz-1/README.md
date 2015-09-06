## INSTRUCTIONS

Answer these questions:

- What will the effect and output of this script be?

    The effect will be a console log queueing up for 
    every i less than 10. Then each console log executes 
    after delays of 0 milliseconds, 1000ms, 2000ms,..., 
	up to 10000ms. The reference to i increments fast, so
	each console log is "10".
	
- What did the developer probably intend it to output?
    
	The developer probably intended to count 1 to 10 
	each second in the console. Among other reasons, 
	this might be useful to see that CSS animations, 
	transitions, or keyframes are happening at the expected
	times after an event. 
	
- Why does it not do this?
    
	The console always shows "10" because the reference 
	to i increments almost immediately, while the delay
	is calculated for each second as expected. After one 
	second i is	already "10".
	
- How could you fix it to do that?

    You can make a closure to keep each increment of i
	as it changes for each console log. i will need to
	be applied to a new environment as a new variable for
	each increment.
	
	My code: 
		function countTo(amount) {
			for (var i = 1; i <= amount; i++)
			{
				setTimeout(function (second) {
					return function() {console.log(second)};
				}(i), i * 1000);
			}
		}

		countTo(10);