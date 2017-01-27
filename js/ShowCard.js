import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string
  },
  render () {
    const { poster, title, year, description } = this.props

    return (
      <Link to={`/details/${this.props.imdbID}`} >
        <div className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>({year})</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
})

export default ShowCard
