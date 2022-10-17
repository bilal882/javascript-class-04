let cities = ["Faisalabad", "Islamabad", "Lahore", "Karachi"]

function inputValue() {
    return document.getElementById("input").value
}

function lowerCaseConverter() {
    let lowerCase = inputValue().toLowerCase();

    console.log(lowerCase);
}

function upperCaseConverter() {
    let upperCase = inputValue().toUpperCase();
    console.log(upperCase);
}

// let Name = "Muhammad Bilal";
// console.log(Name.charAt(13));

// let text = "Thanks !";
// for (let i = 0; i < text.length; i++) {
//     if (text.charAt(i) === "!") {
//         alert("Your text Found")
//     }
// }

let text = "I love Pakistan I love my city Faisalabad";
let newText = text.toLowerCase();
function replcaeFunction() {
    let value = prompt("Enter value");
    let inputvalue = inputValue().toLowerCase();

    let replaceText = newText.replaceAll(inputvalue, value);
    console.log(replaceText);

}