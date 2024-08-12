const person = {
    firstName: 'Toheed',
    lastName: 'Akhtar',

}

person.name = function(){
    return this.firstName + " " + this.lastName
}


// console.log(person.name())
console.log('values : ', Object.values(person))
console.log('enteries : ', Object.entries(person))
console.log('JSON Stringfy : ', JSON.stringify(person))
console.log(Date())
console.log("---------------------------")

// template string - backticks
template_string_text = `this 'is' a "template" string "text"`
console.log(template_string_text)

// escape chars - \' -> ' , \" -> " , \\ -> \
text = "We are \"Viking\" from the North"
console.log(text)