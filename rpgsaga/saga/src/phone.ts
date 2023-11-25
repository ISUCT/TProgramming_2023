export class Phone {
	
	private _model : string;
	get model() { return this._model };
	set model( model : string ) {
		this._model = model;
	};
	
	private _year : number;
	get year() { return this._year };
	set year ( year : number ) {
		
		if( year < 1980 || year > 2023 ) {
			
			throw new Error(
				`Invalid year ${ year }`
			);
			
		}
		
		this._year = year;
		
	};
	
	constructor(
		model : string ,
		year : number ,
	) {
		
		this.model = model;
		this.year = year;
		
	};
	
	toString(){
		return (
			`model: ${ this.model }. ${ this.year }`
		);
	};
	
	private _typed_number = '';
	get typed_number() { return this._typed_number };
	
	set typed_number( num : string )
	{
		
		if( !this.number_valid( num ) ) {
			throw new Error(
				`Invalid typed number ${ num }`
			);
		}
					
		this._typed_number = num;
		
	};
		
	show_typed_number() {
		console.log(
			`current typed number: ${ this.typed_number }`
		);
	};
	
	
	private number_valid( number : string ) {
		
		if( number === "" ) return true;
		
		if( number.startsWith( '+7' ) ) {
			return number.length === 12;
		}
		else if( number.startsWith( '8' ) ) {
			return number.length === 11;
		}
		
		return false;
		
	};
	
	
	call() {			
		return (
			`Calling ${ this.typed_number } ...`
		);		
	};
	
};
