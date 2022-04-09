import React from 'react'

function SearchPage() {
  return (
    <div className='search-wrapper container container-fluid'>

        <div className="search-logo">
          <img
          className='search-logo' 
          src="https://images-na.ssl-images-amazon.com/images/I/31sSQfFEQyL.jpg" alt="" 
          width={110}
          />
        </div>

        <form method = "get"  title = "Search Form" action="https://cse.google.com/cse?cx=b50bb48b30ec0b346">
          <div className="search-bar-wrapper ">
            {/* <i className="fa fa-user icon"></i> */}
            {/* <input className="search-bar" type="text" placeholder='Search' spellCheck="false"/> */}
            <input className='search-bar' type="text" id="q" name="q" />
            <input type="hidden" id="cx" name="cx" value="b50bb48b30ec0b346" />
            {/* <input type="image" id="searchSubmit" name="submit" src="https://images-na.ssl-images-amazon.com/images/I/31sSQfFEQyL.jpg" width={24} alt="Go" title="Submit Search Query" /> */}
          </div>
        </form>
{/* 
        <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl">
 <div>
    <input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" />
    <input type="hidden" id="cx" name="cx" value="013626029654558379071:ze3tw4csia4" />   
 </div>
</form> */}
    </div>
  )
}

export default SearchPage