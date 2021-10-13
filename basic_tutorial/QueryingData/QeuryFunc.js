import { request } from '../../utility/request.js'

function makeQueryString(queryOptions) {
  const entries = Object.entries(queryOptions)
  return entries.reduce((acc, [type, expression], index) => {
    let output;
    if (typeof expression === 'object') {
      output = `$${type}=${expression.expression}(${makeQueryString(expression.queryOptions)})`
    } else {
      output = `$${type}=${expression}`
    }
    return output + (entries.length - 1 === index ? '' : '&')
  }, ``)
}

async function query(serviceRoot, collectionPath, queryOptions) {
  try {
    return await request(`${serviceRoot + collectionPath}?` + makeQueryString(queryOptions), 'GET', {});
  } catch (error) {
    throw error
  }
}

export { query }