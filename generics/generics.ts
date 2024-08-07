// generics
// sono strutture che possono lavorare con diversi tipi di dati senza doverli specificare in anticipo
// questo perche' vado a rendere il dato di tipo generico
// questo da al codice riusabilita' e flessibilita'
// questa cosa si applica a diversi formati di dati gia visti in precedenza 

//applichiamolo ai tipi di dati gia' conosciuti

// funzioni


// in ogni tipo di dato i generics si dichiarano attraverso l'uso di <>
// sono per comune usanza dichiarati con lettere maiuscole
//in questo caso sto dichiarando unn tipo di dato generico di tipo T accettato solo da questa funzione
function printType<T>(argomento: T) :T {
    // dichiarandolo in questo modo posso sfruttarlo sia nella dichiarazione del valore dell'argomento
    // sia utilizzarlo all'interno dello scope della funzione stessa
    console.log(typeof argomento);
    return argomento;
}


// flessibilita': avendo settato la funzione affinche accetti un dato geenrico contrassegnato da T
// questa potra' ricevere goni tipo di dato 
printType('ciao'); //risultato: string
printType(9); //risultato: number
printType({x:39, y: 50}); //risultato: object




// classi

class Pari<T,U>{
    private elemento1: T;
    private elemento2: U;

    constructor(elemento1: T, elemento2: U){
        this.elemento1 = elemento1;
        this.elemento2 = elemento2;
    }

    public getElemento1():T {
        return this.elemento1;
    }

    public getElemento2():U {
        return this.elemento2;
    }

    public getpari():string{
        return this.elemento1 + " " + this.elemento2;
    }
}

//avendo settato la classe su proprieta' con dati generici assegnati con T ed U 
// sono capace di creare nuove istanze della classe con dati volubili  
let pari1 = new Pari<string,string>('cane','gatto');
let pari2 = new Pari<string,number>('cane',4);
let pari3 = new Pari<boolean,number>(false, 25);


//interfacce

// creo un interfaccia che accetti una key di valore generico T ma di tipo array
// in questo caso alla lettera con cui dichiaro il tipo di dato generics segue un []
interface GenericPrint {
    <T>(argomento: T[]): T[];

}

function printType1<T>(argomento: T[]) :T[] {
    console.log(typeof argomento);
    return argomento;
}

// dichiaro una variabile che segua le direttive di un interfaccia 
// (e che quindi mi restiruira' un oggetto)
// che accetta un tipo di dato generico di tipo array
// e che ha per valore la funzione printType1
let stampa: GenericPrint = printType1;

// adesso quindi richiamo la funzione specificando il tipo di elementi
// che comporranno l'oggetto prodotto dall'interfaccia al cui interno avra' un array
// essendo il dato di tipo geenrico, posso andare a specificarne il tipo didato accettato per il contenuto
// al momento del richiamo della funzione stessa
stampa<string>(['rosa','geranio']);
stampa<number>([5,6]);


// creiamo ora un interfaccia 

interface Coppia<T,U>{
    primo: T;
    secondo: U;
}

// ed implementiamola su una classe

class MiaCoppia<T,U> implements Coppia<T,U>{
    constructor(public primo: T, public secondo: U){
        this.primo = primo;
        this.secondo = secondo;
    }
}

// la nuova istanza della classe che implementa l'interfaccia con dati di tipo generico 
// dichiarera' il tipo di dato imposto dall'interfaccia e accettato come attributo dal costruttore
// al momento della creazione della nuova istanza stessa 
let obj: Coppia<number, string> = new MiaCoppia(10,'coppia');
console.log(obj.primo); // stampera': 10
console.log(obj.secondo); // stampera': 'coppia'