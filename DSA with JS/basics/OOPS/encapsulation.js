class User{
    #password
    constructor(password){
        this.#password = password;
    }

    setPassword(val){
        if(val.length>=6){
            this.#password = val;
        }else{
            console.log("Password must be atleast 6 characters");
        }
    }

    checkPassword(val){
      return val === this.#password
    }
}

const u1 = new User("initial123");

u1.setPassword("123");             // Password must be at least 6 characters
u1.setPassword("secure123");       // sets new password

console.log(u1.checkPassword("wrong"));     // false
console.log(u1.checkPassword("secure123")); // true