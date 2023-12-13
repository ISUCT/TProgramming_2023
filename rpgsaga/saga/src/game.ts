import { Hero } from "./hero";
import { Fighter } from "./fighter";


import {
	log_empty
	,
	log_round
	,
	log_versus_hp
	,
	log_round_winner
	,
	log_great_winner
} from "./log" ;


import { rand_hero , rand_arr_elem } from "./rand";
import { wait } from "./wait";



export
class Game
{

	
	constructor( hero_count : number )
	{
	
		if( hero_count <= 0 )
		{
			
			throw new Error(
				`Hero count should be positive.`
			);
			
		}
		
		
		if( ( hero_count & 0b1 ) === 1 )
		{
			
			throw new Error(
				"Hero count should be even."
			);
			
		}
		
		
				
		this.init_heroes( hero_count );
		
	};
	
	
	
	init_heroes( count : number )
	{
		
		for( var i = 0 ; i < count ; i ++ )
		{
			
			
			this.heroes[ i ] = rand_hero() ;
			
			
		};
		
	};
	
	
	heroes : Array< Hero > = [  ];
	
	
	
	async fight
	(
		hero_left : Hero
		,
		hero_right : Hero
	)
	{		
		
		var actor = hero_right;
		var target = hero_left;
		while(
			(
				( hero_left.hp !== 0 )
				&&
				( hero_right.hp !== 0 )
			)
		)
		{
			if( actor === hero_left )
			{
				
				actor = hero_right;
				target = hero_left;
				
			}
			
			else
			{
				actor = hero_left;
				target = hero_right;
			}
			
			
			
			actor.act( target ) ;
			log_versus_hp( hero_left , hero_right );
			
			log_empty();
			
			
			await wait( 3000 );
			
		};
		
		
		
		var winner = actor ;
		var loser = target ;
		
		
		return (
			{
				winner
				,
				loser
			}
		) ;
		
		
	};
	
	
	async round
	(
		idx : number
		,
		hero_left : Hero
		,
		hero_right : Hero
	)
	{
		
		log_round(
			idx
			,
			hero_left
			,
			hero_right
		);
		await wait( 2500 ) ;
		
		
		
		var fight_result = (
			
			await this.fight( hero_left , hero_right )
			
		);
		
		
		log_round_winner( fight_result.winner );
		log_empty();
		
		
		return (
			fight_result
		) ;
		
	};
	
	
	async competition()
	{		
		
		
		var round_idx = 0 ;
		
		
		while(
			this.heroes.length !== 1
		)
		{
			round_idx += 1 ;
			
			
			
			var hero_left = (
				rand_arr_elem( this.heroes )
			);
			
			var hero_right = (
				rand_arr_elem(
					this.heroes
						.filter(
							( h )=> (
								h !== hero_left
							)
						)
				)
			);
			
			
			
			var {
				winner
				,
				loser
			} = (
				await this.round(
					round_idx
					,
					hero_left
					,
					hero_right
				)
			);
			
			
			
			this.heroes = (
				this.heroes
					.filter(
						( hero )=> (
							hero !== loser
						)
					)
			);
			
			
			winner.recover();
			
			
			await wait( 1000 );
			
		};
		
		
		
		var great_winner = this.heroes[ 0 ] ;
		log_great_winner( great_winner );
		
		
	};
	
	
	
	run()
	{
		
		
		this.competition();
		
	};
	
	
	
} ;





var hero_count = (
	+ process.argv[ 2 ]
);


if( Number.isNaN( hero_count ) )
{
	
	throw new Error(
		`Hero count should be number.`
	);
	
}


var game = new Game( hero_count );

game.run();

