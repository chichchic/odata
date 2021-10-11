import { request } from "../utility/request.js";

const serviceRoot = 'http://services.odata.org/V4/(S(p4pdzscdft1y1w0zop3n2waw))/TripPinServiceRW/'

async function requestingResource() {
  const result = await request(`${serviceRoot}/People`, 'GET', {})
  console.log(result);
}

export default requestingResource;

/*
 REST는 "모든것은 Resource"라는 원리를 따른다.
*/