var foodData = "https://spreadsheets.google.com/feeds/list/1za1lKiDfcE4lCrkXzSpN970IOOB-dHsXFAIjF5gn_Ms/od6/public/values?alt=json"
var ketoData = "https://spreadsheets.google.com/feeds/list/1za1lKiDfcE4lCrkXzSpN970IOOB-dHsXFAIjF5gn_Ms/od6/public/values?alt=json"

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