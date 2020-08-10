var recipesData = "https://spreadsheets.google.com/feeds/list/1za1lKiDfcE4lCrkXzSpN970IOOB-dHsXFAIjF5gn_Ms/1/public/values?alt=json"

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

_GET(recipesData, (data)=>{
  data = data.feed.entry
  const column = document.getElementById("columns")
  for (const row of data) {
    column.innerHTML += `
    <div onclick='_page("recipe", ${row.gsx$id.$t})' class="figure terms">
      <div style="font-size:32px;width:75vw;text-align:center;">
        <span style="float:left;">${row.gsx$mealdescription.$t}</span>
        <span style="margin:auto;">•</span>
        <span style="float:right;">${row.gsx$arabicdescription.$t}</span>
        <br />
      </div>
      <div style="float:left;">
        <img src="${row.gsx$imageurl1.$t}"/>
        <img src="${row.gsx$imageurl2.$t}"/>
        <img src="${row.gsx$imageurl3.$t}"/>
      </div>
      <div style="float:right;">
        ${row.gsx$ingredients.$t}
        <span style="opacity:0;">${row.gsx$tags.$t}</span>
        <br />
        <a>Recipe</a>
      </div>
    </div>
    `
  }
})
