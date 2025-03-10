export default class Account {
    constructor(firstName, lastName, Phone, Email, Password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Phone = Phone;
        this.Email = Email;
        this.Password = Password;
    }

    get allInformation() {
        console.log(`Voici les informations du compte ${this.firstName} ${this.lastName} :
            - FirstName : ${this.firstName},
            - LastName : ${this.lastName},
            - Phone Number : ${this.Phone},
            - Email : ${this.Email},
            - Password : ${this.Password}`);
    }
}
