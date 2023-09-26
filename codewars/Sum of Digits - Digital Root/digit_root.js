function digit_sum( num ) {
	
	var rest = num;
	
	var result = 0;
	while ( rest !== 0 ) {
		
		result += rest % 10;
		rest = Math.floor( rest / 10 );
		
	};
	
	return result;
	
};

function digit_root_task( num ) {
	
	var sum = digit_sum( num );
	while( sum >= 10 ) {
		sum = digit_sum( sum );
	};
	
	return sum;
	
};
