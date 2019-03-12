/**
 * Interfaces
 */
interface Flower {
  petals: number;
  height: number;
  color: string;
  fragrence: boolean;
  water: (ml: number) => void;
}

interface Order {
  type: string;
  amount: number;
  color?: string;
}

/**
 * Flower classes
 */
class Sunflower implements Flower {
  petals = 20;
  height = 0;
  color = 'yellow';
  fragrence = false;

  water = (ml: number) => {
    this.height += ml / 500;
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

  water = (ml: number) => {
    this.height += ml / 200;
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

  water = (ml: number) => {
    this.height += ml / 100;
  }
}

/**
 * Creating a basic order
 */
const createBouquet = (order: Order): Flower[] => {
  const bouquet: Flower[] = [];

  switch(order.type){
    case('sunflower'):
      for (let i = 0; i < order.amount; i++) {
        bouquet.push(new Sunflower());
      }
      break;

    case('rose'):
      for (let i = 0; i < order.amount; i++) {
        bouquet.push(new Rose(order.color));
      }
      break;

    case('tulip'):
      for (let i = 0; i < order.amount; i++) {
        bouquet.push(new Tulip(order.color));
      }
      break;
  }

  return bouquet;
};

const createComplexBouquet = (orders: Order[]): Flower[] => {
  const bouquet: Flower[] = [];

  for (const order of orders) {
    bouquet.push(...createBouquet(order));
  }

  return bouquet;
};

/**
 * Watering a flower
 */

const myTulip = new Tulip('red');
myTulip.water(5000);

console.log(`My tulip is now ${myTulip.height}cm tall!`);

/**
 * Creating a complex order
 */
const bouquet = createComplexBouquet([
  {
    type: 'tulip',
    amount: 3,
    color: 'pink',
  },
  {
    type: 'tulip',
    amount: 2,
    color: 'yellow',
  },
  {
    type: 'rose',
    amount: 5,
    color: 'red',
  },
  {
    type: 'sunflower',
    amount: 5,
  },
]);

console.log(bouquet);
