import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const KicksPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}><h3>{node.name}</h3></Link>
    </li>
  )
}

const IndexPage = ({data}) => (
  <Layout>
    <ul>
      {this.props.data.contentfulKick.edges.map((edge) => <KicksPost node={edge.node } />)}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulKick {
      edges {
        node {
          name
          slug
          image {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`
