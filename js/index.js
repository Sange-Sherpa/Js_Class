// let names = {
//     f_name: "Sange",
//     l_name: "Sherpa"
// }

// console.log(names.f_name);
// console.log(names.hasOwnProperty('m_name'));
// console.log(names);

// let array= [1,2,3]
// console.log(array);

// let constructorObject = {
//     speak: () => {
//         return "I am a dog"
//     }
// }

function DogObject(name, age) {
    // let dog = Object.create(constructorObject);
    this.name = name;
    this.age  = age;

    // return dog
}

DogObject.prototype.speak = () => {
    return "I am not a dog."
}

let bingo = new DogObject("Bingo", 24)
console.log(bingo.speak());
