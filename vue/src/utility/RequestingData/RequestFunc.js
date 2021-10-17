import { request } from "../request.js";

async function requestEntityCollection(serviceRoot, collectionPath) {
  return await request(serviceRoot + collectionPath, "GET", {});
}

async function requestIndividualEntity(serviceRoot, collectionPath, id) {
  return await request(`${serviceRoot}${collectionPath}('${id}')`, "GET", {});
}

async function requestIndividualProperty(
  serviceRoot,
  collectionPath,
  id,
  propertypath
) {
  return await request(
    `${serviceRoot}${collectionPath}('${id}')${propertypath}`,
    "GET",
    {}
  );
}
async function requestIndividualRawValue(
  serviceRoot,
  collectionPath,
  id,
  propertypath,
  rawValue
) {
  return await request(
    `${serviceRoot}${collectionPath}('${id}')${propertypath}/$${rawValue}`,
    "GET",
    {}
  );
}

export {
  requestEntityCollection,
  requestIndividualEntity,
  requestIndividualProperty,
  requestIndividualRawValue,
};
