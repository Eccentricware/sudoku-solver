import { Player } from "@/models/player";

export class Players {
  players: Player[];

  constructor () {
    this.players.push(new Player('Nullifier', 0, 'Impossible'));
  }

  createSampleRoster() {
    this.players.push(new Player('Benjamin Burkshire', 19, 'Beginner'));
    this.players.push(new Player('Anna LaNina', 37, 'Advanced'));
    this.players.push(new Player('Leonard Nimoy', 34, 'Logical'));
  };
}