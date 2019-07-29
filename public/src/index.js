const URL = 'http://test.anromsocial.com';
const API = 'http://test.anromsocial.com/api/birthdays?dateFrom=';
const API_add = '&dateTo=';

var dataWrap = document.getElementById('data');
var todayIs = document.getElementById('todayIs');
var btn = document.getElementById('setDate');
var options = { month: 'numeric', day: 'numeric' };
var date = new Date();
currentDay = date.getDate();
btn.addEventListener('click', () => {
  currentDay = todayIs.value;
})
console.log(currentDay);
var currentMonth = date.getMonth();
function str_pad(n) {
  return String("0" + n).slice(-2);
}
var currentYear = date.getFullYear();
var twoWeeksAgo = currentDay - 15;
var twoWeeksAfter = currentDay + 15;

var today = new Date(currentYear, currentMonth, currentDay);
var yesterday = new Date(currentYear, currentMonth, currentDay-1);
var tomorrow = new Date(currentYear, currentMonth, currentDay+1);
var twoWeeksAgoDay = new Date(currentYear, currentMonth, twoWeeksAgo);
var twoWeeksAfterDay = new Date(currentYear, currentMonth, twoWeeksAfter);

var correctTwoWeeksAgoDay = twoWeeksAgoDay.toLocaleDateString("en", options).split('/').join('.');
var correctYesterday = yesterday.toLocaleDateString("en", options).split('/').join('.');
var correntToday = today.toLocaleDateString("en", options).split('/').join('.');
var correctTomorrow = tomorrow.toLocaleDateString("en", options).split('/').join('.');
var correctTwoWeeksAfterDay = twoWeeksAfterDay.toLocaleDateString("en", options).split('/').join('.');

var todayLinkElem = document.getElementsByClassName('tabs')[0].children[1];
var yesterdayLinkElem = document.getElementsByClassName('tabs')[0].children[0];
var tomorrowLinkElem = document.getElementsByClassName('tabs')[0].children[2];

//tabs content
yesterdayLinkElem.innerHTML = 'Недавние, от: ' + correctTwoWeeksAgoDay + ' до: ' + correctYesterday;
todayLinkElem.innerHTML = 'Сегодня: ' + correntToday;
tomorrowLinkElem.innerHTML = 'Ближайшие, от: ' + correctTomorrow + ' до: ' + correctTwoWeeksAfterDay;
const todayURL = API + correntToday + API_add + correntToday;
const twoWeeksAgoURL = API + correctTwoWeeksAgoDay + API_add + correctYesterday;
const twoWeeksAfterURL = API + correctTomorrow + API_add + correctTwoWeeksAfterDay;

function getData(lnk) {
  fetch(lnk, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(json => {
    //list of users
    for(var u in json.users) {
      li = document.createElement("li");
      userId = json.users[u].id
      userName = json.users[u].name;
      userAva = json.users[u].avatarUrl;
      userPosition = json.users[u].jobTitle;
      userBirthday = json.users[u].birthday;
      li.innerHTML = "<img style='height: 130px' src='" + URL + userAva + "' /><div class='user-info'><span class='user-name'>" + userName + "</span><br/><span class='user-position'>" + userPosition + "</span><br/><span class='user-birthday'>" + userBirthday + '</span></div>';
      dataWrap.appendChild(li);
    }
})};
yesterdayLinkElem.addEventListener('click', () => {
  dataWrap.innerHTML = '';
  getData(twoWeeksAgoURL)
});
todayLinkElem.addEventListener('click', () => {
  dataWrap.innerHTML = '';
  getData(todayURL)
});
tomorrowLinkElem.addEventListener('click', () => {
  dataWrap.innerHTML = '';
  getData(twoWeeksAfterURL)
});