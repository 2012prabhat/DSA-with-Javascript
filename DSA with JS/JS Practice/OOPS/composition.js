class printer{
    print(){
        console.log("Printing Document")
    }
}


class scanner{
    scan(){
        console.log("scanning Document")
    }
}


class photoCopier{
    constructor(){
        this.printer = new printer();
        this.scanner  = new scanner();
    }

    print(){
        this.printer.print();
    }

    scan(){
        this.scanner.scan();
    }
}


const machine = new photoCopier();
machine.scan()
machine.print()
