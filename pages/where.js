var whereData = "https://spreadsheets.google.com/feeds/list/1eajnBzvLXsqhKBbxJPWlxKF0-5tWqda2dStWyKzvD7g/od6/public/values?alt=json"

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

_GET(whereData, (data)=>{
  data = data.feed.entry
  const _three = document.getElementById("where")
  for (const row of data) {
    _three.innerHTML += `
    <div>
      <div class="centered">
        <br>
        <a class="ifInfo" href="${row.gsx$ifdescription.$t}"><span>${row.gsx$ifdate.$t} ${row.gsx$iftime.$t}</span>
        </a>
        <br>
      </div>
	  </div>
    `
  }

})