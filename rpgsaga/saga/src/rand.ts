import  {
	hero_names
	,
	hero_types
	,
	Hero_type_class
} from "./data" ;

import { Logger } from "./logger";


export function rand_range(
	min : number
	,
	max : number
) {
	
	return (
		( Math.random() * ( max - min ) ) + min
	);
	
};


export function rand_range_int(
		min : number ,
		max : number ,
) {
	
	return (
		Math.round(
			rand_range( min , max )
		)
	);
	
};


export function rand_arr_elem
< Elem >
( arr : Array< Elem > )
: Elem
{
	return (
		arr[ rand_range_int( 0 , arr.length - 1 ) ]
	);
	
};






function rand_hero_name()
{
	
	return (
		rand_arr_elem( hero_names )
	);
	
};



function rand_hero_damage_range( type : Hero_type_class )
{
	var range = type.damage_range;
	var spread = type.damage_spread ;
	
	
	var min = (
		rand_range_int(
			range[ 0]
			,
			range[ 1 ]
		)
	);
	
	
	var max_min = min + spread[ 0 ] ;
	var max_max = min + spread[ 1 ] ;
	
	var max = (
		rand_range_int(
			max_min
			,
			max_max
		)
	);
	
	
	return (
		[  min , max  ]
	);
	
};


function rand_hero_hp
( type : Hero_type_class )
{
	return (
		rand_range_int(
			type.hp_range[ 0 ]
			,
			type.hp_range[ 1 ]
		)
	);
};



function rand_hero_type()
{
	
	return (
		rand_arr_elem( hero_types )
	);
	
	
};


export function rand_hero
( logger : Logger )
{
	var hero_type = rand_hero_type();
	
	return (
		new (hero_type)
		(
			{
				name : rand_hero_name()
				,
				hp : rand_hero_hp( hero_type )
				,
				damage_range : rand_hero_damage_range( hero_type )
				,
				logger
			}
		)
	);
	
};

