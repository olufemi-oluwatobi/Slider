export const makeGetRequest = requestUrl => {
  return fetch(`${requestUrl}`)
    .then(response => response.json())
    .then(data => data);
};
