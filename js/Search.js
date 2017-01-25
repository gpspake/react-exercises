import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'default string'
    }
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>React Video</h1>
          <input value={this.state.searchTerm} type='text' palceholder='Search' />
        </header>
        <div>
          {preload.shows.map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} />
            )
          })}
        </div>
      </div>
    )
  }
})

export default Search
