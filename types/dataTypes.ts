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
