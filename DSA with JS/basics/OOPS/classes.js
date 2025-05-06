class car{
    constructor(brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start(){
        console.log(`Starting ${this.brand} ${this.model} from ${this.year}....`)
    }
}

const car1 = new car('Audi','ETRON',2024);
car1.start()

const book = {
    title:'Flamingo',
    author:'xyz',
    pages:545,
    info() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
      }
}

book.info()