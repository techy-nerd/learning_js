// lexical scoping-inner function access the content of outer function i.e child can access the parent content   but not the siblings
function displayname(){
    let username='ayushi'
    function innnerfunction(){
        console.log(username)
    }
    innnerfunction()
}
displayname()