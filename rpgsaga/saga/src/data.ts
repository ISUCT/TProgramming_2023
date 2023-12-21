import { Fighter } from "./fighter";
import { Archer } from "./archer";
import { Mage } from "./mage";



export var hero_names = (
	[
		"Maks"
		,
		"Edgar"
		,
		"Artem"
		,
		"Bor"
		,
		"Sid"
		,
		"Garri"
		,
		"Eric"
		,
		"Larri"
		,
		"Nort"
		,
		"Ceb"
		,
		"Greg"
		,
		"Zurh"
		,
		"Leopold"
		,
		"Pepper"
		,
		"Voland"
		,
		"Rembran"
		,
		"Torb"
		,
		"Alan"
		,
		"Fritz"
		,
		"Grek"
	]
);


export var hero_types = [  Archer , Fighter , Mage ];
export type Hero_type_class = typeof hero_types[ number ];

