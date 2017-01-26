import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match exactly pattern='/search' component={Search} />
          <Match pattern='/details/:id' component={Details} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
