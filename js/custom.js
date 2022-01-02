function $(id) {
    return document.getElementById(id);
}

// initially, hide the grandtotal of the products.
let grandTotal = document.getElementById('grandTotal');
grandTotal.style.visibility = 'hidden';

// Add To Cart eventlistener.
$('btn').addEventListener("click", e => {
    e.preventDefault();

    let m_qt = $('mi').value;
    let s_qt = $('samsung').value;
    let o_qt = $('oppo').value;

    let m_price = 0;
    let s_price = 0;
    let o_price = 0;
    let total_qt = 0;
    let total_price = 0;
    let rand = [];

    if(m_qt != "") {
        m_price += 20000 * parseInt(m_qt);
        total_qt += parseInt(m_qt);
        rand.push(m_qt);
    }
    if(s_qt != "") {
        s_price += 30000 * parseInt(s_qt);
        total_qt += parseInt(s_qt);
        rand.push(s_qt);
    }
    if(o_qt != "") {
        o_price += 50000 * parseInt(o_qt);
        total_qt += parseInt(o_qt);
        rand.push(o_qt);
    }

    total_price = m_price + s_price + o_price;

    // // D E L I V E R Y ---------------------------

    let delivery = document.querySelector('input[type="radio"]:checked').value;
    let del_price = 0;

    if(delivery === "home") {
        del_price += 100;
    }

    // P A C K I N G ---------------------------

    let packing = document.querySelector('input[class="package"]:checked').value;
    let packing_price = 0;
    
    switch (packing) {
        case "plastic": packing_price += 500
        break;

        case "bag": packing_price += 1000
        break;

        case "gift": packing_price += 5000
        break;
    
        default: alert("Select At least One Packing Type..")
    }

    // // addToList adds the values in the parameters to the table.
    function addToList(mobileName, amount, deliveryType, packageType, vatAmount, total) {
        const list = $('cart');
        let row = document.createElement('tr');

        row.innerHTML = `
        <td> ${mobileName} </td>
        <td> ${amount} </td>
        <td> ${deliveryType} </td>
        <td> ${packageType} </td>
        <td> ${vatAmount} </td>
        <td> ${total} </td>
        `

        list.appendChild(row);
    }

    for(let i=0; i<rand.length; i++) {
        
    }

    // // makes the grandtotal visible
    grandTotal.style.visibility = 'visible';

    // // resets the form with default values
    // $('form').reset();
})