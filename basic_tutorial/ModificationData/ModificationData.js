import { request } from '../../utility/request.js'

const headers = { 'OData-Version': '4.0', "Content-Type": "application/json;odata.metadata=minimal", 'Accept': 'application/json' }
async function createEntity(url, data) {
  // 단일 entity만을 가지고있어야한다.w
  try {
    return await request(url, 'POST', headers, JSON.stringify(data))
  } catch (error) {
    throw error
  }
}
async function deleteEntity(url, etag = null) {
  try {
    const deleteHeaders = Object.assign({ 'If-Match': etag }, headers)
    return await request(url, 'DELETE', deleteHeaders)
  } catch (error) {
    throw error
  }
}

async function updateEntity(url, data, etag = null) {
  try {
    const updateHeaders = Object.assign({ 'If-Match': etag }, headers)
    return await request(url, 'PATCH', updateHeaders, JSON.stringify(data));
  } catch (error) {
    throw error
  }
}

//TODO: 연결이 제대로 이루어지 않음
async function relatedEntity(url, data, etag) {
  try {
    const jsonData = JSON.stringify(data);
    const relatedHeaders = headers
    relatedHeaders['Content-Length'] = jsonData.length;
    Object.assign(relatedHeaders, { 'If-Match': 'W/"08D991073445EA99"' })
    return await request(url, 'POST', relatedHeaders, jsonData)
  } catch (error) {
    throw error
  }
}

async function changeLink(url, data) {
  try {
    return await request(url, 'PUT', headers, JSON.stringify(data));
  } catch (error) {
    throw error
  }
}

export { createEntity, deleteEntity, updateEntity, relatedEntity }