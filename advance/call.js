function SetUsername(username){
    this.username=username
    console.log('you called');
    
}
function createUser(username,email){
    // passing value to other function
   SetUsername.call(this,username)
    this.email=email
}
const chai= new createUser('ayushi','ayushi567@gmail')
console.log(chai)