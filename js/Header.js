import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>
          <Link to='/'>
            React Video
          </Link>
        </h1>
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
