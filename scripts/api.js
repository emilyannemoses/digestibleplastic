var foodData = "https://spreadsheets.google.com/feeds/cells/1rqFwwrr9bbzBVW9Vi6xkKtopggTCDT5igh0BIot-MMU/1/public/full?alt=json"

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
