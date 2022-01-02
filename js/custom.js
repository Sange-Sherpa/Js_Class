function $(id) {
    return document.getElementById(id);
}

// Add To Cart eventlistener.
$('btn').addEventListener("click", e => {
    e.preventDefault();

    let m_qt = $('mi').value;
    let s_qt = $('samsung').value;
    let o_qt = $('oppo').value;
    let names = ["Mi", "Samsung", "Oppo"];

    let m_price = 0;
    let s_price = 0;
    let o_price = 0;
    let total_qt = 0;
    let total_price = 0;

    if(m_qt != "") {
        m_price += 20000 * parseInt(m_qt);
        total_qt += parseInt(m_qt);
    }
    if(s_qt != "") {
        s_price += 30000 * parseInt(s_qt);
        total_qt += parseInt(s_qt);
    }
    if(o_qt != "") {
        o_price += 50000 * parseInt(o_qt);
        total_qt += parseInt(o_qt);
    }

    total_price = m_price + s_price + o_price;

    // // D E L I V E R Y ---------------------------

    let delivery = document.querySelector('input[class="delivery"]:checked').value;
    let del_price = 0;

    if(delivery == "Home") {
        del_price += 100;
    }

    // P A C K I N G ---------------------------

    let packing = document.querySelector('input[class="package"]:checked').value;
    let packing_price = 0;
    
    switch (packing) {
        case "Plastic": packing_price += 500
        break;

        case "Bag": packing_price += 1000
        break;

        case "Gift": packing_price += 5000
        break;
    
        default: alert("Select At least One Packing Type..")
    }

    // L O C A T I O N ---------------------------

    let location = $('location').value;
    vat_price = 0;

    if (location == "ktm") {
        vat_price = total_price * 0.13;
    }

    // // addToList adds the values in the parameters to the table.
    function addToList(deliveryType, packageType) {
        const list = $('cart');
        let row = document.createElement('tr');

        for(let i=0; i < names.length; i++) {
            switch (names[i]) {
                case "Mi":
                    row.innerHTML = `
                    <td> ${names[i]} </td>
                    <td> ${m_qt} </td>
                    <td> ${deliveryType} </td>
                    <td> ${packageType} </td>
                    <td> ${m_price} </td>
                `
                break;

                case "Samsung":
                    row.innerHTML = `
                    <td> ${names[i]} </td>
                    <td> ${s_qt} </td>
                    <td> ${deliveryType} </td>
                    <td> ${packageType} </td>
                    <td> ${s_price} </td>
                `
                break;

                case "Oppo":
                    row.innerHTML = `
                    <td> ${names[i]} </td>
                    <td> ${o_qt} </td>
                    <td> ${deliveryType} </td>
                    <td> ${packageType} </td>
                    <td> ${o_price} </td>
                `
                break;
            }
        } // end of for

        list.appendChild(row);
    }

    // set the value of vat_price & grandTotal.
    $('vat_price').innerHTML = `Total Vat Amount: ${vat_price}`

    grandTotal = total_price + del_price + packing_price;
    $('grandTotal').innerHTML = `Grand Total: ${grandTotal}`

    console.log(`Total_Price -> ${total_price}`);
    console.log(`Delivery_Price -> ${del_price}`);
    console.log(`Packing_Price -> ${packing_price}`);


    //finally, call the method with respective parameters.
    addToList(delivery, packing);

    // // resets the form with default values
    // $('form').reset();
})