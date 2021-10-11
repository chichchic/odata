import { request } from "../utility/request.js";

const serviceRoot = 'https://services.odata.org/v4/TripPinServiceRW'
const qeury = '?$top=2&$select=FirstName,LastName&$filter=Trips/any(d:d/Budget gt 3000)'
async function queries() {
  const result = await request(`${serviceRoot}/People${qeury}`, 'GET', {})
  console.log(result);
}

export default queries;

/*
  현재의 Web feature위에 구조적으로 만들어졌기에 RESTful API 또한 query stirngs을 지원한다.
  OData는 system query option을 통해서 복잡한 리소스 요청 query를 정의한다.
*/