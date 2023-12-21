function sum_strings_task( str1 , str2 ) {

	var len = str1.length > str2.length ? str1.length : str2.length;
	
	var delta1 = len - str1.length;
	var delta2 = len - str2.length;
	
	str1 = '0'.repeat( delta1 ) + str1;
	str2 = '0'.repeat( delta2 ) + str2;
	
	var idx = len - 1;
	var dec_over = 0;
	var result = '';
	while( idx !== -1 ) {
		
		var digit1 = parseInt( str1[ idx ] , 10 );
		var digit2 = parseInt( str2[ idx ] , 10 );
		
		var sum = digit1 + digit2 + dec_over;
		
		var unit = sum % 10;
		var dec = Math.floor( sum / 10 );
		
		dec_over = dec;
		
		if( idx === 0 && dec > 0 ) {
			result = `${ dec }${ unit }${ result }`;
		}
		else {
			result = `${ unit }${ result }`;	
		}
		
		idx -= 1;
		
	};
	
	return result;
	
};
