import { Player } from "@/models/player";

export class Players {
  players: Player[];

  constructor () {
    this.players.push(new Player('Nullifier', 0, 'Impossible'));
  }

  createSampleRoster() {
    this.players.push(new Player('Anna LaNina', 37, 'Advanced'));
    this.players.push(new Player('Benjamin Burkshire', 19, 'Beginner'));
    this.players.push(new Player('Caleb Castillo', 26, 'Challenging'));
    this.players.push(new Player('Deckard Cainsland', 93, 'Difficult'));
    this.players.push(new Player('Elise Killingsworth', 22, 'Easy'));
    this.players.push(new Player('Frank Malony', 31, 'Fire Mode'));
    this.players.push(new Player('Greg Goldflow', 29, 'Gauntlet'));
    this.players.push(new Player('Holly Fallborne', 38, 'Hourly Marathon'));
    this.players.push(new Player('Ingrid Killingsworth', 52, 'Impossible'));
    this.players.push(new Player('Jerome Tennenbaum', 41, 'Jazz Journey'));
    this.players.push(new Player('Kirk Shatner', 93, 'Kitch Aid'));
    this.players.push(new Player('Leonard Nimoy', 34, 'Logical'));
    this.players.push(new Player('McCoy Bones', 99, 'Master'));
  };
}