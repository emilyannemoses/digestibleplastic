var ifData = "https://spreadsheets.google.com/feeds/list/1eajnBzvLXsqhKBbxJPWlxKF0-5tWqda2dStWyKzvD7g/od6/public/values?alt=json"

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

_GET(ifData, (data)=>{
  data = data.feed.entry
  const _three = document.getElementById("intermittent-fasting")
  for (const row of data) {
    _three.innerHTML += /*html*/`
    <div>
      <div>
        ${row.gsx$ifdate.$t} ${row.gsx$iftime.$t}
        <br>
        <iframe class="ifInfo" src="${row.gsx$ifdescription.$t}" allowfullscreen></iframe>
        <br>
      </div>
	  </div>
    `
  }

})