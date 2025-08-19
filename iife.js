// iife-immediately invoked function execution
// it is an a way to wrap code so variables stay private, preventing global pollution.

(function chai(){
    // named iife
    var msg='hi'
    console.log(`msg is secured via iife i.e: ${msg}`)
})();
// need to add semiclone if two iife

// unnamed iife
(( name)=>(console.log(`executing via arrow func via ${name}`))
)('ayushi')

