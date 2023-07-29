export interface getRandomPhotosParams {
  count: number;
}

// This interface is not full
export interface PhotoData {
  alt_description: string;
  id: string;
  urls: Urls;
  user: User;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface User {
  name: string;
  instagram_username: string;
  profile_image: ProfileImage;
}

interface ProfileImage {
  large: string;
  medium: string;
  small: string;
}
