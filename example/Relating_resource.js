import { request } from "../utility/request.js";

const serviceRoot = 'http://services.odata.org/V4/(S(p4pdzscdft1y1w0zop3n2waw))/TripPinServiceRW/'

const body = JSON.stringify({ '@odata.id': "http://services.odata.org/V4/(S(p4pdzscdft1y1w0zop3n2waw))/TripPinServiceRW/People('russellwhyte')" })
async function relatingResource() {
  const result = await request(`${serviceRoot}/People('keithpinckney')/Trips/$ref`, 'POST', {
    'OData-Version': '4.0',
    'OData-MaxVersion': '4.0',
    'Content-Type': 'application/json',
    'Content-Length': body.length
  }, body)
  console.log(result);
}

export default relatingResource;

/*
  RESTful API에서 resource는 대체적으로 서로를 의존한다.
  따라서 OData에서 관계에 대한 이 개념은 데이터 모델에 유연성과 풍부함을 추가하기위해 resource 사이에 정의될수 있다.
  (각 값들의 연관관계를 추가할 수 있다.)
*/