import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Kicks extends Component {
  render() {
    const { name } = this.props.data.contentfulKick;
    return (
      <section>
        <h3>{name}</h3>
      </section>
    )
  }
}

Kicks.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Kicks

export const pageQuery = graphql`
    query kicksQuery($slug: String!) {
        contentfulKick(slug: {eq: $slug}) {
            name
        }
    }
`
