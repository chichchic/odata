import { requestEntityCollection, requestIndividualEntity, requestIndividualProperty, requestIndividualRawValue } from './RequestFunc.js'

async function run() {
  // const result = await requestEntityCollection('http://services.odata.org/V4/(S(p4pdzscdft1y1w0zop3n2waw))/TripPinServiceRW', '/People');
  // const result = await requestIndividualEntity('http://services.odata.org/V4/(S(p4pdzscdft1y1w0zop3n2waw))/TripPinServiceRW', '/People', 'russellwhyte');
  // const result = await requestIndividualProperty('http://services.odata.org/V4/(S(p4pdzscdft1y1w0zop3n2waw))/TripPinServiceRW', '/Airports', 'KSFO', '/Name')
  // const result = await requestIndividualRawValue('http://services.odata.org/V4/(S(p4pdzscdft1y1w0zop3n2waw))/TripPinServiceRW', '/Airports', 'KSFO', '/Name', 'value')
  console.log(result)
}

run();