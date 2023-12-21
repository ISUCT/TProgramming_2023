function capitalize( str ) {
	return (
		str[ 0 ].toUpperCase()
		+
		str.slice( 1 )
	);
};


function join_camel( parts ) {

	return parts.reduce(
		( res , part , idx )=> {

			if( idx === 0 ) {
				return res += part;
			}
			return res += capitalize( part );

		} ,

	);

};

function case_camel_task( str ) {

	var str_dash = str.replace( /[-_]/g , '_' );
	var str_parts = str_dash.split( '_' );

	return join_camel( str_parts );

};
