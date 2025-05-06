class LibraryItem{
    constructor(title, year){
        this.title = title;
        this.year = year;
    }

    getInfo(){
        return `Title ${this.title}, (${this.year})`
    }
}


class Book extends LibraryItem{
    constructor(title, year, author){
        super(title, year)
        this.author = author;
    }

    getInfo(){
        return `Book ${this.title} by ${this.author} (${this.year})`
    }
}

class DVD extends LibraryItem{
    constructor(title, year, duration){
        super(title, year);
        this.duration = duration;
    }

    getInfo(){
        return `DVD ${this.title} - ${this.duration} mins (${this.year})`
    }
}

const dvd1 = new DVD("Iron Man",2025,"2 hours")
console.log(dvd1.getInfo())