function move_zeros_task( arr ) {

	var res = [];

	var zero_count = 0;
	arr.forEach(
		( el )=> {
			if( el === 0 ) { zero_count += 1 }
			else { res.push( el ) }
		}
	);

	return res.concat( Array.from( { length : zero_count } , ()=> 0 ) );

};
