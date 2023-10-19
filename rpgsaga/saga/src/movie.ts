import { Art } from './art';

export class Movie extends Art {
    toString(): string {
        return `${this.title}, ${this.yearPremiere}, ${this.director}`
    }

    private playingStatus = false;
    private playerVolume = 100;
    yearPremiere: number;

    constructor(title: string, year: number, director: string) {
        super(title, year, director);
        this.yearPremiere = year >= 1895 && year <= 2023 ? year : 1895;
    }

    set year(year: number) {
        this.yearPremiere = year >= 1895 && year <= 2023 ? year : 1895;
    }

    play() {
        if (this.playingStatus) {
            console.log("The movie is already playing");
        } else {
            console.log("Playback started");
            this.playingStatus = true;
        }
    }

    pause() {
        if (!this.playingStatus) {
            console.log("The movie has already stopped");
        } else {
            console.log("Playback stopped");
            this.playingStatus = false;
        }
    }

    volume(level: number) {
        if (level > 100) {
            this.playerVolume = 100;
            console.log("The volume level cannot be more than 100\nThe volume level is now 100");
        } else if (level < 0) {
            this.playerVolume = 0;
            console.log("The volume level cannot be less than 0\nThe volume level is now 0");
        } else {
            this.playerVolume = level;
            console.log("The volume level is now", this.playerVolume);
        }
    }
}