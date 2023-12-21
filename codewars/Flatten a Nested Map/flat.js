function is_obj( val ) {
	return val?.constructor === Object;
};

function flat( val , delimiter , prev_key , res ) {
	
	prev_key ??= '';
	res ??= {};
	
	if( !is_obj( val ) ) {
		res[ prev_key ] = val;
		return res;
	}
	
	Object.keys(
		val ,
	).forEach(
		( key )=> {
			
			var flat_key = `${ prev_key ? `${ prev_key }${ delimiter }` : '' }${ key }`;
			flat( val[ key ] , delimiter , flat_key , res ?? {} );
			
		} ,
	);
	
	return res;
	
};

function flat_task( struct ) {
	
	var delimiter = '/';
	return flat( struct , delimiter );
	
};
