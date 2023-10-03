var ele = document.getElementById("checkin");
var ele2 = document.getElementById("checkout");
var today = new Date(new Date().setHours(0, 0, 0, 0)).toLocaleDateString('fr-CA');
var tommorow = new Date(+new Date().setHours(0, 0, 0, 0) + 86400000).toLocaleDateString('fr-CA')
ele.innerHTML = today;
ele2.innerHTML = tommorow;



var calander1 = document.getElementById("setTodaysDate")
var calander2 = document.getElementById("setTommorowDate")

var today = new Date().toISOString().split('T')[0];
var calander1 = document.getElementById("setTodaysDate");
calander1.value = today;
document.getElementById("setTodaysDate").setAttribute('min', today);
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setUTCHours(0, 0, 0, 0);
var tomorrowISOString = tomorrow.toISOString().split('T')[0];
calander2.setAttribute('min', tomorrowISOString);
calander2.value = tomorrowISOString




var lastcnt = 1;
var currentselected = 1;
//increment decrement part of the adullt and children
//id for the parent is adultno and child is childno
function incrementchild() {
    var child = document.getElementById("childno" + currentselected);
    var cnt = child.innerHTML;
    child.innerHTML = parseInt(cnt) + 1 <= 4 ? parseInt(cnt) + 1:4;
}
function decrementchild() {
    var child = document.getElementById("childno" + currentselected);
    var cnt = child.innerHTML;
    child.innerHTML = parseInt(cnt) - 1 >= 0 ? parseInt(cnt) - 1 : 0;
}
function incrementadult() {
    var child = document.getElementById("adultno" + currentselected);
    var cnt = child.innerHTML;
    child.innerHTML = parseInt(cnt) + 1 <= 4 ? parseInt(cnt) + 1 : 4;
}
function decrementadult() {
    var child = document.getElementById("adultno" + currentselected);
    var cnt = child.innerHTML;
    child.innerHTML = parseInt(cnt) - 1 >= 1 ? parseInt(cnt) - 1 : 1;
}



//function for adding the new room 
function addroom() {
    var parent = document.getElementById("rooms");
    createRoomElement2(parent);
    addInfoEle();
    selectRoom(lastcnt)
    if (lastcnt === 5) {
        var btn = document.getElementById("addbtn")
        btn.style.display = "none";
    }
}

function removeroom() {
    var ele = document.getElementById(lastcnt);
    removeInfoEle();
    ele.remove();
    if (lastcnt === currentselected) {
        currentselected--;
        var parent = document.getElementById(currentselected);
        parent.className = "room active";
        var info = document.getElementById("infoele" + currentselected);
        info.style.display = "flex";
    }
    lastcnt--;
    if (lastcnt < 5) {
        var btn = document.getElementById("addbtn")
        btn.style.display = "inline-block";
    }
}
function addInfoEle() {
    var parent = document.getElementById("info");
    createInfoElement(parent);
}
function removeInfoEle() {
    var ele = document.getElementById("infoele" + lastcnt);
    ele.remove();
}
function createInfoElement(parent) {
    const html = `
    <div class="infoele" style="display:none;" id="infoele${lastcnt}">
        <div style="border-right: 1px solid #a49494;width: 50%;">
            ADULTS
            <button onclick="decrementadult()" type="button"><span>-</span></button>
            <span id="adultno${lastcnt}">1</span>
            <button onclick="incrementadult()" type="button"><span>+</span></button>
        </div>
        <div>
            CHILDREN 
            <button onclick="decrementchild()" type="button"><span>-</span></button>
            <span id="childno${lastcnt}">1</span>
            <button onclick="incrementchild()" type="button"><span>+</span></button>
        </div>
    </div>`;
    parent.innerHTML += html;
}
function createRoomElement2(parent) {
    lastcnt++;
    const html = `
        <div class="room" id="${lastcnt}">
            <button type="button" onclick="selectRoom(${lastcnt})">
                <span>Room </span>
                <span id="room${lastcnt}">${lastcnt}</span>
            </button>
            <img src="../Images/close.png" width="10%" onclick="removeroom()"/>
      </div>
    `;
    parent.innerHTML += html;
}
function selectRoom(receivedcnt) {
    var current = document.getElementById(currentselected)
    current.className = "room"
    var currinfo = document.getElementById("infoele" + currentselected);
    currinfo.style.display = "none"

    currentselected = receivedcnt;
    var parent = document.getElementById(currentselected);
    parent.className = "room active";
    var info = document.getElementById("infoele" + currentselected);
    info.style.display = "flex";
}

function toggleForm() {
    var form = document.getElementById("toggle-form");
    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}


//image showing from 1 to 12
var img_content = document.getElementById("image-content");
var img = '';
for (let i = 2; i <= 17; i++) {
    img += '<img src="../Images/Hotel/'+i+'.jpeg"/>'
}
for (let i = 18; i <= 22; i++) {
    img += '<img src="../Images/Hotel/' + i + '.png"/>'
}
img_content.innerHTML = img;




//show and hide the paragraph
let content = `
Jag Niwas, constructed between 1743-1746 by Maharana Jagat Singh II, the 62nd custodian of House of Mewar, was used as a summer retreat by the Mewar Royal family over years until Maharana Bhagwat Singh, Mewar of Udaipur in 1963 converted it into a heritage hotel. A jewel floating in the middle of Lake Pichola, Taj Lake Palace is a building made of marble locally sourced from Rajnagar, brought in by bullock carts travelling 66 kms to Udaipur. Architecture influenced from Mughals, predominantly lead by Mewari techniques this heritage hotel in Udaipur has 65 luxurious rooms and 18 grand suites. Restored to its pristine glory, this spectacular palace became world renowned when the James Bond film ‘Octopussy’ was filmed at it. It was the secluded lair of the film’s eponymous Bond Girl.  
 Its location on an island in the midst of a lake affords every room breathtaking views of the neighbouring City Palace, Aravalli Hills, Machla Magra Hills and Jag Mandir. The incomparable location provides the perfect backdrop for the exquisite cuisines at the elegant restaurants of Taj Lake Palace open only to resident guests. Signature speciality restaurants at this palace serve a choice of cuisines. Neel Kamal for authentic Rajasthani and other dishes from India; and the seasonally open-air Bhairo for contemporary European delicacies. In the evening, indulge in signature martinis, cocktails and a grand collection of premium international spirits at the bar, Amrit Sagar. Continue being pampered as a royal at our J Wellness Circle in Udaipur, with carefully created treatments drawn from the ancient wellness heritage of India, and the fabled lifestyle and savoir vivre of Indian royalty. This 5 star palace hotel in Udaipur at Lake Pichola continues the tradition of grand soirees and formal levees which were hosted here by the royal family of Udaipur. Known as the Venice of the East, the city of Udaipur, with its elaborate palaces, serene lakes, exotic temples and resplendent gardens, has a lot to offer. Our concierge would be happy to assist you in making arrangements and planning a special tour of the city of lakes in one of our vintage cars. 
 <button type="button" id="less" onclick="showLessInfo()">Show Less</button>
 `
let smallcontent = `
Jag Niwas, constructed between 1743-1746 by Maharana Jagat Singh II, the 62
   <sup>nd</sup>
                            custodian of House of Mewar, was used as a summer retreat by the Mewar Royal family over years until Maharana Bhagwat Singh, Mewar of Udaipur in 1963 converted it into a heritage hotel. A jewel
   <span id="dots">...</span>
                            <button type="button" id="more" onclick="showMoreInfo()">Show More</button> 
`
let btnmore = document.getElementById("more");
let btnless = document.getElementById("less");
let dots = document.getElementById("dots");
let para = document.getElementById("para");
function showMoreInfo() {
    para.innerHTML = content;
    document.getElementsByClassName('hotel-image')[0].style.height = "78rem";
}

function showLessInfo() {
    para.innerHTML = smallcontent;
    document.getElementsByClassName('hotel-image')[0].style.height = "46rem";
}



//carosoul data
var cards = [
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
let cardsHtml = '';
let slides = [];
for (let i = 0; i < cards.length; i++) {
    let slideInnerHtml = '';
    for (j = i; j < 3 + i && j < cards.length; j++) {
        let text = cards[j].showMoreText.length == 0 ? cards[j].defaultText : cards[j].showMoreText;
        slideInnerHtml +=
            `
     <div class="card">
        <div class="img-cardinfo-wrapper">
            <div class="img-container">
                <img src="../Images/Rooms/`+ cards[j].image + `.jpeg"/>
            </div>
            <div class="card-info">
                <span>`+ cards[j].title + `</span>
                <p>`+ text + `</p>
                <div>
                    <img src="../Images/area.png"/>
                    <span>`+ cards[j].area + `</span>
                </div>
                <div>
                    <img src="../Images/wifi.png"/>
                    <span>`+ cards[j].wifi + `</span>
                </div>
                <div>
                    <img src="../Images/maximumOccoumpany.png"/>
                    <span>`+ cards[j].gauest + `</span>
                </div>
                <div>
                    <img src="../Images/bedType.png"/>
                    <span>`+ cards[j].bedtype + `</span>
                </div>
            </div>
        </div>
        <div class="price">
            <p>Starting Rate/Night</p>
            <div>`+ cards[j].price + `</div>
            <button type="button">VIEW DETAILS</button>
        </div>
    </div>
    `
    }
    slides.push(slideInnerHtml);
    i = j-1;
}
let cardOuter = document.getElementById("card-outer");
let onescreen = document.getElementById("onescreen");
let onscreenCarIndex = 0;
onescreen.innerHTML = slides[onscreenCarIndex];
let btnleft = document.getElementById("left-arr")
let rightbtn = document.getElementById("right-arr");
btnleft.style.display = 'none';

btnleft.addEventListener('click', () => {
    onscreenCarIndex--;
    onescreen.innerHTML = slides[onscreenCarIndex];
    if (onscreenCarIndex === 0) {
        btnleft.style.display = "none";
    }else if (onscreenCarIndex < slides.length - 1) {
        rightbtn.style.display = 'block';
    }
})
rightbtn.addEventListener('click', () => {
    onscreenCarIndex++;
    onescreen.innerHTML = slides[onscreenCarIndex];
    if (onscreenCarIndex === slides.length - 1) {
        rightbtn.style.display = "none";
    }else if (onscreenCarIndex > 0) {
        btnleft.style.display = "block";
    }
})
