// const recipesData = "https://spreadsheets.google.com/feeds/cells/1rqFwwrr9bbzBVW9Vi6xkKtopggTCDT5igh0BIot-MMU/od6/public/values?alt=json";
const recipesData = "https://spreadsheets.google.com/feeds/cells/1rqFwwrr9bbzBVW9Vi6xkKtopggTCDT5igh0BIot-MMU/1/public/full?alt=json";
const myData = [];

_GET = (url, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (callback) callback(JSON.parse(xhr.responseText))
    }
  }
  xhr.send(null)
}

_GET(recipesData, (data) => {
  data = data.feed.entry
  const column = document.getElementById("columns")
  const recipe = document.getElementById("recipe")
  for (var i = 0; i < data.length; i++) {
    let row = data[i].gs$cell.row;
    if (!myData[row]) {
      myData[row] = [];
    }
    myData[row].push(data[i].gs$cell.inputValue);
  }
  myData.shift();
  for (const recipes of myData) {
    let recipe = {
      title: recipes[0],
      arabictitle: recipes[1],
      image1: recipes[2],
      image2: recipes[3],
      image3: recipes[4],
      ingredients: recipes[5],
      tags: recipes[6],
      instructions: recipes[7]
    }
    column.innerHTML += `
    <div class="figure">
      <div class="terms">
        <div class="text">
          <span style="font-size:26px;">${recipe.title} • ${recipe.arabictitle}</span>
          <br />
        </div>
        <div class="text">
          <img src="${recipe.image1}"/>
          <img src="${recipe.image2}"/>
          <img src="${recipe.image3}"/>
        </div>
        <div class="text">
          ${recipe.ingredients}
          <span style="opacity:0;">${recipe.tags}</span>
          <br />
          <br />
          ${recipe.instructions}
          <br />
        </div>
      </div>
    </div>
    `;
  }
})
