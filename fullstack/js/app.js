const person = {
    firstName: 'Toheed',
    lastName: 'Akhtar',

}

person.name = function(){
    return this.firstName + " " + this.lastName
}

console.log(person.name())