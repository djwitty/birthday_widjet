var dataWrap = document.getElementById('data');

fetch('http://test.anromsocial.com/api/birthdays?dateFrom=01.01&dateTo=01.02', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
})
.then(res => res.json())
//.then(json => console.log(json))
.then(json => {
  for(var u in json) {
    dataWrap.innerHTML = u
  }
});

