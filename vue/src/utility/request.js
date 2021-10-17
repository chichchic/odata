function filterContentType(res) {
  if (res.headers.get("content-type")?.match("text/plain")) {
    return res.text();
  }
  if (res.headers.get("content-type")?.match("application/json")) {
    return res.json();
  }
}

function statusLog(status, type) {
  if (status != 204) {
    return;
  }
  if (type === "DELETE" || type === "PATCH" || type === "POST") {
    console.log("request done");
  }
}

async function request(url, type, headers, body = null) {
  const fetchOption = {
    method: type,
    headers,
  };
  if (type === "PUT" || type === "POST" || type === "PATCH") {
    fetchOption.body = body;
  }
  const res = await fetch(url, fetchOption);
  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(`${res.status} ${error.message}`);
  }
  statusLog(res.status, type);
  return filterContentType(res);
}

export { request };
