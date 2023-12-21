function arr_from_matrix( matrix ) {
	return (
		matrix.reduce(
			( res , row )=> {
				res.push( ... row );
				return res;
			} ,
			[] ,
		)
	);
};

function tictac_task( field ) {

	var win_combos = [
		[ 0 , 1 , 2 ] ,
		[ 3 , 4 , 5 ] ,
		[ 6 , 7 , 8 ] ,
		[ 0 , 3 , 6 ] ,
		[ 1 , 4 , 7 ] ,
		[ 2 , 5 , 8 ] ,
		[ 0 , 4 , 8 ] ,
		[ 2 , 4 , 6 ] ,
	];

	var field_arr = arr_from_matrix( field );

	for( var i = 0 ; i < win_combos.length ; i += 1 ) {

		var combo = win_combos[ i ];

		if(
			( combo.every(
			( idx )=> ( field_arr[ idx ] === 1 )
			) )
			||
			( combo.every(
				( idx )=> ( field_arr[ idx ] === 2 )
			) )
		) {
			return field_arr[ combo[ 0 ] ];
		}

	};

	if( field_arr.includes( 0 ) ) {
		return -1;
	}
	else {
		return 0;
	}

};
