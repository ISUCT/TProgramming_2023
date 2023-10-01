import { Phone } from '../src/phone';


describe(

	'Phone constructor' , ()=> {
		
		test(
			'create' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				expect( phone.model ).toEqual( 'Nokia' );
				expect( phone.year ).toEqual( 2012 );
				
			} ,
		);
		
		test(
			'type number' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				expect( phone.typed_number ).toEqual( '' );
				
				phone.type_number( '+72169660990' );
				
				expect( phone.typed_number ).toEqual( '+72169660990' );
				
			} ,
		);
		
		test(
			'reset typed number' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				expect( phone.typed_number ).toEqual( '' );
				
				phone.type_number( '+72169660990' );
				
				expect( phone.typed_number ).toEqual( '+72169660990' );
				
				phone.reset_typed_number();
				
				expect( phone.typed_number ).toEqual( '' );
				
			} ,
		);
		
		test(
			'call valid +7' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				phone.type_number( '+72169660990' );
				
				expect( phone.call() )
				.toEqual(
					'Calling +72169660990 ...'
				);
				
			} ,
		);
		
		test(
			'call valid 8' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				phone.type_number( '82169660990' );
				
				expect( phone.call() )
				.toEqual(
					'Calling 82169660990 ...'
				);
				
			} ,
		);
		
		test(
			'call invalid +7' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				phone.type_number( '+721696609901' );
				
				expect( phone.call() )
				.toEqual(
					'+721696609901 is not valid phone number.'
				);
				
			} ,
		);
		
		test(
			'call invalid 8' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				phone.type_number( '821696609901' );
				
				expect( phone.call() )
				.toEqual(
					'821696609901 is not valid phone number.'
				);
				
			} ,
		);
		
		test(
			'call invalid' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				phone.type_number( '12345678910' );
				
				expect( phone.call() )
				.toEqual(
					'12345678910 is not valid phone number.'
				);
				
			} ,
		);
		
	} ,
	
);
