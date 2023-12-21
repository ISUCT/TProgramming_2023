

import { Hero } from "./hero" ;


export class
Logger
{
	
	
	log = ( console.log );
	
	
	log_empty()
	{
		this.log(  );
	};
	
	
	log_round
	(
		idx : number
		,
		hero_left : Hero
		,
		hero_right : Hero
	)
	{
		
		var delim_symb = "-" ;
		
		var title_delim_len = 50 ;
		var title_delim = ( delim_symb.repeat( title_delim_len ) );
		var title = (
			`${ title_delim }ROUND ${ idx }${ title_delim }`
		);
		
		this.log( title );
		
		
		
		
		var versus_message = (
			`${ hero_left.to_string_with_stats() } vs. ${ hero_right.to_string_with_stats() }`
		);
		
		
		var versus_spacer_len = (
			( title.length - versus_message.length ) >> 1
		);
		var versus_spacer = (
			" ".repeat( versus_spacer_len )
		);
		
		var versus = (
			`${ versus_spacer }${ versus_message }`
		);
		
		
		this.log( versus ) ;
		
		
		
		var ending_len = title.length ;
		var ending = delim_symb.repeat( ending_len ) ;
		
		
		this.log( ending );
		
	};
	
	
	private construct_act_msg
	(
		actor : Hero
		,
		act : string
		,
		target : Hero
		,
		extra : string
	)
	{
		
		return (
			`${ actor } ${ act } ${ target }${ extra ? ( " " + extra + "." ) : "." }`
		);
		
	};
	
	private construct_attack_msg
	(
		actor : Hero
		,
		target : Hero
		,
		dmg_deal : number
	)
	{
		return (
			this.construct_act_msg(
				actor
				,
				"attacks"
				,
				target
				,
				`and deals ${ dmg_deal.toFixed( 2 ) }dmg`
			)
		);
	};
	
	
	
	log_attack
	(
		actor : Hero
		,
		target : Hero
		,
		dmg_deal : number
	)
	{
		
		this.log(
			this.construct_attack_msg(
				actor
				,
				target
				,
				dmg_deal
			)
		);
	
	};
	
	
	private construct_attack_miss_msg
	(
		actor : Hero
		,
		target : Hero
	)
	{
		
		return (
			this.construct_act_msg(
				actor
				,
				"attacks"
				,
				target
				,
				"but misses"
			)
		);
		
	};
	
	
	log_attack_miss
	(
		actor : Hero
		,
		target : Hero
	)
	{
		this.log(
			this.construct_attack_miss_msg(
				actor
				,
				target
			)
		);
		
	};
	
	
	private construct_spell_msg
	(
		actor : Hero
		,
		spell : string
		,
		target : Hero
		,
		extra? : string
	)
	{
		
		return (
			this.construct_act_msg(
				actor
				,
				`uses «${ spell }» on`
				,
				target
				,
				extra
			)
		);		
	};
	
	
	
	log_spell
	(
		actor : Hero
		,
		spell : string
		,
		target : Hero
		,
		extra? : string
	)
	{
		
		this.log(
			this.construct_spell_msg(
				actor
				,
				spell
				,
				target
				,
				extra
			)
		);
		
	};
	
	
	
	private construct_spell_attack_msg
	(
		actor : Hero
		,
		spell : string
		,
		target : Hero
		,
		dmg_deal : number
	)
	{
		
		return (
			this.construct_spell_msg(
				actor
				,
				spell
				,
				target
				,
				`and deals ${ dmg_deal.toFixed( 2 ) }dmg`
			)
		);
		
	};
	
	
	log_spell_attack
	(
		actor : Hero
		,
		spell : string
		,
		target : Hero
		,
		dmg_deal : number
	)
	{
		
		this.log(
			this.construct_spell_attack_msg(
				actor
				,
				spell
				,
				target
				,
				dmg_deal
			)
		);
		
	};
	
	
	private construct_act_effect_msg
	(
		target : Hero
		,
		action : string
		,
		effect : string
	)
	{
		var marker = "~~" ;
		
		var msg = (
			`${ target } ${ action } under the influence of «${ effect }»`
		);
		
		return (
			`${ marker }${ msg }${ marker }`
		);
	};
	
	
	log_act_effect
	(
		target : Hero
		,
		action : string
		,
		effect : string
	)
	{
		
		this.log(
			this.construct_act_effect_msg(
				target
				,
				action
				,
				effect
			)
		);
		
	} ;
	
	
	log_versus_hp
	(
		hero_left : Hero
		,
		hero_right : Hero
	)
	{
		
		var marker = "**" ;
		
		var message = (
			`${ hero_left }: ${ hero_left.hp.toFixed(2) }hp, ${ hero_right }: ${ hero_right.hp.toFixed(2) }hp`
		);
		
		
		this.log( `${ marker }${ message }${ marker }` );
		
	};
	
	
	
	log_round_winner( winner : Hero )
	{
		
		this.log( `! ${ winner } wins !` );
		
	};
	
	
	log_great_winner( winner : Hero )
	{
		
		this.log( `!!! ${ winner } is Great Winner !!!` );
	};
	
	
	
} ;
