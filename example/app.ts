/**
 * Interfaces
 */
interface Flower {
  petals: number;
  height: number;
  color: string;
  fragrence: boolean;
  water: () => void;
}

/**
 * Flower classes
 */
class Sunflower implements Flower {
  petals = 20;
  height = 0;
  color = 'yellow';
  fragrence = false;

  water = () => {
    this.height += 5;
  }
}

class Rose implements Flower {
  petals = 5;
  height = 0;
  color: string;
  fragrence = true;

  constructor(color: string) {
    this.color = color;
  }

  water = () => {
    this.height += 1;
  }
}

class Tulip implements Flower {
  petals = 6;
  height = 0;
  color: string;
  fragrence = true;

  constructor(color: string) {
    this.color = color;
  }

  water = () => {
    this.height += 2;
  }
}

/**
 * Gardener
 */
class Gardener {
  createBouquet = (): Flower[] => {
    const sunflower = new Sunflower();
    const rose = new Rose('red');
    const tulip = new Tulip('pink');
    return [sunflower, rose, tulip];
  }
}
