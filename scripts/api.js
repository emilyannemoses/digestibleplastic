var foodData = "https://spreadsheets.google.com/feeds/list/2PACX-1vQ-QvEqrAuHM1GXGHPuy9sUGcB9C4O9tlcIAE_YuzugkWixCTP9Fz0i5RKMn203cQItCkn3FLOMaf3E/od6/public/values?alt=json"

_GET = (url, callback)=>{
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (callback) callback(JSON.parse(xhr.responseText))
    }
  }
  xhr.send(null)
}
