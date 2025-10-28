

class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`you called ${this.username}`)
    }
}
class teacher extends user{
    constructor(username,email)
    {   super(username)
        this.email=email
    }
    printMe(){
        console.log(`${this.username} email is ${this.email}`)
    }
}

const chai=new teacher('ayushi','ayushi@')
chai.logMe()
chai.printMe()