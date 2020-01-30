class State {
  constructor(population) {
    this.population = population;
  }

  getFavoriteFood() {
    return 'Cheese';
  }

  getFavoriteSport() {
    return 'Baseball';
  }
}

class California extends State {
  constructor(population) {
    super(population);
    this.population = population;
  }

  getFavoriteFood() {
    return 'Cali Cheese';
  }

  getFavoriteSport() {
    return 'Basketball';
  }
}

class Delaware extends State {
  constructor(population) {
    super(population);
    this.population = population;
  }

  getFavoriteFood() {
    return 'Delaware Cheese';
  }

  getFavoriteSport() {
    return 'Golf';
  }
}

const a = new California(1000);
const b = new Delaware(2000);

const c = someClass => {
  console.log(someClass.getFavoriteFood());
  console.log(someClass.getFavoriteSport());
};

c(California);
c(Delaware);
