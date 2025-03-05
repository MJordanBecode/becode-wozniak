class Person{
    constructor(Nom, Age){
        this.Nom = Nom;
        this.Age = Age;
    }

    sePresenter(){
        console.log(`Bonjour, je m'appelle ${this.Nom} et j'ai ${this.Age} ans`);
    }
}

let Person1 = new Person("Jordan", 24);
Person1.sePresenter();