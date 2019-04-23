import { makeGetRequest } from "../../helpers/requestHelper";
//client id is usually suppose to be in a .env
export const fetchImages = () =>
  makeGetRequest(
    `https://api.unsplash.com/photos/?client_id=c4cc110cd10136d74dc317424dfd0ccbfb475eba0a2cd0201318973824e7d0cd`
  );
