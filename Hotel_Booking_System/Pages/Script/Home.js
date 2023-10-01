var ele = document.getElementById("checkin");
var ele2 = document.getElementById("checkout");
var today = new Date(new Date().setHours(0, 0, 0, 0)).toLocaleDateString('fr-CA');
var tommorow = new Date(+new Date().setHours(0, 0, 0, 0) + 86400000).toLocaleDateString('fr-CA')
ele.innerHTML = today;
ele2.innerHTML = tommorow;




var today = new Date().toISOString().split('T')[0];
document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
var next = new Date(+new Date().setHours(0, 0, 0, 0) + 86400000).toISOString().split('T')[0];
document.getElementsByName("setTommorowDate")[0].setAttribute('min', next);
