import { Hero , Hero_type } from "./hero";

import { log_spell_attack } from "./log" ;



export
class
Fighter
extends
Hero
{
	type = "Fighter" as Hero_type;
	
	static damage_range = [ 129 , 169 ];
	static damage_spread = [ 4 , 12 ];
	
	static hp_range = [ 490 , 550 ];
	
	
	
	constructor(
		config
	)
	{
		
		super( Object.assign( config , { miss_chance_init : 0.15 } ) );
	};
	
	
	
	spells = (
		{
			smash : {
				chance : 0.195
				,
				action : (target)=> ( this.smash_action( target ) )
			}
		}
	);
	
	smash_action( target : Hero )
	{
		
		
		var crit_mult = 2.15 ;
		var crit_dmg = (
			this.damage * crit_mult
		);
		
		var dmg_deal = (
			target.perceive( crit_dmg )
		);
		
		
		log_spell_attack(
			this
			,
			"Smash"
			,
			target
			,
			dmg_deal
		) ;
		
		
		return true ;
		
	};
	
};

