import { Player } from "@/models/player";

export class Players {
  players: Player[];

  constructor () {
    this.players.push(new Player('Nullifier', 0, 'Impossible'));
  }

  createSampleRoster() {
    this.players.push(new Player('Deckard Cainsland', 93, 'Difficult'));
  };
}