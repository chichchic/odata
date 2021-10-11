import { request } from "../utility/request.js";

const serviceRoot = 'http://services.odata.org/V4/(S(p4pdzscdft1y1w0zop3n2waw))/TripPinServiceRW/'

async function invokingFunction() {
  const result = await request(`${serviceRoot}/People('russellwhyte')/Trips(0)/Microsoft.OData.SampleService.Models.TripPin.GetInvolvedPeople()`, 'GET', {})
  console.log(result);
}

export default invokingFunction;

/*
  RESTful API는 어떤 복잡한 logic을 담고있거나, 자주 사용되는 costom operation이 될수 있다.
  이러한 목적을 위해 OData는 operation들처럼 표현할수 있도록 function과 action 정의를 지원한다.
  이들은 resource 자체이며 기존 리소스에 묶일수 있습니다.
*/