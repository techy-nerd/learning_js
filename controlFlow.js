// Switch statement-we add break because if case become true all case after gets executed except default
const bal=50
switch(bal){
    case 0:console.log('your acc is empty')
            break;
    case 50:console.log('not sufficient fund')
            break;

    case 100:console.log('you can do your shopping')
            break;
    default:console.log('other cases')
            
}

// +++++++++TRUTHY & FALSY VALUES+++++++++++
// falsy values are-> 0,-0,BigInt 0n,"",undefined,null,NaN--all these values are considered as falsey
const username=""
if(username){
    console.log('user has loggedIn');
}
else{
    console.log('user has not logged in');
    
}
// truthy value->'0','false'," ",[],{},function(){},etc


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log('the object is empty');
    
}

// nullish coalescing operator(??)-->The ?? operator returns the right-hand side value only if the left-hand side is null or undefined.
const val=null??10
console.log(val); 

const val1=20??10
console.log(val1); 


// terinary operator-consition?true:false