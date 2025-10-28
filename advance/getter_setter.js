class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        // need to change  the pwd type in other than constructor for differentiation
        // you can encrypt the  pwd and save the original  value  instead
        return `${this._password}##`
    }
    set password(value){
        this._password=value
    }
}
const chai=new user('ayushi@','abc123')
console.log(chai.password)