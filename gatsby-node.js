const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
    const createPage = boundActionCreators
    return new Promise((resolve, reject) => {
        const kickShowcaseTemplate = path.resolve('src/components/kicks.js')
        resolve(
            graphql`
            {
                allContentfulKick {
                    edges {
                        node {
                            id
                            slug
                        }
                    }
                }
            }
            `
        ).then((result) => {
            if (result.errors) {
                reject(result.errors)
            }
            result.data.allContentfulKick.edges.forEach(edge => {
                createPage({
                    path: edge.node.slug,
                    component: kickShowcaseTemplate,
                    context: {
                        slug: edge.node.slug
                    }
                })
            });
            return;
        })
    })
}