export class UserModel{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    constructor(data){
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        this.email=data.email;
        this.password=data.password;
    }

}