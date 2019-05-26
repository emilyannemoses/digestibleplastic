var getData = "https://spreadsheets.google.com/feeds/list/1V1Jf2Ec1jqWyPAKjCIJ9ifymUOVMd_etnQR2MZNT_Gs/od6/public/values?alt=json"

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

_GET(getData, (data)=>{
  console.log(data.feed.entry);
  console.log(data.feed.title)
  data = data.feed.entry
  const _two = document.getElementById("what")
  for (const row of data) {
    _two.innerHTML += `
    <div>
      <div>
        ${row.gsx$ketodate.$t} ${row.gsx$ketotime.$t}
        <br>
        <iframe class="ketoInfo" src="${row.gsx$ketodescription.$t}" allowfullscreen></iframe>
        <br>
      </div>
	  </div>
    `
  }

})