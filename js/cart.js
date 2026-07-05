import data from '../data/cart/data.json' with {type: 'json'};

let cartBody = document.getElementById('cart-body');
cartBody.innerHTML = `
    <h3 style="margin: 30px 30px 0px 30px;">All Products (10)</h3>
`;
let tempBody = '';
data.forEach((data, idx) => {
    if(idx % 5 == 0){
        cartBody.innerHTML += `
            <div class='row'> ${tempBody} </div>
        `;
        tempBody = '';
    }
    tempBody += `
        <div class="item">
            <div class="item1-img">
                <img src="../assets/accessories/product1.jpg" alt="">
            </div>
            <div class="item$1-info">
                <div class="product1-spec">
                    <p><b>Asus Vivobook</b></p>
                    <p>Price: Rs. 2000</p>
                </div>
                <div class="prod-count">
                    <p class="unit">-</p>
                    <p class="value">10</p>
                    <p class="unit">+</p>
                </div>
            </div>
        </div>
    `;
});

cartBody.innerHTML += `
    <div class='row'> ${tempBody} </div>
`;