function tower_task( floors_count ) {
	
	var space = ' ';
	var star = '*';
	
	return (
		Array.from(
			{ length : floors_count } ,
		)
		.reduce(
			( res , _ , idx )=> {
				
				var space_count = floors_count - 1 - idx;
				var space_str = space.repeat( space_count );
				
				var star_count = 1 + ( idx << 1 );
				var star_str = star.repeat( star_count );
				
				var floor = `${ space_str }${ star_str }${ space_str }`;
				
				res.push( floor );
				
				return res;
				
			} ,
			[] ,
		)
	);
	
};
