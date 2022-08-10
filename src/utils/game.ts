export class GameService {
  difficulty: string = 'normal';

  newGame(difficulty: string) {
    this.difficulty = difficulty;
  }
}