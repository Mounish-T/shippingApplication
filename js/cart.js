let data = JSON.parse(localStorage.getItem("cart")) || [];
let paymentStatus = JSON.parse(localStorage.getItem('payment-status'));
console.log(paymentStatus);

function calculateCartValue() {
    let cost = 0,
        itemCount = 0;

    data.forEach(item => {
        cost += item.price * item.count;
        itemCount += item.count;
    });

    return {
        cost,
        itemCount
    };
}

function updatePayment() {
    let priceData = calculateCartValue();

    document.querySelector('.collections').innerHTML = `
        <p>Price: <span>Rs. ${priceData.cost}</span></p>
        <p>Quantity: <span>${priceData.itemCount}</span></p>
    `;
}

if(paymentStatus){
    // updatePayment();
}

let cartBody = document.getElementById('cart-body');

cartBody.innerHTML = `
    <h3 style="margin:30px 30px 0px 30px;">
        All Products (${data.length})
    </h3>
`;

let tempBody = '';

data.forEach((item, idx) => {

    if (idx % 5 == 0) {
        cartBody.innerHTML += `
            <div class="row">
                ${tempBody}
            </div>
        `;
        tempBody = '';
    }

    tempBody += `
        <div class="item">
            <span class="remove-btn" data-index="${idx}">✖</span>
            <div class="item${idx+1}-img">
                <img src="${item.img}" alt="">
            </div>

            <div class="item${idx+1}-info">

                <div class="product${idx+1}-spec">
                    <p><b>${item.name}</b></p>
                    <p>Price: Rs. ${item.price}</p>

                </div>

                <div class="prod-count">
                    <p class="unit dec" data-index="${idx}">-</p>
                    <p class="value">${item.count}</p>
                    <p class="unit inc" data-index="${idx}">+</p>
                </div>

            </div>
        </div>
    `;
});

cartBody.innerHTML += `
    <div class="row">
        ${tempBody}
    </div>
`;

let paymentSection = document.getElementById('pay-section');

paymentSection.innerHTML = `
    <div class="collections"></div>

    <div class="payment-btn">
        <button id="pay-btn">
            Make Payment
        </button>
    </div>
`;

updatePayment();

let incCart = document.querySelectorAll('.inc');
let decCart = document.querySelectorAll('.dec');

incCart.forEach(item => {
    item.addEventListener('click', () => {
        let idx = item.dataset.index;
        data[idx].count++;
        item.previousElementSibling.textContent = data[idx].count;
        updatePayment();
    });
});

decCart.forEach(item => {
    item.addEventListener('click', () => {
        let idx = item.dataset.index;
        if (data[idx].count > 0) {
            data[idx].count--;
            item.nextElementSibling.textContent = data[idx].count;
            updatePayment();
        }
    });
});

let removeButtons = document.querySelectorAll(".remove-btn");

removeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const idx = button.dataset.index;
        data.splice(idx, 1);
        localStorage.setItem("cart", JSON.stringify(data));
        location.reload();
    });
});

document.getElementById('pay-btn').addEventListener('click', () => {

    data.forEach(item => {
        item.count = 0;
    });

    document.querySelectorAll('.value').forEach(value => {
        value.textContent = 0;
    });

    updatePayment();

    window.location.href = 'payment.html';

    // alert("Payment Successful!");
});

const dialog = document.getElementById("address-dialog");
const addressBtn = document.getElementById("address-btn");
const addressView = document.getElementById("address-view");
const addressForm = document.getElementById("address-form");
const editBtn = document.getElementById("edit-btn");
const saveBtn = document.getElementById("save-btn");
const closeBtn = document.getElementById("close-btn");
const nameInput = document.getElementById("name");
const mobileInput = document.getElementById("mobile");
const houseInput = document.getElementById("house");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");
const pinInput = document.getElementById("pin");

function showAddress(){
    const address = JSON.parse(localStorage.getItem("address"));
    if(address){
        addressView.innerHTML = `
            <b>${address.name}</b><br><br>
            ${address.house}<br>
            ${address.city}, ${address.state}<br>
            ${address.pin}<br><br>
            ${address.mobile}
        `;
    }else{
        addressView.innerHTML = "No address added.";
    }
}

addressBtn.addEventListener("click",()=>{
    showAddress();
    addressView.style.display="block";
    addressForm.style.display="none";
    editBtn.style.display="inline-block";
    saveBtn.style.display="none";
    dialog.showModal();
});

editBtn.addEventListener("click",()=>{
    const address=JSON.parse(localStorage.getItem("address"))||{};
    nameInput.value = address.name || "";
    mobileInput.value = address.mobile || "";
    houseInput.value = address.house || "";
    cityInput.value = address.city || "";
    stateInput.value = address.state || "";
    pinInput.value = address.pin || "";
    addressView.style.display="none";
    addressForm.style.display="block";
    editBtn.style.display="none";
    saveBtn.style.display="inline-block";
});

saveBtn.addEventListener("click",()=>{
    const address = {
        name: nameInput.value,
        mobile: mobileInput.value,
        house: houseInput.value,
        city: cityInput.value,
        state: stateInput.value,
        pin: pinInput.value
    };
    localStorage.setItem("address",JSON.stringify(address));
    showAddress();
    addressView.style.display = "block";
    addressForm.style.display = "none";
    editBtn.style.display = "inline-block";
    saveBtn.style.display = "none";
    dialog.close();
});

closeBtn.addEventListener("click",()=>{
    dialog.close();
});