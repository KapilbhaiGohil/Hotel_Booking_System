var ele = document.getElementById("checkin");
var ele2 = document.getElementById("checkout");
var today = new Date(new Date().setHours(0, 0, 0, 0)).toLocaleDateString('fr-CA');
var tommorow = new Date(+new Date().setHours(0, 0, 0, 0) + 86400000).toLocaleDateString('fr-CA')
ele.innerHTML = today;
ele2.innerHTML = tommorow;