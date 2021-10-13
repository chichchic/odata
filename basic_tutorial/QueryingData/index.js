import { query } from './QeuryFunc.js'
const serviceRoot = 'http://services.odata.org/V4/(S(vpkubhhsigdowaghrufumlai))/TripPinServiceRW'

async function run() {
  // filter
  // const result = await query(serviceRoot, '/People', { filter: "FirstName eq 'Scott'" })
  // filter complex type
  // const result = await query(serviceRoot, '/Airports', { filter: "contains(Location/Address, 'SanFrancisco')" })
  // filter on EnumProperties
  // const result = await query(serviceRoot, '/Airports', { filter: "Gender eq Microsoft.OData.SampleService.Models.TripPin.PersonGender'Female'" })
  // nested filter in expand
  // const result = await query(serviceRoot, '/People', {
  //   expand: {
  //     expression: 'Trips',
  //     queryOptions: { filter: "Name eq 'Trip in US'" }
  //   }
  // })
  // orderby
  // const result = await query(serviceRoot, "/People('scottketchum')/Trips", { orderby: "EndsAt desc" })
  // top
  // const result = await query(serviceRoot, "/People", { top: "2" })
  // skip
  // const result = await query(serviceRoot, "/People", { skip: "18" })
  // count
  // const result = await query(serviceRoot, "/People", { count: "true" })
  // select
  // const result = await query(serviceRoot, "/Airports", { select: "Name, IcaoCode" })
  // search
  // const result = await query(serviceRoot, '/People', { search: "Boise" })
  // Lambda Operator
  const result = await query(serviceRoot, '/People', { filter: "Emails/all(s:endswith(s, 'contoso.com'))" })

  console.log(result)
}

run();
