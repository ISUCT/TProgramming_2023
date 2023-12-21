function missing_letter_task( arr ) {
	
	var start = arr[ 0 ].charCodeAt( 0 );
	
	for( var i = start ; i < ( arr.length + start ) ; i += 1 ) {
		
		var letter = String.fromCharCode( i );
		
		if( arr[ i - start ] !== letter ) {
			return letter;
		}
		
	};
	
};
