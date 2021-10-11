import { request } from "../utility/request.js";

const serviceRoot = 'https://services.odata.org/v4/TripPinServiceRW'
const newPerson = {
  UserName: 'lewisblack',
  FirstName: 'Lewis',
  LastName: 'Black',
  Emails: [
    'lewisblack@example.com'
  ],
  AddressInfo: [
    {
      Address: '187 Suffolk Ln.',
      City: {
        CountryRegion: 'United States',
        Name: 'Boise',
        Region: 'ID'
      }
    }
  ],
  Gender: 'Male'
};
const jsonNewPerson = JSON.stringify(newPerson);
async function creatingResource() {
  const result = await request(`${serviceRoot}/People('russellwhyte')`, 'POST',
    {
      'OData-Version': '4.0',
      'OData-MaxVersion': '4.0',
      'Content-Type': 'application/json',
      'Content-Length': jsonNewPerson.length
    },
    jsonNewPerson)
  console.log(result);
}

export default creatingResource;

/*
  REST 원칙은 간단하고 정형화된 인터페이스를 사용할것을 요구한다.
  그런 점에서 OData Client는 resource들의 통일된 인터페이스를 기대할 수 있다.
  REST에서 statless 값 전송은 다른 방식의 HTTP method를 요청에서 사용해 수행된다.
  (JOSN값을 담아 POST요청을 보낸다.)
*/