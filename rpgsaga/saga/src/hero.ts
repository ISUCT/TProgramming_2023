
import { Logger } from "./logger" ;



import { rand_range } from "./rand";



type Hero_config = {
	name : string ;
	hp : number ;
	damage_range : [ number  , number ] ;
	miss_chance_init : number ;
	logger : Logger ;
};

export type Hero_type = (
	| "Fighter"
	| "Archer"
	| "Mage"
);


export type Hero_attack_result = (
	| "miss"
	| "attack"
);


export type Hero_spell = {
	action : ( target : Hero )=> boolean ;
	chance : number ;
};


export type Hero_act_effect = (
	( target : Hero )=> void
);




export
abstract class
Hero
{
	
	
	abstract type : Hero_type ;
	
	name : string ;
	
	
	toString()
	{
		return (
			`${ this.type } ${ this.name }`
		);
	};
	
	to_string_with_stats()
	{
		
		return (
			`${ this }([${ this.damage_range[0] }, ${ this.damage_range[1] }], ${ this.hp })`
		);
		
	};
	
	
	private _hp_init : number;
	private _hp ;
	get hp() {
		return this._hp;
	};
	set hp( val )
	{
		if( val < 0 )
		{
			this._hp = 0;
		}
		
		else
		{
			this._hp = val;
		}
	};
	
	restore_hp()
	{
		this.hp = this._hp_init ;
	};
	
	
	damage_range : [ number , number ] ;
	get damage()
	{
		return (
			rand_range(
				this.damage_range[ 0 ]
				,
				this.damage_range[ 1 ]
			)
		);
	};
	get damage_average()
	{
		return (
			( this.damage_range[ 0 ] + this.damage_range[ 1 ] ) >> 1
		);
	};
	
	
	protected miss_chance_init : number ;
	miss_chance : number ;
	
	restore_miss_chance()
	{
		this.miss_chance = this.miss_chance_init;
	};
	
	
	spells = { } as Record< string , Hero_spell > ;
	
	perceive( damage : number )
	{
		
		return (
			this.hp
			-
			( this.hp -= damage )
		) ;
		
	};
	
	
	protected act_effects : Array< Hero_act_effect > = [ ];
	
	perceive_act_effect( effect : Hero_act_effect )
	{
		this.act_effects.push( effect );
	};
	
	perceive_act_effect_remove
	( effect : Hero_act_effect )
	{
		
		this.act_effects = (
			this.act_effects
				.filter(
					( effect2 )=> ( effect2 !== effect )
				)
		);
	};
	
	protected apply_act_effects()
	{
		
		this.act_effects
			.forEach(
				( effect )=> { effect( this ) }
			)
	};
	
	protected purge_act_effects()
	{
		this.act_effects.length = 0;
	};
	
	
	
	recover()
	{
		
		this.restore_hp();
		this.restore_miss_chance();
		this.restore_act_allowed();
		this.purge_act_effects();
	};
	
	
	
	protected logger : Logger
	
	constructor( config : Hero_config )
	{
		
		var {
			name
			,
			hp
			,
			damage_range
			,
			miss_chance_init
			,
			logger
		} = config ;
		
		this.name = name ;
		
		this._hp_init = hp;
		this._hp = this._hp_init;
		
		this.damage_range = damage_range ;
		
		this.miss_chance_init = miss_chance_init;
		this.miss_chance = this.miss_chance_init ;
		
		this.logger = logger ;
	};
	
	
	
	
	protected prock_spell( target : Hero  )
	{
		
		
		var procked_name : string | undefined = (
			undefined 
		);
		
		
		var rand = Math.random();
		for( var spell_name in this.spells )
		{
			var spell = this.spells[ spell_name ]
			
			if( rand < spell.chance )
			{
				
				
				if( spell.action( target ) )
				{
					procked_name = spell_name ;
					break ;
				}
				
				
			};
			
		};
		
		return procked_name ;
		
	};
	
	
	
	protected attack( target : Hero )
	: Hero_attack_result
	{
		var rnd = Math.random();
		if( rnd < this.miss_chance )
		{
			
			this.logger.log_attack_miss(
				this
				,
				target
			);
			
			return "miss" ;
			
		}
		
		else
		{
			
			var dmg_deal = (
				target.perceive( this.damage )
			);
			
			this.logger.log_attack( this , target , dmg_deal );
			
			
			return "attack" ;
			
		}
		
	};
	
	
	
	act_allowed = true ;
	
	perceive_act_allowed
	( val : boolean )
	{
		this.act_allowed = val ;
	};
	
	restore_act_allowed()
	{
		this.act_allowed = true ;
	};
	
	
	act( target : Hero )
	{
		
		var act_result : string | undefined = (
			undefined
		) ;
		
		
		if( this.act_allowed )
		{
			
			var spell_procked_name = (
				this.prock_spell( target )
			);
			
			
			if( ! spell_procked_name )
			{
				
				act_result = (
					this.attack( target )
				);
				
			}
			
			else
			{
				act_result = spell_procked_name ;
			}
			
		}
		
		
		this.apply_act_effects();
		
		
		return act_result ;
		
	};
	
	
};

