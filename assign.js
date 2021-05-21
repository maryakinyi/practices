function destruct() {
    var a, b, rest;
    a, b, rest = [10, 20, 30, 89, 90, 60]
    console.log(...rest)
}
destruct()

function iterator() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzBuzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}
iterator()

function large() {

}



function student() {
    let studentName = (name1, name2) =>
        `${name1}, ${name2}`;
    console.log(studentName("Akinyi ", "Mary "))
}
student()
    // export function students(name) {
    // return name
    // }

console.log("PlantKunde");
console.log("water Kunde");
console.log("Add fertilizer")
console.log("PLant kunde");
setTimeout(function() {
    console.log("Water kunde")
}), 3000;
console.log("Add fertilizer")
    /* callbacks calls for the other function*/

var massage = function(name) {
    console.log(`hello`);
}
setTimeout(massage, 3000)

function firstName() {
    console.log("Gernman")
}

function secondName() {
    console.log("Embassy")
}
firstName()
secondName()

function firstName() {
    setTimeout(() => {
        console.log("German")
    }, 3000);
}

function secondName() {
    console.log("Embassy")
}

function doHomework(subject, callbacks) {
    console.log(`I am starting with ${subject} homework`)
    callbacks();
}

function finishHomeWork() {
    console.log("I am done with that one")
}
doHomework("JavaScript", finishHomeWork)

function studentRooms(roomName) {
    console.log(`She is in room ${roomName}`)
}
setTimeout(

    function neatRoom() {
        console.log("That's the neatest room in school ")
    }, 3000);
studentRooms("Maji")

setTimeout(function request() {
    console.log("calling")
}, 2000)

function massage() {
    console.log("The person you have called is not reachable ")
}