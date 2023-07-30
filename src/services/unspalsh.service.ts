import Axios from "axios";
import { AxiosResponse } from "axios";
import { getRandomPhotosParams, PhotoData } from "./types";

export const UnsplashService = {
  axios: Axios.create({
    baseURL: process.env.VUE_APP_UNSPLASH_API,
    headers: {
      Authorization: `Client-ID ${process.env.VUE_APP_UNSPALSH_ACCESS}`,
    },
  }),
  getRandomPhotos(
    params: getRandomPhotosParams = {
      count: 9,
    }
  ): Promise<AxiosResponse<PhotoData[]>> {
    return this.axios.get("/photos/random/", {
      params,
    });
  },
  getPhotoById(id: string): Promise<AxiosResponse<PhotoData>> {
    return this.axios.get(`/photos/${id}`);
  },
  async downloadPhoto(id: string, name: string = id) {
    const photoName: string = name;

    return this.axios
      .get(`/photos/${id}/download`)
      .then((res) => {
        const imageUrl = res.data.url;

        return this.axios.get(imageUrl, {
          responseType: "blob",
        });
      })
      .then((res) => {
        const href = window.URL.createObjectURL(res.data);

        const anchorElement = document.createElement("a");

        anchorElement.href = href;
        anchorElement.download = photoName;

        document.body.appendChild(anchorElement);
        anchorElement.click();

        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  },
};
