function Char(name, profession, gender, age, strength, hp) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hp = hp;
  this.stats = function() {
    console.log('Name:', this.name);
    console.log('Profession:', this.profession);
    console.log('Age:', this.age);
    console.log('Gender:', this.gender);
    console.log('Strength:', this.strength);
  };
}

const player1 = new Char('bob', 'trash man', 'non-binary', 10, 10, 50);
const player2 = new Char('fred', 'trash man', 'none', 10, 20, 50);

const isAlive = character => {
  return character.hp <= 0 ? 'character is dead' : 'character is alive';
};

console.log(isAlive(player1));

const attack = (char1, char2) => {
  return (char2.hp -= char1.strength);
};

console.log(attack(player2, player1));

const levelUp = character => {
  character.age++;
  character.strength += 5;
  character.hp += 25;
};
