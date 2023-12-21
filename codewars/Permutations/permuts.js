function permuts_task( str ) {

	var units = str.split( '' );

	var permuts_set = units.reduce(
		( res , unit , idx )=> {

			var str_no_unit = (
				str.slice( 0 , idx )
				+
				str.slice( idx + 1 )
			);

			var str_no_unit_permuts = permuts( str_no_unit );
			if( str_no_unit.length === 0 ) { res.add( str ); return res };

			str_no_unit_permuts.forEach(
				( u )=> {

					var permut = unit + u;
					res.add( permut );

				}
			);

			return res;

		} ,
		new Set() ,
	);

	return Array.from( permuts_set );

};
