var foodData = "https://spreadsheets.google.com/feeds/list/1za1lKiDfcE4lCrkXzSpN970IOOB-dHsXFAIjF5gn_Ms/od6/public/values?alt=json"

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

_GET(foodData, (data)=>{
  console.log(data);
  
  data = data.feed.entry
  const column = document.getElementById("columns")
  for (const row of data) {
    column.innerHTML += /*html*/`
    <figure>
		  <img src="${row.gsx$imageurl.$t}">
      <figcaption>
        Date: ${row.gsx$date.$t}
        <br>
        Time: ${row.gsx$time.$t}
        <br>
        Meal: ${row.gsx$mealdescription.$t}
        <br>
        Amount: ${row.gsx$amount.$t}
        <br>
        Fat: ${row.gsx$fat.$t}
        <br>
        Protein: ${row.gsx$protein.$t}
        <br>
        Carbs: ${row.gsx$carbohydrates.$t}
        <br>
        Calories: ${row.gsx$calories.$t}
      </figcaption>
	  </figure>
    `
  }

})