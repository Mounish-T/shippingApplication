import devicesData from '../data/products/devices/data.json' with {type: 'json'};
import accessoriesData from '../data/products/accessories/data.json' with {type: 'json'};
import audioData from '../data/products/audio/data.json' with {type: 'json'};

function setBody(data, heading, element){
    let tempBody = ''
    data.forEach((data, idx) => {    
        tempBody += `
            <div class="item">
                <div class="item${idx+1}-img">
                    <img src="${data.img}" alt="">
                </div>
                <div class="item${idx+1}-info">
                    <div class="product${idx+1}-spec">
                        <p><b>${data.name}</b></p>
                        <p>Price: Rs.${data.price}</p>
                    </div>
                    <button>Add</button>
                </div>
            </div>
        `;
    });
    tempBody = `
        <h3 style="margin-left: 30px;">${heading}</h3>
        <div class="row1"> ${tempBody} </div>
    `;
    return tempBody
}

let prod_Body = document.getElementById('prod-body');
prod_Body.innerHTML = setBody(devicesData, "Mobile Phones & Tablets", prod_Body);
prod_Body.innerHTML += setBody(accessoriesData, "Computers & Accessories", prod_Body);
prod_Body.innerHTML += setBody(audioData, "Audio & Gaming", prod_Body);
