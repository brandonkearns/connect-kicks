const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
    const createPage = boundActionCreators
    return new Promise((resolve, reject) => {
        const kickShowcaseTemplate = path.resolve('src/components/')
    })
}