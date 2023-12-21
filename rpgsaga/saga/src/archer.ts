
import { Hero , Hero_type , Hero_act_effect } from "./hero";



export
class
Archer
extends
Hero
{
	
	type = "Archer" as Hero_type;
	
	
	static damage_range = [ 174 , 210 ];
	static damage_spread = [ 2 , 9 ];
	
	static hp_range = [ 520 , 578 ];
	
	
	
	constructor( config )
	{
		
		super( Object.assign( config , { miss_chance_init : 0.16 } ) );
	};
	
	
	spells = {
		arson : {
			chance : 0.30
			,
			action : ( target )=> ( this.arson_action( target ) )
		}
	};
	
	
	arson_procked = false;
	arson_action
	(
		target : Hero
	)
	{
		if( this.arson_procked )
		{
			
			return false ;
			
		}
		
		
		var arson_effect : Hero_act_effect = (
			( target )=> {
				
				var dmg_mult = 0.44 ;
				var dmg = this.damage_average * dmg_mult ;
			
				var dmg_deal = (
					target.perceive( dmg )
				);
				
				
				this.logger.log_act_effect(
					target
					,
					`loses ${ dmg_deal.toFixed(2) }hp`
					,
					"Arson"
				);
			}
		);
		
		
		var effect_percieved = (
			target.perceive_act_effect(
				arson_effect
			)
		);
		
		
		this.logger.log_spell(
			this
			,
			"Arson"
			,
			target
		);
		
		
		this.arson_procked = true ;
		
		return true ;
	};
	
	
	
	
};

