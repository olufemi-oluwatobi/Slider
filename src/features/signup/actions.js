import { fetchImages } from "./api";
import { IMAGE_ACTIONS } from "./constants";

const actionSuccess = (actionType, payload) => ({
  type: IMAGE_ACTIONS[`${actionType}Success`],
  payload
});
const actionFailed = (actionType, error) => ({
  type: IMAGE_ACTIONS[`${actionType}Failed`],
  error
});

export const getImages = () => {
  const actionType = "fetchImages";

  return async dispatch => {
    try {
      const data = await fetchImages();
      if (data) dispatch(actionSuccess(actionType, data));
    } catch (error) {
      actionFailed(actionType, error);
    }
  };
};
