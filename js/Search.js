import React from 'react'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((function (show) {
          return (
            <h3>{show.title}</h3>
          )
        }))}
      </div>
    )
  }
})

export default Search
