class user{
    constructor(username,email,pwd){
        this.username=username
        this.email=email
        this.pwd=pwd
    }
    encryptpwd(){
        return `${this.pwd}a123`
    }
    changename(){
        return `${this.username.toUpperCase()}`
    }
}const chai=new user('ayushi','ayushi@','hello00')
console.log(chai.encryptpwd())