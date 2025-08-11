import { data } from "./bag.js";
//calculating total khana peena in the house


const dishes = [
  {
    id: "d1",
    name: "Chicken Biryani",
    servingSize: "1 plate (~350g)",
    image: "/images/nonVegCurry/chicken_biryani.jpg",
    type: "non_veg",
    ingredients: [
      { item: "Rice", quantity: "150 g" },
      { item: "Chicken", quantity: "120 g" },
      { item: "Onion", quantity: "50 g" },
      { item: "Tomato", quantity: "40 g" },
      { item: "Curd", quantity: "40 g" },
      { item: "Oil", quantity: "15 g" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: {
      calories: 650,
      protein: 28,
      carbs: 78,
      fat: 20
    }
  },
  {
    id: "d2",
    name: "Chicken Curry",
    servingSize: "1 bowl (~250g)",
    image: "/images/nonVegCurry/chicken_curry.jpg",
    type: "non_veg",
    ingredients: [
      { item: "Chicken", quantity: "150 g" },
      { item: "Onion", quantity: "50 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Oil", quantity: "15 g" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: {
      calories: 320,
      protein: 26,
      carbs: 6,
      fat: 20
    }
  },
  {
    id: "d200",
    name: "Egg Curry",
    servingSize: "1 bowl (~220g)",
    type: "non_veg",
    image: "/images/nonVegCurry/egg_curry.jpg",
    ingredients: [
      { item: "Eggs", quantity: "2 p" },
      { item: "Onion", quantity: "50 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Oil", quantity: "15 g" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: {
      calories: 280,
      protein: 14,
      carbs: 6,
      fat: 20
    }
  },
  {
    id: "d3",
    name: "Fish Curry",
    servingSize: "1 bowl (~230g)",
    type: "non_veg",
    image: "/images/nonVegCurry/fish_curry.jpg",
    ingredients: [
      { item: "Fish", quantity: "150 g" },
      { item: "Onion", quantity: "40 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Oil", quantity: "15 g" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: {
      calories: 290,
      protein: 26,
      carbs: 5,
      fat: 18
    }
  },
  {
    id: "d4",
    name: "Mutton Curry",
    type: "non_veg",
    image: "/images/nonVegCurry/mutton_curry.jpg",
    ingredients: [
      { item: "Mutton", quantity: "150 g" },
      { item: "Onion", quantity: "80 g" },
      { item: "Tomato", quantity: "60 g" },
      { item: "Oil", quantity: "20 g" },
      { item: "Ginger-Garlic Paste", quantity: "10 g" },
      { item: "Spices", quantity: "5 g" },
      { item: "Salt", quantity: "0.01 g" },
      { item: "Water", quantity: "100 ml" }
    ],
    nutrition: { calories: 340, protein: "28g", fat: "22g", carbs: "8g" }
  },

  {
    id: "d5",
    name: "Prawns Curry",
    servingSize: "1 bowl (~220g)",
    type: "non_veg",
    image: "/images/nonVegCurry/prawns_curry.jpg",
    ingredients: [
      { item: "Prawns", quantity: "150 g" },
      { item: "Onion", quantity: "40 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Oil", quantity: "15 g" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: {
      calories: 260,
      protein: 24,
      carbs: 5,
      fat: 16
    }
  },
  {
    id: "d6",
    name: "Aloo Gobi",
    type: "veg_curry",
    image: "/images/vegCurry/aalu_gobi.jpg",
    ingredients: [
      { item: "Potato", quantity: "150 g" },
      { item: "Cauliflower", quantity: "150 g" },
      { item: "Onion", quantity: "50 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Ginger-Garlic Paste", quantity: "10 g" },
      { item: "Oil", quantity: "15 ml" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: { calories: 230, protein: "6g", fat: "9g", carbs: "33g" }
  },
  {
    id: "d7",
    name: "Baingan Bharta",
    type: "veg_curry",
    image: "/images/vegCurry/baigan_bharta.jpg",
    ingredients: [
      { item: "Brinjal", quantity: "200 g" },
      { item: "Onion", quantity: "50 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Green Chilli", quantity: "5 g" },
      { item: "Oil", quantity: "15 ml" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: { calories: 180, protein: "4g", fat: "8g", carbs: "25g" }
  },
  {
    id: "d8",
    name: "Bhindi Masala",
    type: "veg_curry",
    image: "/images/vegCurry/bhindi_masala.jpg",
    ingredients: [
      { item: "Bhindi", quantity: "200 g" },
      { item: "Onion", quantity: "50 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Oil", quantity: "15 ml" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: { calories: 160, protein: "4g", fat: "8g", carbs: "18g" }
  },
  {
    id: "d9",
    name: "Chole",
    type: "veg_curry",
    image: "/images/vegCurry/chole.jpg",
    ingredients: [
      { item: "Chickpeas", quantity: "150 g" },
      { item: "Onion", quantity: "50 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Ginger-Garlic Paste", quantity: "10 g" },
      { item: "Oil", quantity: "15 ml" },
      { item: "Spices", quantity: "7 g" }
    ],
    nutrition: { calories: 280, protein: "12g", fat: "8g", carbs: "40g" }
  },
  {
    id: "d10",
    name: "Dal Makhani",
    type: "veg_curry",
    image: "/images/vegCurry/dal_makhni.jpg",
    ingredients: [
      { item: "Black Gram", quantity: "80 g" },
      { item: "Kidney Beans", quantity: "20 g" },
      { item: "Onion", quantity: "40 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Cream", quantity: "10 ml" },
      { item: "Butter", quantity: "5 g" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: { calories: 310, protein: "14g", fat: "12g", carbs: "38g" }
  },
  {
    id: "d11",
    name: "Matar Mushroom",
    type: "veg_curry",
    image: "/images/vegCurry/matar_mashroom.jpg",
    ingredients: [
      { item: "Mushrooms", quantity: "150 g" },
      { item: "Green Peas", quantity: "100 g" },
      { item: "Onion", quantity: "50 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Oil", quantity: "15 ml" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: { calories: 190, protein: "7g", fat: "8g", carbs: "20g" }
  },
  {
    id: "d12",
    name: "Moong Dal",
    type: "veg_curry",
    image: "/images/vegCurry/moong_dal.jpg",
    ingredients: [
      { item: "Moong Dal", quantity: "70 g" },
      { item: "Onion", quantity: "30 g" },
      { item: "Tomato", quantity: "30 g" },
      { item: "Oil", quantity: "10 ml" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: { calories: 220, protein: "13g", fat: "6g", carbs: "30g" }
  },
  {
    id: "d13",
    name: "Palak Paneer",
    type: "veg_curry",
    image: "/images/vegCurry/palak_paneer.jpg",
    ingredients: [
      { item: "Spinach", quantity: "200 g" },
      { item: "Paneer", quantity: "80 g" },
      { item: "Onion", quantity: "40 g" },
      { item: "Tomato", quantity: "40 g" },
      { item: "Ginger-Garlic Paste", quantity: "10 g" },
      { item: "Oil", quantity: "15 ml" },
      { item: "Spices", quantity: "5 g" }
    ],
    nutrition: { calories: 250, protein: "14g", fat: "15g", carbs: "14g" }
  },
  {
    id: "d14",
    name: "Rajma",
    type: "veg_curry",
    image: "/images/vegCurry/rajma.jpg",
    ingredients: [
      { item: "Kidney Beans", quantity: "150 g" },
      { item: "Onion", quantity: "50 g" },
      { item: "Tomato", quantity: "50 g" },
      { item: "Ginger Garlic Paste", quantity: "10 g" },
      { item: "Oil", quantity: "15 ml" },
      { item: "Spices", quantity: "7 g" }
    ],
    nutrition: { calories: 280, protein: "12g", fat: "8g", carbs: "42g" }
  },
  {
    id: "d15",
    name: "Aloo Paratha",
    type: "bread",
    image: "/images/roti_paratha/aalu_paratha.jpg",
    ingredients: [
      { item: "Flour", quantity: "100 g" },
      { item: "Potato", quantity: "100 g" },
      { item: "Ghee", quantity: "10 ml" },
      { item: "Spices", quantity: "3 g" }
    ],
    nutrition: { calories: 290, protein: "7g", fat: "9g", carbs: "46g" }
  },
  {
    id: "d16",
    name: "Paneer Paratha",
    type: "bread",
    image: "/images/roti_paratha/paneer_paratha.jpg",
    ingredients: [
      { item: "Flour", quantity: "100 g" },
      { item: "Paneer", quantity: "80 g" },
      { item: "Ghee", quantity: "10 ml" },
      { item: "Spices", quantity: "3 g" }
    ],
    nutrition: { calories: 320, protein: "12g", fat: "11g", carbs: "44g" }
  },
  {
    id: "d17",
    name: "Roti",
    type: "bread",
    image: "/images/roti_paratha/chapati.jpg",
    ingredients: [
      { item: "Flour", quantity: "50 g" },
      { item: "Water", quantity: "As needed" }
    ],
    nutrition: { calories: 120, protein: "3g", fat: "0.5g", carbs: "25g" }
  },
  {
    id: "d18",
    name: "Steamed Rice",
    type: "bread",
    image: "/images/roti_paratha/steamed_rice.jpg",
    ingredients: [
      { item: "Rice", quantity: "100 g" },
      { item: "Water", quantity: "200 ml" }
    ],
    nutrition: { calories: 130, protein: "2g", fat: "0.3g", carbs: "28g" }
  },
  {
    id: "d19",
    name: "Tandoori Roti",
    type: "bread",
    image: "/images/roti_paratha/tandoori_roti.jpg",
    ingredients: [
      { item: "Flour", quantity: "60 g" },
      { item: "Water", quantity: "As needed" }
    ],
    nutrition: { calories: 150, protein: "4g", fat: "0.5g", carbs: "31g" }
  },
  {
    id: "d20",
    name: "Veg Pulao",
    type: "bread",
    image: "/images/roti_paratha/veg_pulao.jpg",
    ingredients: [
      { item: "Basmati Rice", quantity: "100 g" },
      { item: "Mixed Vegetables", quantity: "80 g" },
      { item: "Ghee", quantity: "10 ml" },
      { item: "Spices", quantity: "4 g" }
    ],
    nutrition: { calories: 220, protein: "5g", fat: "7g", carbs: "35g" }
  },
  {
    id: "d21",
    name: "Apple Shake",
    type: "shake",
    image: "/images/shakes/apple_shake.jpg",
    ingredients: [
      { item: "Apple", quantity: "150 g" },
      { item: "Milk", quantity: "200 ml" },
      { item: "Sugar", quantity: "10g" }
    ],
    nutrition: { calories: 180, protein: "6g", fat: "4g", carbs: "32g" }
  },
  {
    id: "d22",
    name: "Banana Shake",
    type: "shake",
    image: "/images/shakes/banana_shake.jpg",
    ingredients: [
      { item: "Banana", quantity: "120 g" },
      { item: "Milk", quantity: "200 ml" },
      { item: "Sugar", quantity: "10 g" }
    ],
    nutrition: { calories: 210, protein: "7g", fat: "4g", carbs: "42g" }
  },
  {
    id: "d23",
    name: "Pineapple Shake",
    type: "shake",
    image: "/images/shakes/pineapple_shake.jpg",
    ingredients: [
      { item: "Pineapple", quantity: "150 g" },
      { item: "Milk", quantity: "200 ml" },
      { item: "Sugar", quantity: "10 g" }
    ],
    nutrition: { calories: 170, protein: "6g", fat: "4g", carbs: "30g" }
  },
  {
    id: "d24",
    name: "Strawberry Shake",
    type: "shake",
    image: "/images/shakes/strawberry_shake.jpg",
    ingredients: [
      { item: "Strawberry", quantity: "150 g" },
      { item: "Milk", quantity: "200 ml" },
      { item: "Sugar", quantity: "10 g" }
    ],
    nutrition: { calories: 160, protein: "6g", fat: "4g", carbs: "28g" }
  },
  {
    id: "d25",
    name: "Mango Shake",
    type: "shake",
    image: "/images/shakes/mango_shake.jpg",
    ingredients: [
      { item: "Mango", quantity: "150 g" },
      { item: "Milk", quantity: "200 ml" },
      { item: "Sugar", quantity: "10 g" }
    ],
    nutrition: { calories: 200, protein: "6g", fat: "4g", carbs: "38g" }
  },
  {
    id: "d26",
    name: "Papaya Shake",
    type: "shake",
    image: "/images/shakes/papaya_shake.jpg",
    ingredients: [
      { item: "Papaya", quantity: "150 g" },
      { item: "Milk", quantity: "200 ml" },
      { item: "Sugar", quantity: "10 g" }
    ],
    nutrition: { calories: 170, protein: "6g", fat: "4g", carbs: "30g" }
  }
];



let food = document.getElementById("food");
window.onload = function () {
  showAll(dishes);
  changeInterface("detail");
}
// let fil = document.getElementById("filter");
// let img45 = document.createElement("img");
// img45.src = "/images/shakes/banana_shake.jpg";
// fil.append(img45);

function showAll(product = dishes) {
  food.innerHTML = "";
  for (let i = 0; i < product.length; i++) {
    let card = `
        <div onclick="showDetail('${product[i].id}')" class="card">
            <h3>${product[i].name}</h3>
            <div id="image2">
                <img src="${product[i].image}" alt="">
            </div>
            <button onclick="dietList('${product[i].id}')">
              <span class="material-symbols-outlined">
              add
              </span>
            </button>
        </div>
        `;
    food.innerHTML += card;
  }
  showDetail(`${product[0].id}`)
}

function showShakes() {
  let shakes = dishes.filter((p) => {
    return p.type == "shake";
  })
  showAll(shakes);
}

function showNonVegCurry() {
  let nonVeg = dishes.filter((p) => {
    return p.type == "non_veg";
  })
  showAll(nonVeg);
}

function showVegCurry() {
  let veg = dishes.filter((p) => {
    return p.type == "veg_curry";
  })
  showAll(veg);
}
function showBread() {
  let bread = dishes.filter((p) => {
    return p.type == "bread";
  })
  showAll(bread);
}
window.showBread = showBread;
window.showVegCurry = showVegCurry;
window.showNonVegCurry = showNonVegCurry;
window.showShakes = showShakes;
window.showAll = showAll;


function showDetail(id) {
  let meal = dishes.find(m => m.id == id);
  let detail = document.getElementById("detail");
  detail.innerHTML = "";
  let card = `
            <div id="card23">
                <h3>${meal.name}</h3>
                <div>
                    <img src="${meal.image}" alt="">
                </div>
                <h3>Ingredients -:</h3>
                <div></div>
            </div>
  `;
  detail.innerHTML += card;
  let moreInfo = document.querySelector("#card23>div:nth-child(4)");
  let prep = meal.ingredients;
  for (let i = 0; i < prep.length; i++) {
    let amount = prep[i].quantity.split(" ");
    let amountNum = amount[0];
    let amountA = amount[1];
    let card2 = `
                    <div>
                        <h3>${prep[i].item}</h3>
                        <h3>${amountNum}${amountA}</h3>
                    </div>
    `;
    moreInfo.innerHTML += card2
  }
  let btn = `
  <button onclick="dietList('${meal.id}')">Add to diet</button>
  `;
  moreInfo.innerHTML += btn;
}
window.showDetail = showDetail;

// ------------------------------------------------

function changeInterface(code) {
  let detailInterace = document.getElementById("detail");
  let dietListInterface = document.getElementById("diet");

  if (code == "detail") {
    detailInterace.style.display = "flex";
    dietListInterface.style.display = "none";
  } else {
    detailInterace.style.display = "none";
    dietListInterface.style.display = "block";
  }
}
//unable to call inline calling function in module script
window.changeInterface = changeInterface;

function dietList(id) {
  let dietList = JSON.parse(localStorage.getItem("dietList")) || [];
  if (id != undefined) {
    let meal = dishes.find(s => s.id == id);
    let obj = {
      name: meal.name,
      ingredients: meal.ingredients
    }
    dietList.push(obj);
    localStorage.setItem("dietList", JSON.stringify(dietList));
  }

  let nameTag = document.querySelector("#diet>div:nth-child(1)");
  nameTag.innerHTML = "";

  let need = {};
  for (let i = 0; i < dietList.length; i++) {
    let ingred = dietList[i].ingredients;
    let card54 = `
                    <div>
                        <p>${dietList[i].name}</p>
                        <span class="material-symbols-outlined">
                        close
                        </span>
                    </div>
  `;
    nameTag.innerHTML += card54;
    for (let j = 0; j < ingred.length; j++) {
      let name = ingred[j].item;
      let weight = ingred[j].quantity.split(" ");
      let weight2 = Number(weight[0])/1000;
      if (need[name]) {
        need[name] = need[name] + weight2;
      } else {
        need[name] = weight2;
      }
      //fixing decimal digit to max 2
      need[name] = parseFloat(need[name].toFixed(3));
    }
  }
  localStorage.setItem("need", JSON.stringify(need));
  let isEnough = JSON.parse(localStorage.getItem("need")) || {};
  let reqItem = document.querySelector("#diet>div:nth-child(2)");
  reqItem.innerHTML = "";
  for (let key in isEnough) {
    //checking total khana peena in the house
    let isFound = 0;
    for(let k = 0; k < data.length; k++){
      let name1 = key.toLowerCase();
      if(data[k].name.toLowerCase().includes(name1)){
        isFound += Number(data[k].weight)
      }
    }
    let card98 = `
                    <div>
                        <h3>${key}</h3>
                        <div>
                            <h3>${isFound}/</h3>
                            <h3>${isEnough[key]}</h3>
                        </div>
                    </div>
  `;
    reqItem.innerHTML += card98;
  }

}
window.dietList = dietList
dietList();