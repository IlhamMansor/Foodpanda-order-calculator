const allOrders = document.querySelectorAll('div[class="order-list-item"]');

let totalspend = 0;
var noOfOrder = 0;

const toRound = value => Math.round((value + Number.EPSILON) * 100) / 100

for (order of allOrders){
    let totalspend_temp = parseFloat(order.querySelector('span[class="total"]').innerText.slice(3));
    let vendor = order.querySelector('span[class="vendor-name"]').innerText;
    let whatOrder = order.querySelector('div[class="order-product-list"]').innerText;
    let isCancel = order.lastElementChild.querySelector('div [class="order-status"]');
    noOfOrder++;
    if(isCancel == null){
    totalspend += totalspend_temp;
    totalspendrounded = toRound(totalspend);
    console.log(`order ${noOfOrder} : (${vendor}) - ${whatOrder}, MYR${totalspend_temp}`);
    } else {
        console.log(`order ${noOfOrder} : cancelled`);
    }
}

totalspendrounded = toRound(totalspend);
console.log(`total : MYR${totalspendrounded}`);
