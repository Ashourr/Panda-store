let totalprice = document.querySelector(".totalprice");
let addplus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let price = +document.querySelector(".price").innerText;
let total = document.querySelector(".total");
let quantityAll = document.querySelector(".quantity");
let counter = +document.querySelector(".quantity").value;

addplus.onclick = () => {
    counter++;
    quantityAll.value = counter;
}

minus.onclick = () => {
    if(counter <= 0) {
        counter;
    }
    else{
        counter--;
    }
    quantityAll.value = counter;    
}

totalprice.onclick = () => {
    total.textContent = ( price * counter ) + " EGB " ;
}