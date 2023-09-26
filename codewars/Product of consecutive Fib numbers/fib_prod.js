function fib_prod_task( prod , fib1 , fib2 ) {

	var current_prod = fib1 * fib2;
	if( current_prod === prod ) {
		return [ fib1 , fib2 , true ];
	}
	else if( current_prod > prod ) {
		return [ fib2 - fib1 , fib1 , false ];
	}
	else {
		var next = fib1 + fib2;
		var nenext = next + fib2;
		return fib_prod( prod , next , nenext );
	};

};

function fib_prod_task( prod ) {
	return fib_prod( prod , 0 , 1 );
};
