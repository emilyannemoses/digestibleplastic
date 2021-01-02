window.onload = ()=>{
    let setPage = window.location.hash
    setPage = setPage.split('#')[1]
    if (setPage) _page(setPage)
    _set_year_to_footer(document.getElementById('custom-footer'))
  }

_set_year_to_footer = (footer)=>{
  const year = new Date
  footer.innerHTML = `
    <div> &copy; 2015-${year.getFullYear()} <a href="https://github.com/eamoses" target="_blank"> Emily Anne Moses </a> </div>
  `
}
