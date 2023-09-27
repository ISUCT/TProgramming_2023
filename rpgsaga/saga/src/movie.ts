export class Movie {
    private playingStatus = false;
    private playerVolume = 100;

    title: string;
    yearPremiere: number;
    director: string;

    constructor(title: string, year: number, director: string) {
        this.title = title;
        this.yearPremiere = year;
        this.director = director;
    }

    set year(year: number) {
        this.yearPremiere = year >= 1895 && year < 2023 ? year : this.yearPremiere ?? 1900;
    }

    get year(): number {
        return this.yearPremiere;
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