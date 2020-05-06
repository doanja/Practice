interface UserInterface {
  name: string;
  email: string;
  age: number;

  register();
  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('user created', this.name);
  }

  register() {
    console.log(this.name + ' is now registered');
  }

  payInvoice() {
    console.log(this.name + ' paid invoice');
  }
}

// let john = new User('john doan', 'doanja@gmail.com', 34);

// john.register();

//  inheritance example
class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    // takes properties of the class its inheriting
    super(name, email, age); // equivalent to doing this.name = name, this.email = email, etc

    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 49);
mike.payInvoice();
