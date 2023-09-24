import { Card, type CardSuit, type CardValue } from './Card';

export class Deck {
  private cards: Card[];

  constructor() {
    this.cards = [];
    const suits: CardSuit[] = ['hearts', 'diamonds', 'spades', 'clubs'];
    for (const suit of suits) {
      for (let i = 2; i <= 14; i++) {
        this.cards.push(new Card(suit, i as CardValue));
      }
    }
  }

  draw(): Card | undefined {
    const index = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(index, 1).pop();
  }
}
