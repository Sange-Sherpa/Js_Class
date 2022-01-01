"use strict"

// Selectors
const mobileName = document.getElementsByClassName('name');
const amount = document.getElementsByClassName("amount");
const deliveryType = document.getElementsByClassName("delivery");
const packageType = document.getElementsByClassName("package");

// sets amount for vat
let vatAmount;

// initializations
let nameArray = [];
let amountArray = [];
let deliveryArray = [];
let packageArray = [];

function setArray(get, set) {
    for (let i = 0; i < get.length; i++) {
        set.push(get[i].value);
    }
    console.log(set);
}

setArray(mobileName, nameArray);
setArray(amount, amountArray);
setArray(deliveryType, deliveryArray);
setArray(packageType, packageArray);

function checker(arr) {
    let mobileName;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value > 0) {
            mobileName = arr[i].label;
        }
    }
    console.log(mobileName);
}

checker(amount);

// function displayRadioValue(arr) {
//     // loop throught the received array
//     for (let i = 0; i < arr.length; i++) {
//         // Check if the radio button is selected
//         if (arr[i].isChecked) {
//             let val = arr[i].value;
//             console.log(val);
//         }
//     }
// }

// function checkVAT() {
//     let select = document.getElementsByTagName('select');
//
//     switch (select.value) {
//         case 'ktm': value = 0.13*price;
//         break;
//         case 'ltp': value = "0%"
//         break;
//         case 'bkt': value = "0%"
//         break;
//         default: console.log("error");
//     }
// }

const addToList = (mobileName, amount, deliveryType, packageType, vat, total) => {
    let list = document.querySelector("#cart");
    const row = document.createElement("tr");

row.innerHTML = `
    <td>${mobileName}</td>
    <td>${amount}</td>
    <td>${deliveryType}</td>
    <td>${packageType}</td>
    <td>${vatAmount}</td>
    <td>${total}</td>
    `;

    list.appendChild(row);
};

//Button Listener
document.getElementById("btn").addEventListener("click", () => {
    displayRadioValue(deliveryType);
    addToList('', amountArray[0], '', '', '', '')
});