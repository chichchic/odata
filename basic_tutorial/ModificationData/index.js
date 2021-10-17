import { createEntity, deleteEntity, updateEntity, relatedEntity } from './ModificationData.js'
import { invokingUnboundFunc, invokingBoundFunction, invokingBoundAction } from './FunctionsAndActions.js'

const serviceRoot = "http://services.odata.org/V4/(S(b20fahbvlj5232zsl22ha3mn))/TripPinServiceRW"
const newData = {
  "@odata.type": "Microsoft.OData.SampleService.Models.TripPin.Person",
  "UserName": "teresa",
  "FirstName": "Teresa",
  "LastName": "Gilbert",
  "Gender": "Female",
  "Emails": ["teresa@example.com", "teresa@contoso.com"],
  "AddressInfo": [
    {
      "Address": "1 Suffolk Ln.",
      "City":
      {
        "CountryRegion": "United States",
        "Name": "Boise",
        "Region": "ID"
      }
    }]
}
const updateData = {
  "@odata.type": "Microsoft.OData.SampleService.Models.TripPin.Person",
  "Emails": ["Ronaldmundy@example.com", "Ronaldmundy@contoso.com", "newRonaldmundy@contoso.com"]
}
const relateData = {
  "@odata.id": "http://services.odata.org/V4/(S(b20fahbvlj5232zsl22ha3mn))/TripPinServiceRW/People('clydeguess')"
}
const actionData = {
  "userName": "clydeguess",
  "tripId": 1001
}
async function run() {
  try {
    // const result1 = await createEntity(`${serviceRoot}/People`, newData)
    // console.log(result1)
    // const result2 = await deleteEntity(`${serviceRoot}/People('ronaldmundy')`, 'W/"08D98FF2459037BE"')
    // console.log(result2)
    // const result3 = await updateEntity(`${serviceRoot}/People('salliesampson')`, updateData, 'W/"08D98E50FCEA58E2"')
    // console.log(result3)
    //TODO: 연결이 제대로 이루어지 않음
    const result4 = await relatedEntity(`${serviceRoot}/People('scottketchum')/Friends/$ref"`, relateData)
    console.log(result4)
    // const result5 = await invokingUnboundFunc(`${serviceRoot}/GetNearestAirport`, 33, -118)
    // console.log(result5)
    // const result6 = await invokingBoundFunction(`${serviceRoot
    //   }/People('russellwhyte')`, 'Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline()')
    // console.log(result6);
    // const result7 = await invokingBoundAction(`${serviceRoot}/People('russellwhyte')`, 'Microsoft.OData.Service.Sample.TrippinInMemory.Models.ShareTrip', actionData)
    // console.log(result7)
  } catch (error) {
    console.log(error.message)
  }
}

run();