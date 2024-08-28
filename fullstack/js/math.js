// way of wrting names
// camelCase -> variables , function   --> this is camelCase
//  Pascle case -> react component     --> this is Pascelcase
// snack case -> keys                  --> this is snack_case and also this is SNACK_CASE

export function multiply(a,b){  // named export
    return a *b;
}

export function add(a,b){
    return a+b;
}

const divide = (a,b) =>{
    return a/b;
}

export default divide;