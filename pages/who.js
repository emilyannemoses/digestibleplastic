var whoData = "https://spreadsheets.google.com/feeds/list/1za1lKiDfcE4lCrkXzSpN970IOOB-dHsXFAIjF5gn_Ms/1/public/values?alt=json"

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

_GET(whoData, (data)=>{
  console.log(data);
  
  data = data.feed.entry
  const column = document.getElementById("columns")
  for (const row of data) {
    column.innerHTML += `
    <div class="figure">
      <div style="float:left;">
        <h1>${row.gsx$mealdescription.$t}</h1>
        <img src="${row.gsx$imageurl.$t}">
        <img src="${row.gsx$glass.$t}"/>
      </div>
      <div style="float:right;">
        Recipe: ${row.gsx$recipe.$t}
      </div>
    </div>
    `
  }

})