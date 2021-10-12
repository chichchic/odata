import fetch from 'node-fetch';

function filterContentType(res) {
  if (res.headers.get('content-type').match('application/json')) {
    return res.json();
  }
  if (res.headers.get('content-type').match('text/plain')) {
    return res.text();
  }
}

async function request(url, type, headers, body = null) {
  const fetchOption = {
    method: type,
    headers
  }
  if (type === 'PUT' || type === 'POST') {
    fetchOption.body = body;
  }
  try {
    console.log(url, fetchOption)
    const res = await fetch(url, fetchOption);
    if (!res.ok) {
      throw new Error(res.status + ' request error');
    }
    return filterContentType(res)
  } catch (error) {
    throw error
  }
}

export { request }