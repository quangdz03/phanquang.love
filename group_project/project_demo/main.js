// On-Off
var checkbox_toggle = document.getElementById('light-dark');
checkbox_toggle.addEventListener('change', function(){
    document.body.classList.toggle('dark');
})

// Tăng giảm số lượng
let amountElement = document.getElementById('amount');
let amount = amountElement.value;
console.log(amountElement)

let render = (amount) =>{
    amountElement.value = amount
}

let handleplus = () =>{
    console. log(amount)
    amount++
    render(amount);
}

let handleminus = () =>{
    if(amount > 1)
        amount--
    render(amount);
}


function rangeSlider(value){
    document.getElementById('range-value').innerHTML
    = value
}