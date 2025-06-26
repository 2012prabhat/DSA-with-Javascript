class Media{
    constructor(title){
        this.title = title;
    }
}


class Song extends Media{
    constructor(title){
        super(title)
    }
    play(){
        console.log(`Playing song: ${this.title}`)
    }
}

class Video extends Media{
    constructor(title){
        super(title)
    }
    play(){
        console.log(`Playing video: ${this.title}`)
    }
}


let arr = [new Song('Shape of you'), new Video('Love me like you do')];

arr.forEach(elem=>elem.play());