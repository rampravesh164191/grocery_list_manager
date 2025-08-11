let cart = JSON.parse(localStorage.getItem("cart")) || [];
let catchCart = document.querySelector("#cart>div:nth-child(1)");


function showCartItem(product = cart) {
    catchCart.innerHTML = "";
    let subTotal = 0;
    let catchAmt = document.getElementById("amt");
    for (let i = 0; i < product.length; i++) {
        let totalPrice = product[i].price * product[i].quantity;
        // let unit = 
        let card = `
            <div class="card">
                <div>
                    <img src="${product[i].image}" alt="">
                </div>
                <div>
                    <p>${product[i].name}</p>
                    <p>Price : ₹${product[i].price}</p>
                    <div>
                        <button onclick="decreasePrice('${product[i].id}')">-</button>
                        <p>${product[i].quantity}</p>
                        <button onclick="increasePrice('${product[i].id}')">+</button>
                    </div>
                </div>
                <div>
                    <p>₹${totalPrice}</p>
                </div>
            </div>
    `;
        subTotal += totalPrice;
        catchCart.innerHTML += card;
    }
    catchAmt.innerText = `₹${subTotal}`;
}
window.showCartItem = showCartItem;

function increasePrice(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart[i].quantity += 1;
        }
    }
    showCartItem();
}
window.increasePrice = increasePrice;
function decreasePrice(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart[i].quantity -= 1;
            if (cart[i].quantity <= 0) {
                let remainingItem = cart.filter(s => s.id != id);
                localStorage.setItem("cart",JSON.stringify(remainingItem));
                cart = JSON.parse(localStorage.getItem("cart"));
                showCartItem(remainingItem);
            } else {
                showCartItem();
            }
        }
    }
}
window.decreasePrice = decreasePrice;
showCartItem();