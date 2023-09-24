export type CardSuit = 'hearts' | 'diamonds' | 'spades' | 'clubs';

export type CardValue = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export class Card {
  constructor(
    public suit: CardSuit,
    public value: CardValue
  ) {}

  equals(card: Card): boolean {
    return card.value === this.value && card.suit === this.suit;
  }
}
