import fetch from 'node-fetch';

async function request(url, type, headers, body = null) {
  const fetchOption = {
    method: type,
    headers
  }
  if (type === 'PUT' || type === 'POST') {
    fetchOption.body = body;
  }
  try {
    const res = await fetch(url, fetchOption);
    if (!res.ok) {
      throw new Error(res.status + ' request error');
    }
    return res.json();
  } catch (error) {
    console.error(error)
  }
}

export { request }