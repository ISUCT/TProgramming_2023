import { Tournament, createGridOfParticipants, shuffleGridOfParticipants } from "./Battle/Tournament";

let newGrid = shuffleGridOfParticipants(createGridOfParticipants(8));
let newTournament = new Tournament(newGrid);
console.log(newTournament.startTournament());


