const Dog = {
  raining: true,
  noise: 'woof!',
  makenoise: function() {
    if (this.raining) {
      console.log(this.noise);
    } else {
      console.log('its not raining');
    }
  }
};

const Cat = {
  raining: false,
  noise: 'meow!',
  makenoise: function() {
    if (this.raining) {
      console.log(this.noise);
    } else {
      console.log('its not raining');
    }
  }
};

const masttHysteria = (dog, cat) => {
  return dog.raining && cat.raining ? 'DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!' : 'Cats and Dogs living peacefully';
};

console.log(Dog.noise);
console.log(Cat.noise);
Dog.makenoise();
Cat.makenoise();

console.log(masttHysteria(Dog, Cat));
