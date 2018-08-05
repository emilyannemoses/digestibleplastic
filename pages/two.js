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

_GET(ketoData, (data)=>{
  console.log(data.feed.entry);
  console.log(data.feed.title)
  data = data.feed.entry
  const _two = document.getElementById("keto")
  for (const row of data) {
    _two.innerHTML += /*html*/`
    <figure>
      <figcaption>
        Date: ${row.gsx$ketoDate}
        <br>
        Time: ${row.gsx$ketoTime}
        <br>
        Description: ${row.gsx$ketoDescription}
        <br>
        Links: ${row.gsx$ketoLinks}
      </figcaption>
	  </figure>
    `
  }

})