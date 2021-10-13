import fetch from 'node-fetch';

function filterContentType(res) {
  if (res.headers.get('content-type')?.match('text/plain')) {
    return res.text();
  }
  if (res.headers.get('content-type')?.match('application/json')) {
    return res.json();
  }
}

function statusLog(status, type) {
  if (status != 204) {
    return;
  }
  if (type === 'DELETE' || type === 'PATCH' || type === 'POST') {
    console.log('request done')
  }
}

async function request(url, type, headers, body = null) {
  const fetchOption = {
    method: type,
    headers
  }
  if (type === 'PUT' || type === 'POST' || type === 'PATCH') {
    fetchOption.body = body;
  }
  try {
    const res = await fetch(url, fetchOption);
    if (!res.ok) {
      throw new Error(res.status + ' request error');
    }
    statusLog(res.status, type)
    return filterContentType(res)
  } catch (error) {
    throw error
  }
}

export { request }