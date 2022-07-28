export class Player {
  name: string;
  age: number;
  preferredDifficulty: string;
  skillRating: number = 1000;
  gamesAttempted: number = 0;
  gamesSolved: number = 0;

  constructor(name: string, age: number, preferredDifficulty: string) {
    this.name = name;
    this.age = age;
    this.preferredDifficulty = preferredDifficulty;
  }
}