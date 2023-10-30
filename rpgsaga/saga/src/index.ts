// import { Art } from './art';
// import { Movie } from './movie';
// import { Book } from './book';

// const film1 = new Movie("Back to the Future", 1985, "Robert Zemeckis");

// console.log(film1.toString());
// film1.play();
// film1.pause();
// film1.pause();
// film1.play();
// film1.play();

// film1.volume(29);
// film1.volume(99);
// film1.volume(99999);
// film1.volume(-1);

// film1.year = 1894;

// console.log(`MOVIE INFO
// Title: ${film1.title}
// Year: ${film1.year}
// Director: ${film1.director}
// `);


// const film2 = new Movie("Star Wars: Episode I - The Phantom Menace", 1999, "George Lucas");

// film2.title = "Star Wars";
// film2.year = 1977;

// film1.volume(100);
// film1.play();

// console.log("Movi info:", film2.title + ", " + film2.director + ", " + film2.year + ".");


// const book1 = new Book("Капитанская дочка", 1836, "Александр Пушкин", 10);

// console.log(book1.toString())

// const artArray: Art[] = [
//     new Movie("Movie 1", 2020, "Director 1"),
//     new Book("Book 1", 2000, "Author 1", 100)
// ];

// for (const art of artArray) {
//     console.log(`${art}`);
// }

import { Birthday } from "./birthday";

const myAge = new Birthday(29, 8, 2004);
console.log(myAge.age);

const myAge2 = new Birthday(30, 10, 2023);
console.log(myAge2.age);