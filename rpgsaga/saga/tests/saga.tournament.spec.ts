import { Player } from '../src/saga/player';
import { PlayerGenerator } from '../src/saga/playerGenerator';
import { Tournament } from '../src/saga/tournaments';

describe('Testing tournaments with different player counts', () => {
  it('should play tournament with even players count', () => {
    const players = PlayerGenerator.createPlayers(4, 4, 4, true);
    const tournament = new Tournament(players, false);
    expect(tournament.startTournament()).toBeInstanceOf(Player);
  });
  it('should play tournament with odd players count', () => {
    const players = PlayerGenerator.createPlayers(1, 1, 1, true);
    const tournament = new Tournament(players, false);
    expect(tournament.startTournament()).toBeInstanceOf(Player);
  });
  it('should play tournament with only two players', () => {
    const players = PlayerGenerator.createPlayers(1, 1, 0, true);
    const tournament = new Tournament(players, false);
    expect(tournament.startTournament()).toBeInstanceOf(Player);
  });
  it('imagine playing tournament with only one player lol', () => {
    const players = PlayerGenerator.createPlayers(1, 0, 0, true);
    const tournament = new Tournament(players, false);
    expect(tournament.startTournament()).toBeInstanceOf(Player);
  });
});
