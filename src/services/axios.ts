import Axios from "axios";

export const unsplashAxios = Axios.create({
  baseURL: process.env.VUE_APP_UNSPLASH_API,
  headers: {
    Authorization: `Client-ID ${process.env.VUE_APP_UNSPALSH_ACCESS}`,
  },
});
