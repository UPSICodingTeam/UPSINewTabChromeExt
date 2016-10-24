$(document).foundation()



var dateToday = Date.today();
var newDate = dateToday.toString('dddd, d MMMM yyyy');
document.getElementById("date").innerHTML = newDate;


function updateTime(){
	var d = new Date();
	var hr = d.getHours();
	var min = d.getMinutes();
	if (min < 10) {
	    min = "0" + min;
	}
	var ampm = hr >= 12 ? "<span class='hz-small'>pm</span>" : "<span class='hz-small'>am</span>";
	hr = hr % 12;
	hr = hr ? hr : 12; // the hour '0' should be '12'
	var x = document.getElementById("time");
	var hzDate = hr + ':' + min + " " + ampm;
    document.getElementById('clock').innerHTML = hzDate;
}
setInterval(updateTime, 1000);

/**

function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var ampm = hours >= 12 ? 'pm' : 'am';
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "<span class='hz-small'>pm</span>";
    } else {
        t_str += "<span class='hz-small'>am</span>";
    }
    document.getElementById('clock').innerHTML = t_str;
}
setInterval(updateTime, 1000);

**/
var searchStr;
var gglschlr;

function klik(){
	searchStr = document.getElementById('searchtxt').value;
	gglschlr = window.open('https://scholar.google.co.uk/scholar?hl=en&q='+searchStr, '_parent');
	if(gglschlr){
		ga('send', 'event', 'Search Article', 'gscholar');
		gglschlr.focus();
	}
}

function clickHandler(element){
	setTimeout("klik();",1000 );
}

document.addEventListener('DOMContentLoaded', function () {
  	document.querySelector('#search').addEventListener('click', clickHandler);
});

///button click for email, upsi homepage, and gdrive

function email(){
	ga('send', 'event', 'Open eMail', 'email');
	window.open('http://inbox.google.com', '_parent');
}

function homepage(){
	ga('send', 'event', 'Open Homepage', 'homepage');
	window.open('http://www.upsi.edu.my', '_parent');
}

function gdrive(){
	ga('send', 'event', 'Open GoogleDrive', 'gdrive');
	window.open('http://drive.google.com', '_parent');
}

document.addEventListener('DOMContentLoaded', function () {
  	document.querySelector('#email').addEventListener('click', email);
});

document.addEventListener('DOMContentLoaded', function () {
  	document.querySelector('#upsi_homepage').addEventListener('click', homepage);
});

document.addEventListener('DOMContentLoaded', function () {
  	document.querySelector('#upsi_gdrive').addEventListener('click', gdrive);
});
