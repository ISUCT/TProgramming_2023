function count_deep_task( arr ) {

	return arr.reduce(
		( res , el , idx )=> {

			if( Array.isArray( el ) ) {

				return res += count_deep_task( el ) + 1;

			}
				
			return res += 1;

		} ,
		0 ,
	);

};
