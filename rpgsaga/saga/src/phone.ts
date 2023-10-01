export class Phone {
	
	model : string;
	year : number;
	
	constructor(
		model : string ,
		year : number ,
	) {
		
		this.model = model;
		this.year = year;
		
	};
	
	show_info() {
		console.log(
			`model: ${ this.model }\n${ this.year }`
		);
	};
	
	
	typed_number = '';
	
	type_number( number : string ) {
			
		this.typed_number = number;
		
	};
	
	show_typed_number() {
		console.log(
			`current typed number: ${ this.typed_number }`
		);
	};
	
	reset_typed_number() {
		this.type_number( '' );
	};
	
	
	private typed_number_valid() {
		
		var number = this.typed_number;
		
		if( number.startsWith( '+7' ) ) {
			return number.length === 12;
		}
		else if( number.startsWith( '8' ) ) {
			return number.length === 11;
		}
		
		return false;
		
	};
	
	
	call() {
		
		if(
			this.typed_number_valid()
		) {
			
			return (
				`Calling ${ this.typed_number } ...`
			);
			
		}
		else {
			
			return (
				`${ this.typed_number } is not valid phone number.`
			);
			
		}
		
	};
	
};
