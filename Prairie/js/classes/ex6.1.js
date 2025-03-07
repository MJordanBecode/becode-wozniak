class Person{
    constructor(Nom, Age){
        this.Nom = Nom;
        this.Age = Age;
    }

    setPresenter(){
        console.log(`Bonjour, je m'appelle ${this.Name} et j'ai ${this.Age} ! `)
    }
}


let p1 = new Person('Jordan', 24);