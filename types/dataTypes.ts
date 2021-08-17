export type TTheatre = {
  title: string;
  address: string;
  tel: string;
  features: {
    three_d: boolean;
    aircond: boolean;
    restaurant: boolean;
    dolby: boolean;
    phone_res: boolean;
    parking: boolean;
  };
  url: string;
};

export type TTheatreFeatureProps = {
  name: string;
  color: string;
  size: number;
  isAvailable: boolean;
};

export type TArtist = {
  name: string;
  image: string;
};

export type TMovieDetails = {
  title: string;
  trailer: string;
  poster: string;
  duration: string;
  categories: string[];
  description: string;
  production: string;
  cast: TArtist[];
};

type TSession = {
  type: string;
  times: string[];
};

export type TMovie = {
  title: string;
  originalTitle: string;
  categories: string[];
  poster: string;
  sessions: TSession[];
  url: string;
};
