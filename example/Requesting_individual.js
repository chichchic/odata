import { request } from "../utility/request.js";

const serviceRoot = 'https://services.odata.org/v4/TripPinServiceRW'

async function requestingIndividual() {
  const result = await request(`${serviceRoot}/People('russellwhyte')`, 'GET', {})
  console.log(result);
}

export default requestingIndividual;

/*
  REST 원리는 또한, 모든 자원을 고유한 식별자로 다룬다.
  OData또한 resource를 통해 키값을 정의하고 key로 사용해 검색이 가능하다.
*/