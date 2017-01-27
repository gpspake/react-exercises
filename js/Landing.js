import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  },
  render () {
    return (
      <div className='landing'>
        <h1>React Video</h1>
        <input
          onChange={this.handleSearchTermChange}
          value={this.props.searchTerm}
          type='text'
          placeholder='Search' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
