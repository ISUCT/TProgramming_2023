function matrix_flat( mat ) {
	
	return (
		mat.reduce(
			( res , sub_arr )=> {
				
				res.push( ... sub_arr );
				return res;
				
			} ,
			[] ,
		)
	);
	
};

function arr_step_right( arr , from , fn ) {
	
	var next_idx = from + 1;
	var next_el = arr[ next_idx ];
	
	fn( next_el , next_idx );
	
};

function arr_step_left( arr , from , fn ) {
	
	var next_idx = from - 1;
	var next_el = arr[ next_idx ];
	
	fn( next_el , next_idx );
	
};

function arr_step_up( arr , size , from , fn ) {
	
	var next_idx = from - size;
	var next_el = arr[ next_idx ];
	
	fn( next_el , next_idx );
	
};

function arr_step_down( arr , size , from , fn ) {
	
	var next_idx = from + size;
	var next_el = arr[ next_idx ];
	
	fn( next_el , next_idx );
	
};

function arr_step( direction , arr , size , from , fn ) {
	
	if( direction === 0 ) {
		arr_step_right( arr , from ,fn );
	}
	else if( direction === 1 ) {
		arr_step_down( arr , size , from , fn );
	}
	else if( direction === 2 ) {
		arr_step_left( arr , from , fn );
	}
	else if( direction === 3 ) {
		arr_step_up( arr , size , from , fn );
	}
	
};

function snail_task( mat ) {
	
	var n = mat.length;
	
	var arr_flat = matrix_flat( mat );
	
	var steps = (
		Array.from(
			{ length : ( n << 1 ) - 1 } ,
		)
		.reduce(
			( res , _ , idx )=> {
				
				var val = n - idx - 1;
				
				if( val > 0 ) {
					var repeat_times = ( idx === 0 ? 3 : 2 );
					res.push( ... Array.from( { length : repeat_times } , ()=> val ) );
				}
				
				return res;
				
			} ,
			[] ,
		)
	);
	
	var current_direction = 0;
	function update_direction() {
		
		if( current_direction === 3 ) {
			current_direction = 0;
		}
		else {
			current_direction += 1;
		}
		
	};
	
	var stop_at = 0;
	var arr_jogged = (
		steps.reduce(
			( res , step_count )=> {
				
				for( var i = 1 ; i <= step_count ; i += 1 ) {
					
					arr_step(
						current_direction ,
						arr_flat ,
						n ,
						stop_at ,
						( el , idx )=> {
							res.push( el );
							stop_at = idx;
						} ,
					);
					
				};
				
				update_direction();
				
				return res;
				
			} ,
			[ arr_flat[ stop_at ] ] ,
		)
	);
	
	return arr_jogged;
	
};
