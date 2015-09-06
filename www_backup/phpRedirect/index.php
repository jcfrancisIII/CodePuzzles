<!-- 
Insert the php before any html on the careers page even be for doctype.
For example:

<redirect php>
<!doctype html> 

-->
<?php
	//******************************
	//********CONFIGURATION*********
	//******************************

	$MSIENEW_URL = "";//Put your url for IE10 and better here for example "/ie10/"
	$MSIEOLD_URL = "";//Put your url for IE8 and below here for example "/ie8/"
	$FIREFOX_URL = "";//Put your url for Firefox and better here for example "/firefox/"
	$CHROME_URL = "";//Put your url for Chrom and better here for example "/chrome/"
 
	//******************************
	//******************************

	// Redirection code
	$HTTP_USER_AGENT = $_SERVER['HTTP_USER_AGENT'];
	
	// Test a string for a sub string in this case user agents are tested for browser types
	function str_present($str,$substr)
	{
		$pos = strpos($str,$substr);

		if($pos === false) {
		 return false;
		}
		else {
		 return true;
		}
	}

	if (preg_match('/(?i)msie [2-8]/',$HTTP_USER_AGENT)) 
	{
		Header ("Location: " . $MSIEOLD_URL);
	}
	
	else if (preg_match('/(?i)msie 10/', $HTTP_USER_AGENT) || preg_match('/(?i)trident\/[7-9]/', $HTTP_USER_AGENT)) 
	{
		Header ("Location: " . $MSIENEW_URL);
	}
	
	else if (str_present($HTTP_USER_AGENT, "Firefox"))
	{ 
		Header ("Location: " . $FIREFOX_URL);
	}
		
	else if (str_present($HTTP_USER_AGENT, "Chrome"))
	{ 
		Header ("Location: " . $CHROME_URL);
	}

?>