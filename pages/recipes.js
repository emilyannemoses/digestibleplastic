var recipesData = "https://spreadsheets.google.com/feeds/cells/1rqFwwrr9bbzBVW9Vi6xkKtopggTCDT5igh0BIot-MMU/1/public/full?alt=json"

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
  const recipe = document.getElementById("recipe")
  for (const row of data) {
    column.innerHTML += `
      <div class="figure">
        <div class="terms">
          <div class="text">
            <span style="font-size:26px;"">${row.gsx$mealdescription.$t} • ${row.gsx$arabicdescription.$t}</span>
            <br />
          </div>
          <div class="text">
            <img src="${row.gsx$imageurl1.$t}"/>
            <img src="${row.gsx$imageurl2.$t}"/>
            <img src="${row.gsx$imageurl3.$t}"/>
          </div>
          <div class="text">
            ${row.gsx$ingredients.$t}
            <span style="opacity:0;">${row.gsx$tags.$t}</span>
            <br />
            <br />
            ${row.gsx$amounts.$t}
            <br />
            <br />
            ${row.gsx$recipe.$t}
            <br />
          </div>
        </div>
      </div>
    `
  }
})
