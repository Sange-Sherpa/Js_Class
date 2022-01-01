"use strict"

function $(arg) {
    return document.getElementsByClassName(arg);
}

let total_amount = 0; // total quantity of mobile
let total_price = 0; // total quantity of mobile

// Selectors



// sets amount for vat
// let vatAmount;

// // initializations
// let nameArray = [];
// let amountArray = [];
// let deliveryArray = [];
// let packageArray = [];

// function setArray(pakoArray, banaakoArray) {
//     for (let i = 0; i < pakoArray.length; i++) {
//         banaakoArray.push(pakoArray[i].value);
//     }
//     console.log(banaakoArray);
// }

// setArray(mobileName, nameArray);
// setArray(amount, amountArray);
// setArray(deliveryType, deliveryArray);
// setArray(packageType, packageArray);

// function checker(arr) {
//     let mobileName;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].value > 0) {
//             mobileName = arr[i].label;
//         }
//     }
//     console.log(mobileName);
// }

// checker(amount);



//Button Listener
document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();

    // Take multiple inputs with similar class as an array.
    const amount_array = $('amount');
    let mobile_amount = [];

    const delivery = $('delivery');
    let delivery_Type = [];

    const packageType = $('package');
    let package_Type = [];

    const grandTotal = $('grandTotal');

    function setArray() {
        for(let i=0; i < amount_array.length; i++) {
            mobile_amount.push(amount_array[i].value)

            if (mobile_amount[i] > 0) {
                total_amount += parseInt(mobile_amount[i]);
            }
        }

        console.log(mobile_amount);
        console.log(total_amount);
    }

    setArray();

    let addToList = (mobileName, amount, deliveryType, packageType, vat, total) => {
    let list = document.querySelector("#cart");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${mobileName}</td>
        <td>${amount}</td>
        <td>${deliveryType}</td>
        <td>${packageType}</td>
        <td>${vat}</td>
        <td>${total}</td>
    `;

    list.appendChild(row);
    };

    addToList("Mi", total_amount, "PickUp", "Gift", 0, 20000);
});