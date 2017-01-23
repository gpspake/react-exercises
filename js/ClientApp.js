import React from 'react'
import { render } from 'react-dom'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>React Video</h1>
          <input type='text' placeholder='Search' />
          <a>or Browse All</a>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
