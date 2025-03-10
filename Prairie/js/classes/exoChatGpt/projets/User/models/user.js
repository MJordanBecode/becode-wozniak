export default class User{
    constructor(firstName, lastName, Age, Email, PassWord, Profession){
        this.firstName = firstName,
        this.lastName = lastName,
        this.Age = Age,
        this.Email = Email,
        this.PassWord = PassWord,
        this.Profession = Profession
    }

    set verifyString({firstName,lastName,Profession, Email, PassWord}){
        if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof Profession !== 'string') {
            console.log('firstName, lastName et Profession doivent être des chaînes de caractères :) !');
        }else{

            this.firstName = firstName,
            this.lastName = lastName,
            this.Profession = Profession,
            this.Email = Email,
            this.PassWord = PassWord

            console.log("Les données ont été enregistrée avec succès ! ")
        }

    }

    set verifyAge(Age){
        if(typeof(Age) !== 'number'){
            console.log("Votre âge doit être un Nombre.")
        }else{
            this.Age = Age
        }
    }

    get informationUser(){
        console.log(`Bonjour ${this.firstName} ${this.lastName} ! Comment allez-vous? 
            je sais que vous avez ${this.Age}, que votre email est ${this.Email} et que votre Profession est ${this.Profession}. Donc ne faites pas le malin avec moi sinon je vais vous tuer.`)
    }

}