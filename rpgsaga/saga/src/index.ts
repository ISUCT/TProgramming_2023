import { Movie } from './movie';

const film1 = new Movie("Back to the Future", 1985, "Robert Zemeckis");

film1.play();
film1.pause();
film1.pause();
film1.play();
film1.play();

film1.volume(29);
film1.volume(99);
film1.volume(99999);
film1.volume(-1);

film1.year = 1894;

console.log(`MOVIE INFO
Title: ${film1.title}
Year: ${film1.year}
Director: ${film1.director}
`);


const film2 = new Movie("Star Wars: Episode I - The Phantom Menace", 1999, "George Lucas");

film2.title = "Star Wars";
film2.year = 1977;

film1.volume(100);
film1.play();

console.log("Movi info:", film2.title + ", " + film2.director + ", " + film2.year + ".");