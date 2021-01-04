var students = {
    name: 'mike',
    age: 24,
    sex: 'Male',
    hometown: 'Sakassou',
    study: 'Financial Laws',
    residence: 'Abidjan',
    County: 'Marcory', 
    
}

var mails = {
    title: 'Bob just messaged you',
    content: 'You have 1 new message',    
}
function myFunction(title, content) {
    document.querySelector("span.title").innerHTML += title;
    document.querySelector("span.content").innerHTML += content;
  }
  


console.log(students.name)
var stname = students.name
var stage = students.age


var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
//var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
var today =  dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

function emails(){
    mails.forEach(function(){
        console.log(title[0]);
        console.log(content[0]);
      }); 
}






window.addEventListener("load", function(event) {
    document.getElementById("demo").innerHTML = stname + stage;
    document.getElementById("date").innerHTML = today;
    document.getElementById("title").innerHTML = emails;
});











