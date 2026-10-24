const getArrayResponse = (response, resourceName) => {
  if (Array.isArray(response.data)) {
    return response.data;
  }

  if (Array.isArray(response.data?.data)) {
    return response.data.data;
  }

  throw new Error(`The ${resourceName} API returned an invalid response`);
};

export default getArrayResponse;
