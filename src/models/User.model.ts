export class UserModel{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    rating:any={};
    constructor(data){
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        this.email=data.email;
        this.password=data.password;
        this.rating=this.getRating() || {};
    }

    getRating(){
        if(JSON.parse(localStorage.getItem('userRating'))){
            return (JSON.parse(localStorage.getItem('userRating')))[this.email];
        }else{
            return {};
        }
    }

}