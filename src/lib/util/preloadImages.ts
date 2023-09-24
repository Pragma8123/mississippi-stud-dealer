import type { CardSuit, CardValue } from '../Card';

export function preloadImages() {
  const cardImages: string[] = [];
  const suits: CardSuit[] = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values: CardValue[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  suits.forEach((suit) => {
    values.forEach((value) => {
      cardImages.push(`/${suit}-${value}.svg`);
    });
  });
  cardImages.push('/blue-back.png');
  cardImages.push('/red-back.png');

  cardImages.forEach((imagePath) => {
    const image = new Image();
    image.src = imagePath;
  });
}
