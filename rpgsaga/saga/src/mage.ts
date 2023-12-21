
import { Hero , Hero_type , Hero_attack_result } from "./hero";




export
class
Mage
extends
Hero
{
	
	type = "Mage" as Hero_type ;
	
	static damage_range = [ 130 , 190 ];
	static damage_spread = [ 3 , 12 ];
	
	static hp_range = [ 510 , 580 ];
	
	
	miss_chance_after_oblivious = 0.185 ;
	
	
	constructor( config )
	{
		
		super( Object.assign( config , { miss_chance_init : 0.14 } ) );
		
	};
	
	
	spells = {
		oblivious : {
			chance : 0.25
			,
			action : ( target )=> ( this.oblivious_action( target ) )
		}
	};
	
	
	oblivious_prev_act = false ;
	oblivious_action
	(
		target : Hero
	)
	{
		
		if( this.oblivious_prev_act )
		{
			return false ;
		}
		
		
		
		target.perceive_act_allowed(  false  );
		
		
		var act_missed_count = 2 ;
		
		
		var missed = 1 ;
		var oblivious_effect = (
			( target )=> {
				
				
				this.logger.log_act_effect(
					target
					,
					"misses an act"
					,
					"Oblivious"
				);
				
				if( missed === act_missed_count )
				{
					
					target.perceive_act_allowed( true );
					
				
					/* Self-remove */
					target.perceive_act_effect_remove(
						oblivious_effect
					);
					
				}
				
				else
				{
					
					missed += 1 ;
				}
				
				
			}
		);
		
		
		target.perceive_act_effect(
			oblivious_effect
		);
		
		
		this.logger.log_spell(
			this
			,
			"Oblivious"
			,
			target
		);
		
		
		this.oblivious_prev_act = true ;
		
		
		return true ;
		
	};
	
	
	
	override attack( target : Hero )
	{
		
		var attack_result : Hero_attack_result ;
		
		if( this.oblivious_prev_act )
		{
			
			this.miss_chance = (
				this.miss_chance_after_oblivious
			);
			
			attack_result = ( super.attack( target ) );
			
			this.restore_miss_chance();
			
		}
		
		else
		{
			attack_result = super.attack( target ) ;
		}
		
		
		return attack_result;
		
	};
	
	
	
	override act( target : Hero )
	{
		
		var act_result = (
			super.act( target )
		);
		
		this.oblivious_prev_act = (
			act_result === "oblivious"
		);
		
		return act_result ;
		
	};
	
	
	
};

