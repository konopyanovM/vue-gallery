import Axios from "axios";
import { AxiosResponse } from "axios";
import {
  ErrorResponse,
  GetRandomPhotosParams,
  PhotoData,
  SearchPhotosParams,
} from "./types";

export const UnsplashService = {
  axios: Axios.create({
    baseURL: process.env.VUE_APP_UNSPLASH_API,
    headers: {
      Authorization: `Client-ID ${process.env.VUE_APP_UNSPALSH_ACCESS}`,
    },
  }),
  getRandomPhotos(
    params: GetRandomPhotosParams = {
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
  searchPhotos(
    params: SearchPhotosParams = {
      query: "",
      per_page: 9,
    }
  ) {
    return this.axios.get("/search/photos", { params });
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

// Interceptor
UnsplashService.axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const status = error.response.status;
    let errorInfo: ErrorResponse | null = null;

    if (status === 401)
      errorInfo = {
        title: error.message,
        subtitle: error.response.data.errors[0],
      };
    if (status === 403)
      errorInfo = {
        title: error.message,
        subtitle: error.response.data,
      };

    return Promise.reject(errorInfo);
  }
);
