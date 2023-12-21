function array_merge_task( arr1 , arr2 ) {
	
	var arrs = [ arr1 , arr2 ];
	
	var len = (
		( arr1.length > arr2.length )
		? arr1.length
		: arr2.length
	);
	
	return (
		Array.from(
			{ length : len } ,
		).reduce(
			( res , _ , idx )=> {
				
				arrs.forEach(
					( arr )=> {
						var val = arr[ idx ]
						if( val !== undefined ) {
							res.push( val );
						}
					}
				);
				
				return res;
				
			} ,
			[] ,
		)
	);
	
};
