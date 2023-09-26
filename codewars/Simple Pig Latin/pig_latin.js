function pig_latin_task( str ) {
	return str.replace( /(\w)(\w+)/g , '$2$1ay' );
};
