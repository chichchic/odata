import { request } from '../../utility/request.js'

async function requestEntityCollection(serviceRoot, collectionPath) {
  try {
    return await request(serviceRoot + collectionPath, 'GET', {});
  } catch (error) {
    throw error
  }
}

async function requestIndividualEntity(serviceRoot, collectionPath, id) {
  try {
    return await request(`${serviceRoot}${collectionPath}('${id}')`, 'GET', {});
  } catch (error) {
    throw error
  }
}

async function requestIndividualProperty(serviceRoot, collectionPath, id, propertypath) {
  try {
    return await request(`${serviceRoot}${collectionPath}('${id}')${propertypath}`, 'GET', {});
  } catch (error) {
    throw error
  }
}
async function requestIndividualRawValue(serviceRoot, collectionPath, id, propertypath, rawValue) {
  try {
    return await request(`${serviceRoot}${collectionPath}('${id}')${propertypath}/$${rawValue}`, 'GET', {});
  } catch (error) {
    throw error
  }
}



export { requestEntityCollection, requestIndividualEntity, requestIndividualProperty, requestIndividualRawValue }