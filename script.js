const aaaa=document.getElementById('box');
const someorder = {
    items:[
    {name: 'dragon',price: 8, quanity: 8},
    {name: 'dragon cage',price: 10, quanity: 1},
    {name: 'shipping',price: 100, shipping: true}
    ]
}
const ordertutol = order => {
    const totolitem = order.items.filter(x=>!x.shipping)
    .reduce((x,y)=>x+(y.price*y.quanity),0);
    return totolitem;
}
aaaa.textContent = ordertutol(someorder);
console.log(ordertutol(someorder));