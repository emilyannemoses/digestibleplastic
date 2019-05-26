var _oldPage = 'who'

_page = (page)=>{
  const newPage = document.getElementById(page)
  try {
    document.getElementById(_oldPage).style.display = 'none'
    newPage.style.display = 'block'
    window.location.hash = '#'+page
    _oldPage = page
  }
  catch(error) {
    alert(`
      So... this "${page}" page doesn't exist. 😱 
      
      It may have in the past, it might in the future
      ...or it might never exist. 🤷🏽‍♀️
      
      We'll send you 🔄 to the last page you were on. 👋🏼 
    `)
    _page(_oldPage)
  }
  window.scrollTo(0,0) // 👈 resets page scroll bar to the top of the page.
}

window.onhashchange = ()=>{
  let setPage = window.location.hash
  setPage = setPage.split('#')[1]
  _page(setPage)
}