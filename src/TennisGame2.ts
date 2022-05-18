import { Player } from './Player';
import { TennisGame } from './TennisGame';

export class TennisGame2 implements TennisGame {

  player1:Player;
  player2:Player;
  
  constructor(player1:Player, player2:Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getScore(): string {
    let score: string = '';
    if (this.player1.point === this.player2.point && this.player1.point < 4) {
      if (this.player1.point === 0)
        score = 'Love';
      if (this.player1.point === 1)
        score = 'Fifteen';
      if (this.player1.point === 2)
        score = 'Thirty';
      score += '-All';
    }
    if (this.player1.point === this.player2.point && this.player1.point >= 3)
      score = 'Deuce';

    if (this.player1.point > 0 && this.player2.point === 0) {
      if (this.player1.point === 1)
        this.player1.result = 'Fifteen';
      if (this.player1.point === 2)
        this.player1.result = 'Thirty';
      if (this.player1.point === 3)
        this.player1.result = 'Forty';

      this.player2.result = 'Love';
      score = this.player1.result + '-' + this.player2.result;
    }
    if (this.player2.point > 0 && this.player1.point === 0) {
      if (this.player2.point === 1)
        this.player2.result = 'Fifteen';
      if (this.player2.point === 2)
        this.player2.result = 'Thirty';
      if (this.player2.point === 3)
        this.player2.result = 'Forty';

      this.player1.result = 'Love';
      score = this.player1.result + '-' + this.player2.result;
    }

    if (this.player1.point > this.player2.point && this.player1.point < 4) {
      if (this.player1.point === 2)
        this.player1.result = 'Thirty';
      if (this.player1.point === 3)
        this.player1.result = 'Forty';
      if (this.player2.point === 1)
        this.player2.result = 'Fifteen';
      if (this.player2.point === 2)
        this.player2.result = 'Thirty';
      score = this.player1.result + '-' + this.player2.result;
    }
    if (this.player2.point > this.player1.point && this.player2.point < 4) {
      if (this.player2.point === 2)
        this.player2.result = 'Thirty';
      if (this.player2.point === 3)
        this.player2.result = 'Forty';
      if (this.player1.point === 1)
        this.player1.result = 'Fifteen';
      if (this.player1.point === 2)
        this.player1.result = 'Thirty';
      score = this.player1.result + '-' + this.player2.result;
    }

    if (this.player1.point > this.player2.point && this.player2.point >= 3) {
      score = 'Advantage player1';
    }

    if (this.player2.point > this.player1.point && this.player1.point >= 3) {
      score = 'Advantage player2';
    }

    if (this.player1.point >= 4 && this.player2.point >= 0 && (this.player1.point - this.player2.point) >= 2) {
      score = 'Win for player1';
    }
    if (this.player2.point >= 4 && this.player1.point >= 0 && (this.player2.point - this.player1.point) >= 2) {
      score = 'Win for player2';
    }
    return score;
  }

  wonPoint(player: string): void {
    player === 'player1'?this.player1.point++:this.player2.point++;
  }
}
