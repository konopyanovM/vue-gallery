import { AxiosResponse } from "axios";
import { unsplashAxios } from "./axios";
import { getRandomPhotosParams, PhotoData } from "./types";

export const UnsplashService = {
  getRandomPhotos(
    params: getRandomPhotosParams = {
      count: 9,
    }
  ): Promise<AxiosResponse<PhotoData[]>> {
    return unsplashAxios.get("/photos/random/", {
      params,
    });
  },
  getPhotoById(id: string): Promise<AxiosResponse<PhotoData>> {
    return unsplashAxios.get(`/photos/${id}`);
  },
};
