let upi = document.getElementById('upi');
let card = document.getElementById('card');

let upiBody = document.getElementById('upi-body');
let cardBody = document.getElementById('card-body');

let payBtn = document.getElementById('pay');
let cancel = document.getElementById('cancel');

let orderId = document.getElementById('order-id');

const randomNumber = Math.floor(1000000 + Math.random() * 9000000);
orderId.innerHTML += randomNumber;

upi.addEventListener('click', ()=>{
    upi.classList.add('isactive');
    upiBody.style.display = 'block';
    card.classList.remove('isactive');
    cardBody.style.display = 'none';
    payBtn.hidden = false;
});

card.addEventListener('click', ()=>{
    card.classList.add('isactive');
    cardBody.style.display = 'block';
    upi.classList.remove('isactive');
    upiBody.style.display = 'none';
    payBtn.hidden = false;
});

payBtn.addEventListener('click', ()=>{
    alert('Payment Successful'); 
    window.location.href = 'cart.html';
    localStorage.setItem('payment-status', true);
});

cancel.addEventListener('click', ()=>{
    window.location.href = 'cart.html';
    localStorage.setItem('payment-status', false);
});