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
			'create with invalid year' , ()=> {
				
				expect( ()=> new Phone( 'Nokia' , 2050 ) )
				.toThrow(
					"Invalid year 2050"
				)
				
				expect( ()=> new Phone( 'Nokia' , 1900 ) )
				.toThrow(
					"Invalid year 1900"
				)
				
			} ,
		);
		
		test(
			'type number' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				expect( phone.typed_number ).toEqual( '' );
				
				phone.typed_number ='+72169660990';
				
				expect( phone.typed_number ).toEqual( '+72169660990' );
				
			} ,
		);
		
		test(
			'reset typed number' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				expect( phone.typed_number ).toEqual( '' );
				
				phone.typed_number = '+72169660990';
				
				expect( phone.typed_number ).toEqual( '+72169660990' );
				
				phone.typed_number = "";
				
				expect( phone.typed_number ).toEqual( '' );
				
			} ,
		);
		
		test(
			'call valid +7' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				phone.typed_number = '+72169660990';
				
				expect( phone.call() )
				.toEqual(
					'Calling +72169660990 ...'
				);
				
			} ,
		);
		
		test(
			'call valid 8' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				phone.typed_number = '82169660990';
				
				expect( phone.call() )
				.toEqual(
					'Calling 82169660990 ...'
				);
				
			} ,
		);
		
		test(
			'type invalid +7' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				expect(
					()=> {
						phone.typed_number = '+721696609901';
					}
				)
				.toThrow(
					"Invalid typed number +721696609901"
				);
				
			} ,
		);
		
		test(
			'type invalid 8' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				expect(
					()=> {
						phone.typed_number = '821696609901';
					}
				)
				.toThrow(
					"Invalid typed number 821696609901"
				);
				
			} ,
		);
		
		test(
			'type invalid' , ()=> {
				
				var phone = new Phone( 'Nokia' , 2012 );
				
				expect(
					()=> {
						phone.typed_number = '12345678910';
					}
				)
				.toThrow(
					"Invalid typed number 12345678910"
				);
				
			} ,
		);
		
	} ,
	
);
