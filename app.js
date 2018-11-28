var timeForPost = document.getElementByID('postTime');

//utc


var today2 = Date.now();



function setTime() {
  var today = newDate ()
  var day = today.getDate()
  var month = today.getMonth() +1
  var year = today.getFullYear()
  var date = month + '-' +day + '-'  + year
timeForPost.innerHTML = date
}

setTime()