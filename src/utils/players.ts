import { Player } from "@/models/player";

export class Players {
  players: Player[];

  constructor () {
    this.players.push(new Player('Nullifier', 0, 'Impossible'));
  }

  createSampleRoster() {
    this.players.push(new Player('Frank Malony', 31, 'Fire Mode'));
  };
}