import { unsplashAxios } from "./axios";
import { getRandomPhotosParams, getRandomPhotosResponse } from "./types";

export const UnsplashService = {
  get() {
    // return unsplashAxios.get("/photos/random/");
    return "";
  },
  getRandomPhotos(
    params: getRandomPhotosParams = {
      count: 9,
    }
  ): Promise<getRandomPhotosResponse> {
    return unsplashAxios.get("/photos/random/", {
      params,
    });
  },
};
