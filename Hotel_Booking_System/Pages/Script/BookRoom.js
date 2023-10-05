let rooms = [
    {
        title: "Luxury Room Garden Non Lake View",
        image: "Luxury Room Garden Non Lake View",
        defaultText: "Luxury Rooms offer princely-inspired décor with stunning views of the Lily Pond. Each room is unique in size and is adorned with traditional Indian silks and dark teak furniture.",
        showMoreText: "",
        area: "21-33 Sq Mt",
        wifi: "Inclusive of WiFi",
        gauest: "Up to 2 guests",
        bedtype: "King/Twin",
        price: "₹ 37,500 *"
    },
    {
        title: "Luxury Room Lake View",
        image: "Luxury Room Lake View",
        defaultText: "Luxury Rooms have a princely-inspired décor with wooden lattice & araish work ceilings and discrete niches. They offer views of",
        showMoreText: "Luxury Rooms have a princely-inspired décor with wooden lattice & araish work ceilings and discrete niches. They offer views of the placid waters of Lake Pichola. Each room is unique in size and is adorned with traditional Indian silks and dark teak furniture.",
        area: "24-31 Sq Mt",
        wifi: "Inclusive of WiFi",
        gauest: "Up to 2 guests",
        bedtype: "King/Twin",
        price: "₹ 47,500 *"
    },
    {
        title: "Palace Room Lake View",
        image: "Palace Room Lake View",
        defaultText: "Palace Rooms have a princely-inspired décor with wooden lattice & araish work ceilings and discrete niches. They offer views of ",
        showMoreText: "Palace Rooms have a princely-inspired décor with wooden lattice & araish work ceilings and discrete niches. They offer views of the placid waters of Lake Pichola. Each room is unique in size and is adorned with traditional Indian silks and dark teak furniture.",
        area: "28-42 Sq Mt",
        wifi: " Inclusive of WiFi",
        gauest: "Up to 3 guests",
        bedtype: "King/Twin",
        price: "₹ 52,500 *"
    },
    {
        title: "Historical 1 Bedroom Suite Lake View",
        image: "Historical 1 Bedroom Suite Lake View",
        defaultText: "The Historical Suites present a welcoming ambience with marble floors, exquisite Rajasthani artwork and sheer fabrics, which enable",
        showMoreText: "The Historical Suites present a welcoming ambience with marble floors, exquisite Rajasthani artwork and sheer fabrics, which enable crisp sunlight to enhance the beauty of each room. A four-poster bed, a sitting area overlooking Lake Pichola, a walk-in wardrobe and a spacious bathroom make these suites ideal for the discerning leisure traveler. Suite Names are Rang Mahal, Sandhya & Sisarma Darshan.",
        area: "42-61 Sq Mt",
        wifi: "Inclusive of WiFi",
        gauest: "Up to 3 guests",
        bedtype: "King",
        price: "₹ 64,000 *"
    },
    {
        title: "Royal Suite 1 Bedroom Lake View",
        image: "Royal Suite 1 Bedroom Lake View",
        defaultText: "Outfitted in impeccable designs, each of the Royal Suites are adorned with stained glass windows offering stunning views of the lake",
        showMoreText: "Outfitted in impeccable designs, each of the Royal Suites are adorned with stained glass windows offering stunning views of the lake and the Aravali mountain range. Suite Names are Basant Bahar, Machla Magra, Jag Mandir Darshan & Aravali Darshan. Basant Bahar and Jag Mandir Darshan are interconnected.",
        area: "53-59 Sq Mt",
        wifi: " Inclusive of WiFi",
        gauest: "Up to 3 guests",
        bedtype: "King",
        price: "₹ 1,07,600 *"
    },
    {
        title: "Grand Royal Suite 1 Bedroom Lake View",
        image: "Grand Royal Suite 1 Bedroom Lake View",
        defaultText: "The Grand Royal Suites are the epitome of royal grandeur. Each of these individually themed suites feature high ceilings, deeply-car",
        showMoreText: "The Grand Royal Suites are the epitome of royal grandeur. Each of these individually themed suites feature high ceilings, deeply-carved mouldings, ornate glasswork, and miniature paintings. Many rooms offers unique features: Jacuzzi tubs, marble clad bathrooms with switch-lite glass windows, rain-showers, original works of art, crystal chandeliers.",
        area: "74-108 Sq Mt",
        wifi: "Inclusive of WiFi",
        gauest: "Up to 3 guests",
        bedtype: "King",
        price: "₹ 1,88,400 *"

    },
    {
        title: "Grand Presidential Suite 1 Bedroom Lake View",
        image: "Grand Presidential Suite 1 Bedroom Lake View",
        defaultText: "The Shambhu Prakash suite, named after the Maharana Shambhu Singh is remembered for his progressive reforms and welfare measures und",
        showMoreText: "The Shambhu Prakash suite, named after the Maharana Shambhu Singh is remembered for his progressive reforms and welfare measures undertaken in the 1860s. This suite is furnished with high curved arches and has a European touch to its design. The adjoining balcony offers panoramic views of the lake and hills.",
        area: "161 Sq Mt",
        wifi: "Inclusive of WiFi",
        gauest: "Up to 3 guests",
        bedtype: "King",
        price: "₹ 4,00,000 *"
    }
]
const date1 = new Date(requiredRooms.from);
const date2 = new Date(requiredRooms.to);
const timeDifference = date2.getTime() - date1.getTime();
const TotalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(jsrooms);
let totalrooms = document.getElementById("totalRooms");
let html = "";
for (let j = 0; j < rooms.length; j++) {
    let text = rooms[j].showMoreText.length == 0 ? rooms[j].defaultText : rooms[j].showMoreText;
    const numericPrice = parseInt(rooms[j].price.replace(/[^0-9.*]/g, '')) * TotalDays;
    html += `
     <div class="room-outer">
        <div class="room-image">
            <img src="../Images/Rooms/`+ rooms[j].image + `.jpeg"/>
        </div>

        <div class="room-details">
            <div class="heading">
                <span>`+ rooms[j].title + `</span>
            </div>
            <div class="text-content">
                <p> `+ text + `</p>
            </div>
            <div class="room-facilities">
                <div class="facilities">
                    <div>
                        <div>
                            <img src="../Images/area.png" />
                            <p>`+ rooms[j].area + `</p>
                        </div>
                        <div>
                            <img src="../Images/wifi.png" />
                            <p>`+ rooms[j].wifi + `</p>
                        </div>

                    </div>
                    <div>
                        <div>
                            <img src="../Images/maximumOccoumpany.png" />
                            <p>`+ rooms[j].gauest + `</p>
                        </div>
                        <div>
                            <img src="../Images/bedType.png" />
                            <p>`+ rooms[j].bedtype + `</p>
                        </div>

                    </div>
                </div>`
    if (!isAvailable(rooms[j].title)/*condition for the room should show price or not*/) {
        html += `
               <div class="price">
                    <p style="    width: 22rem;text-align: justify;font-weight: bold;">
                        This Room doesn't match your search criteria.Please try selecting alternate dates, modifying your search options, or choosing an alternate property.</p>
                </div>
            </div>
        </div>
    </div>
        `
    } else {
        if (requiredRooms.Rooms.length === 1) {
            html += `
                               <div class="price">
                <span> &#x20B9; `+ numericPrice.toLocaleString() + `</span>
 <p>Starting Rate/Night</p>
 <input type="button" onclick="directBookingDataSubmit(${numericPrice})" value="Book Room" />
               </div>
            </div>
        </div>
    </div>
            `
        } else {
            html += `
               <div class="price">
                <span>&#x20B9; `+ numericPrice.toLocaleString() + `</span>
 <p>Starting Rate/Night</p>
 <input type="button" onclick="addToCart('`+ rooms[j].title + `','` + numericPrice + `')" value="Select Room" />
               </div>
            </div>
        </div>
    </div>
        `
        }
    }
}
totalrooms.innerHTML = html;

function isAvailable(heading) {
    //console.log(heading)
    //jsrooms.map((obj) => console.log(obj.Type));
    const res = jsrooms.findIndex((obj) => obj.Type === heading);
    console.log(res);
    if (res!==-1) return true;
    return false;
}


let cart = document.getElementById("cart");
let cartCheckoutBtn = `<div id="cardCheckoutBtn" onclick="handleBookingDataSubmit()" class="cart-button">
            <div class="cart-image">
                <img src="../Images/cart.svg"/>
            </div>
            <div class="cart-price">
                <div id="finalprice">
                    0
                </div>
                <div>
                    CHECKOUT
                </div>
            </div>
        </div>`;

let cartData = [];
let currentCartIndex = 0;
let randomId = 0;
refreshCart();
function addToCart(heading, price) {
    if (currentCartIndex !== requiredRooms.Rooms.length) {
        cart.style.display = "flex";
        let obj = {};
        obj.heading = heading;
        obj.price = price;
        obj.adults = requiredRooms.Rooms[currentCartIndex].adult;
        obj.children = requiredRooms.Rooms[currentCartIndex].children;
        randomId = (randomId + 1) % 10;
        obj.randomId = randomId;
        objInnterHtml = cart.innerHTML+`
        <div id="`+ (obj.heading + randomId) + `" class="cart-item">
            <div class="cart-text-content">
                <div class="cart-room-heading">
                    <span>`+ obj.heading.substring(0, 20) + "..." + `</span>
                </div>
                <div class="cart-info">
                    <p>&#x20B9; ${obj.price.toLocaleString()} | ${TotalDays} night</p>
                    <p>1 Room | `+ obj.adults + ` Guests, ` + obj.children + ` Child</p>
                </div>
            </div>
            <div class="cart-delete-img">
                <img onclick="deleteCartItem('`+ obj.heading + `',` + randomId + `)" src="../Images/icons8-delete-100.png" width="2%" />
            </div>
        </div>
`;
        cart.innerHTML = objInnterHtml;
        currentCartIndex++;
        cartData.push(obj);
        refreshCart();
    }
}

function deleteCartItem(heading, randomId) {
    console.log("INside the delete cartdata", cartData, heading, randomId)
    cartData = cartData.filter((obj) => ((obj.heading !== heading) || (obj.randomId !== randomId)));
    currentCartIndex--;
    console.log("after delete cartdata", cartData)
    refreshCart();
}
function refreshCart() {
    console.log("Inside the refreshCart ", cartData);
    let finalhtml = "";
    let TotalPrice = 0;
    for (let j = 0; j < cartData.length; j++) {
        finalhtml = finalhtml + getCartItem(cartData[j], j);
        TotalPrice = TotalPrice+(parseInt(cartData[j].price));
    }
    cart.innerHTML = finalhtml + cartCheckoutBtn;
    document.getElementById("finalprice").innerHTML = `&#x20B9; ${TotalPrice.toLocaleString()}`;
    let emptyRoom = `<div class="cart-additem">SELECT ROOM + </div>`;
    if (requiredRooms.Rooms.length > 1) {
        let emptycarthtml = "";
        for (let i = 0; i < requiredRooms.Rooms.length - cartData.length; i++) {
            emptycarthtml += emptyRoom;
        }
        cart.innerHTML += emptycarthtml;
    }
    if (currentCartIndex === 0) cart.style.display = "none";
}
function getCartItem(obj,i) {
    return `
        <div id="`+ (obj.heading + randomId) + `" class="cart-item">
            <div class="cart-text-content">
                <div class="cart-room-heading">
                    <span>`+ obj.heading.substring(0, 20) + "..." + `</span>
                </div>
                <div class="cart-info">
                    <p>&#x20B9;${parseInt(obj.price).toLocaleString()} | ${TotalDays} night</p>
                    <p>1 Room | `+ requiredRooms.Rooms[i].adult + ` Guests, ` + requiredRooms.Rooms[i].children + ` Child</p>
                </div>
            </div>
            <div class="cart-delete-img">
                <img onclick="deleteCartItem('`+ obj.heading + `',` + obj.randomId + `)" src="../Images/icons8-delete-100.png" width="2%" />
            </div>
        </div>
`
}

function handleBookingDataSubmit() {
    if (cartData.length !== requiredRooms.Rooms.length) {
        window.alert("Pls Select All Rooms");
    } else {
        const TotalBill = parseInt((document.getElementById("finalprice").textContent).replace(/[^0-9.*]/g, ''));
        window.alert(TotalBill);
    }
};
function directBookingDataSubmit(price) {
    window.alert(price);
}