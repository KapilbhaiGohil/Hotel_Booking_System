var ele = document.getElementById("checkin");
var ele2 = document.getElementById("checkout");
var today = new Date(new Date().setHours(0, 0, 0, 0)).toLocaleDateString('fr-CA');
var tommorow = new Date(+new Date().setHours(0, 0, 0, 0) + 86400000).toLocaleDateString('fr-CA')
if (ele.textContent.trim() == "" && ele2.textContent.trim() == "") {

    ele.innerHTML = today;
    ele2.innerHTML = tommorow;
}
  



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


calander1.addEventListener("change", () => {
    if (new Date(calander1.value) >= new Date(calander2.value)) {
        let day = new Date(calander1.value);
        day.setDate(day.getDate() + 1)
        day.setUTCHours(0, 0, 0, 0);
        calander2.value = day.toISOString().split('T')[0];
    }
})
calander2.addEventListener("change", () => {
    if (new Date(calander1.value) >= new Date(calander2.value)) {
        let day = new Date(calander2.value);
        day.setDate(day.getDate() - 1)
        day.setUTCHours(0, 0, 0, 0);
        calander1.value = day.toISOString().split('T')[0];
    }
})



var lastcnt = 1;
var currentselected = 1;
//increment decrement part of the adullt and children
//id for the parent is adultno and child is childno
//data maintaining
let bookingData = {
    Rooms: [{children:0,adult:1}]
};


function incrementchild() {
    var child = document.getElementById("childno" + currentselected);
    var cnt = child.innerHTML;
    let finalCount = parseInt(cnt) + 1 <= 4 ? parseInt(cnt) + 1 : 4;
    bookingData.Rooms[currentselected-1].children = finalCount;
    child.innerHTML = finalCount;
    console.log(bookingData)
}
function decrementchild() {
    var child = document.getElementById("childno" + currentselected);
    var cnt = child.innerHTML;
    let finalCount = parseInt(cnt) - 1 >= 0 ? parseInt(cnt) - 1 : 0;
    bookingData.Rooms[currentselected-1].children = finalCount;
    child.innerHTML = finalCount
    console.log(bookingData)
}
function incrementadult() {
    var child = document.getElementById("adultno" + currentselected);
    var cnt = child.innerHTML;
    let finalCount = parseInt(cnt) + 1 <= 4 ? parseInt(cnt) + 1 : 4;
    bookingData.Rooms[currentselected - 1].adult = finalCount;
    child.innerHTML = finalCount;
    console.log(bookingData)
}
function decrementadult() {
    var child = document.getElementById("adultno" + currentselected);
    var cnt = child.innerHTML;
    let finalCount = parseInt(cnt) - 1 >= 1 ? parseInt(cnt) - 1 : 1;
    bookingData.Rooms[currentselected - 1].adult = finalCount;
    child.innerHTML = finalCount
    console.log(bookingData)
}



//function for adding the new room 
function addroom() {
    var parent = document.getElementById("rooms");
    createRoomElement2(parent);
    addInfoEle();
    selectRoom(lastcnt)
    bookingData.Rooms.push({ children: 0, adult: 1 });
    if (lastcnt === 5) {
        var btn = document.getElementById("addbtn")
        btn.style.display = "none";
    }
}

function removeroom() {
    var ele = document.getElementById(lastcnt);
    removeInfoEle();
    ele.remove();
    bookingData.Rooms.pop();
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
            <span id="childno${lastcnt}">0</span>
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

//handle submit of the booking form 
async function handleSubmit() {
    bookingData.from = calander1.value;
    bookingData.to = calander2.value
    console.log("This is Booking information"+bookingData);
    const jsonData = await JSON.stringify(bookingData);
    document.getElementById(hiddenInputClientId).value = jsonData;
    var form = document.getElementById("toggle-form");
    form.style.display = "none";
    document.getElementById(complexDataClientId).click();
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
if (img_content!=null) {
    img_content.innerHTML = img;
}





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
let cardsHtml = '';
let slides = [];
for (let i = 0; i < RefactorRooms.length; i++) {
    let slideInnerHtml = '';
    let j = i;
    for (j = i; j < 3 + i && j < RefactorRooms.length; j++) {
        slideInnerHtml +=
            `
     <div class="card">
        <div class="img-cardinfo-wrapper">
            <div class="img-container">
                <img src="../Images/Rooms/`+ RefactorRooms[j].Type + `.jpeg"/>
            </div>
            <div class="card-info">
                <span>`+ RefactorRooms[j].Type + `</span>
                <p>`+ RefactorRooms[j].Desc + `</p>
                <div>
                    <img src="../Images/area.png"/>
                    <span>`+ RefactorRooms[j].Area + `</span>
                </div>
                <div>
                    <img src="../Images/wifi.png"/>
                    <span>Inclusive of WiFi</span>
                </div>
                <div>
                    <img src="../Images/maximumOccoumpany.png"/>
                    <span> Up to `+ RefactorRooms[j].Capasity +`  guests</span>
                </div>
                <div>
                    <img src="../Images/bedType.png"/>
                    <span>`+ RefactorRooms[j].Bedtype + `</span>
                </div>
            </div>
        </div>
        <div class="price">
            <p>Starting Rate/Night</p>
            <div> `+ RefactorRooms[j].Price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) + `*</div>
            <button type="button" onclick="handleSubmit()">VIEW RATES</button>
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
if (onescreen!=null)onescreen.innerHTML = slides[onscreenCarIndex];
let btnleft = document.getElementById("left-arr")
let rightbtn = document.getElementById("right-arr");
if (btnleft != null && rightbtn!=null) {
    btnleft.style.display = 'none';

    btnleft.addEventListener('click', async () => {
        await blink(onescreen);
        onscreenCarIndex--;
        onescreen.innerHTML = slides[onscreenCarIndex];
        if (onscreenCarIndex === 0) {
            btnleft.style.display = "none";
        } else if (onscreenCarIndex < slides.length - 1) {
            rightbtn.style.display = 'block';
        }
    })
    rightbtn.addEventListener('click', async () => {
        await blink(onescreen);
        onscreenCarIndex++;
        onescreen.innerHTML = slides[onscreenCarIndex];
        if (onscreenCarIndex === slides.length - 1) {
            rightbtn.style.display = "none";
        } else if (onscreenCarIndex > 0) {
            btnleft.style.display = "block";
        }
    })
}


//for the awards logic
let awardData = [
    {
        heading: "Condenast Reader’s Choice awards - 2022",
        text: "Condenast Reader’s Choice awards - 2022"
    },
    {
        heading: "The Best Hotels in the World",
        text: "Taj Lake Palace, Udaipur ranked #3 in the The Best Hotels in the World category, Condé Nast Traveler Readers’ Choice Awards 2019"
    },
    {
        heading: "Condé Nast Traveller",
        text: "Taj Lake Palace was awarded Best Hotel in Asia and was featured in the Sixth Annual Gold List by Condé Nast Traveller UK in 2010."
    },
    {
        heading: "The Luxury Travel Bible",
        text: "Taj Lake Palace featured in the Top 10 Indian Palaces list by The Luxury Travel Bible in 2010."
    },
    {
        heading: "TripAdvisor Travelers’",
        text: "Taj Lake Palace was featured in the Top 10 Hotels for Service list and the Top 10 Luxury Hotels in India list at the TripAdvisor Travelers’ Choice Awards USA in 2010."
    },
    {
        heading: "Readers' Choice",
        text: "Taj Lake Palace was ranked third in the Top 10 Hotels in India list at the Condé Nast Traveler USA Readers' Choice Awards in 2012."
    },
    {
        heading: "Travel + Leisure",
        text: "Taj Lake Palace was featured in the Top 500 Best Hotels in the World list by Travel + Leisure in 2012."
    },
    {
        heading: "Condé Nast Traveler USA",
        text: "Taj Lake Palace was featured in the Platinum Circle—a list of hotels that have made it to the Gold List for five consecutive years—by the Condé Nast Traveler USA in 2013."
    },
    {
        heading: "Ministry of Tourism India",
        text: "Taj Lake Palace was awarded the National Tourism Award in the Five Star Deluxe category by the Ministry of Tourism India"
    },
    {
        heading: "Condé Nast Traveler USA",
        text: "Taj Lake Palace was featured in the Gold List and the Platinum Circle by Condé Nast Traveler USA in 2014."
    },
    {
        heading: "Booking.com",
        text: "Taj Lake Palace was rated the fifth Best Luxury Resort in the World by Booking.com guests in Booking's Best in 2015."
    },
    {
        heading: "Lonely Planet Magazine",
        text: "Taj Lake Palace was awarded The Best Luxury Hotel in India at the Lonely Planet Magazine Awards in 2015."
    },
    {
        heading: "Travellers’ Choice",
        text: "Taj Lake Palace was voted the fourth Best Hotel in India at the Travellers’ Choice Awards in 2015."
    },
    {
        heading: "Conde Nast Traveler Gold List 2018",
        text: `Travel and Leisure 2018 - Top 100 Hotels in the World - Ranked # 25  Taj Lake Palace, Udaipur

Travel and Leisure 2018 - Top 10 Resort Hotels in Asia - Ranked # 10  Taj Lake Palace, Udaipur`
    },
    {
        heading: "World Spa Awards",
        text: "India's Best Hotel Spa 2022 - J Wellness Circle, Taj Lake Palace Udaipur"
    }
]
let award = document.getElementById("div-award-cards")
let frame = [];
for (let i = 0; i < awardData.length; i++) {
    let ht = '';
    let j = i;
    for (j = i; j < (3 + i) && j < awardData.length; j++) {
        ht += `
             <div class="award-card">
                <div class="img-award">
                    <img src="../Images/award.png" />
                </div>
                <div class="award-content">
                    <div>
                        <h4>`+ awardData[j].heading + `</h4>
                    </div>
                    <div>
                        <p>`+ awardData[j].text + `</p>
                    </div>
                </div>
            </div>
        `
    }
    frame.push(ht);
    i = j - 1;
}

let awardInd = 0;
award.innerHTML = frame[awardInd];
let awardLeftBtn = document.getElementById("left-arr-award")
let awardRightBtn = document.getElementById("right-arr-award");
awardLeftBtn.style.display = 'none';

awardLeftBtn.addEventListener('click', async() => {
    await blink(award);
    awardInd--;
    award.innerHTML = frame[awardInd];
    if (awardInd === 0) {
        awardLeftBtn.style.display = "none";
    } else if (awardInd < frame.length - 1) {
        awardRightBtn.style.display = 'block';
    }
})
awardRightBtn.addEventListener('click', async() => {
    await blink(award);
    awardInd++;
    award.innerHTML = frame[awardInd];
    if (awardInd === frame.length - 1) {
        awardRightBtn.style.display = "none";
    } else if (awardInd > 0) {
        awardLeftBtn.style.display = "block";
    }
})
async function blink (ele) {
    ele.style.opacity = 0;
    return new Promise((resolve) => {
        setTimeout(() => {
            ele.style.opacity = 1;
            resolve();
        }, 100);
    });
   
}
