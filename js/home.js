import devicesData from '../data/products/devices/data.json' with { type: 'json' };
import accessoriesData from '../data/products/accessories/data.json' with { type: 'json' };
import audioData from '../data/products/audio/data.json' with { type: 'json' };

const allProducts = {
    "Mobile Phones & Tablets": devicesData,
    "Computers & Accessories": accessoriesData,
    "Audio & Gaming": audioData
};

function setBody(data, heading) {

    let tempBody = '';

    data.forEach((item, idx) => {

        tempBody += `
            <div class="item">

                <div class="item${idx + 1}-img">
                    <img src="${item.img}" alt="">
                </div>

                <div class="item${idx + 1}-info">

                    <div class="product${idx + 1}-spec">
                        <p><b>${item.name}</b></p>
                        <p>Price: Rs. ${item.price}</p>
                    </div>

                    <!-- CHANGE 2 -->
                    <button
                        class="add-btn"
                        data-category="${heading}"
                        data-index="${idx}">
                        Add
                    </button>

                </div>

            </div>
        `;
    });

    return `
        <h3 style="margin-left:30px;">${heading}</h3>
        <div class="row">
            ${tempBody}
        </div>
    `;
}

let prod_Body = document.getElementById('prod-body');

prod_Body.innerHTML = setBody(devicesData, "Mobile Phones & Tablets");
prod_Body.innerHTML += setBody(accessoriesData, "Computers & Accessories");
prod_Body.innerHTML += setBody(audioData, "Audio & Gaming");

let addButtons = document.querySelectorAll('.add-btn');

addButtons.forEach(button => {

    button.addEventListener('click', () => {

        const category = button.dataset.category;
        const index = button.dataset.index;

        const product = allProducts[category][index];

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existing = cart.find(item => item.name === product.name);

        if (existing) {
            existing.count++;
        } else {
            cart.push({
                ...product,
                count: 1
            });
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${product.name} added to cart!`);

        console.log(cart);

    });

});