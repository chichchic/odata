import { request } from '../../utility/request.js'

const headers = { 'OData-Version': '4.0', "Content-Type": "application/json;odata.metadata=minimal", 'Accept': 'application/json' }

async function invokingUnboundFunc(url, lat, lon) {
  try {
    return await request(`${url}(lat = ${lat}, lon = ${lon})`, 'GET', {})
  } catch (error) {
    throw error
  }
}

async function invokingBoundFunction(url, func) {
  try {
    return await request(`${url}/${func}`, 'GET', {})
  } catch (error) {
    throw error
  }
}

async function invokingBoundAction(url, func, body) {
  try {
    return await request(`${url}/${func}`, 'POST', headers, JSON.stringify(body))
  } catch (error) {
    throw error
  }
}

export { invokingUnboundFunc, invokingBoundFunction, invokingBoundAction }