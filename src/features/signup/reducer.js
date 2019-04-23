// @flow

import update from "immutability-helper";
import { IMAGE_ACTIONS } from "./constants";

const initialState = {
  images: [],
  error: null
};

const convertToArray = obj => {
  const x = Object.values(obj);
  return x;
};
const extractData = obj => {
  const arr = convertToArray(obj);
  let newArray = [];
  arr.forEach(obj => {
    newArray.push({
      description: obj.alt_description,
      url: obj.urls.full,
      link: obj.links.self
    });
  });
  console.log(newArray);
  return newArray;
};
const fetchImages = (state, { payload }) =>
  update(state, {
    $merge: {
      images: extractData(payload)
    }
  });
const failedToFetch = (state, { payload }) =>
  update(state, {
    $set: {
      error: payload
    }
  });
const imageData = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_ACTIONS.fetchImagesSuccess:
      return fetchImages(state, action);
    case IMAGE_ACTIONS.fetchImagesFailed:
      return failedToFetch(state, action);
    default:
      return state;
  }
};
export default imageData;
