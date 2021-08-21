// function to update price

function updateprice(product, price) {
    const cost = document.getElementById(product + '-cost').innerText;

    document.getElementById(product + '-cost').innerText = price;

    return parseInt(price);
}


// on button click update price section


document.getElementById('16gb-btn').addEventListener('click', function () {

    const memorycost16gb = updateprice('memory', 180);
    calculate(parseInt(document.getElementById('memory-cost').innerText))


});
document.getElementById('8gb-btn').addEventListener('click', function () {
    const memorycost8gb = updateprice('memory', 0);
    calculate(parseInt(document.getElementById('memory-cost').innerText))

});

document.getElementById('256gb-ssd-btn').addEventListener('click', function () {
    const storagecost256 = updateprice('storage', 0);
    calculate(parseInt(document.getElementById('storage-cost').innerText))

});
document.getElementById('512gb-ssd-btn').addEventListener('click', function () {
    const storagecost512 = updateprice('storage', 100);
    calculate(parseInt(document.getElementById('storage-cost').innerText))

});
document.getElementById('1tb-ssd-btn').addEventListener('click', function () {
    const storagecost1tb = updateprice('storage', 180);
    calculate(parseInt(document.getElementById('storage-cost').innerText))

});

document.getElementById('25-aug').addEventListener('click', function () {
    const deliverycost25 = updateprice('delivery', 0);
    calculate(parseInt(document.getElementById('delivery-cost').innerText))

});
document.getElementById('21-aug').addEventListener('click', function () {
    const deliverycost21 = updateprice('delivery', 20);
    calculate(parseInt(document.getElementById('delivery-cost').innerText))

});

//  coupon section

document.getElementById('coupon-btn').addEventListener('click', function () {
    const coupon = document.getElementById('coupon-code').value;
    const total = document.getElementById('total').innerText;
    if (coupon == 'stevekaku') {
        document.getElementById('total').innerText = parseInt(total) - parseInt(total) * 0.2;
    }
    else {
        total.innerText = total;
    }
    document.getElementById('coupon-code').value = '';
});

// calculate total price


function calculate(amount) {

    const balancetotal = document.getElementById('total-price');
    const balancetotaltext = balancetotal.innerText;
    const previousbalancetotal = parseInt(balancetotaltext);
    const newbalancetotal = previousbalancetotal + amount;


    balancetotal.innerText = newbalancetotal;
    document.getElementById('total').innerText = newbalancetotal;

}


