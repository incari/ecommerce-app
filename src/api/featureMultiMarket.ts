type ImageUrls = {
  desktop: string;
  tablet: string;
  mobile: string;
};

type MapImage = {
  showImage: boolean;
  image: ImageUrls & {
    horizontal: string;
    horizontalSmall: string;
  };
};

type Highlight = {
  title: string;
  url: string;
};

type PriceDetail = {
  fromPrice: number;
  fromPriceBeautify: string;
  discountSaved: number;
  oldPriceBeautify: string;
  pricingPercentage: number;
  pricePerNight: string;
  oldPrice: number;
};

type Tag = {
  alias: string;
  name: string;
  description: string;
  categoryName: string;
  uri: string;
  tagId: string;
};

type CrafterDetail = {
  crafterSentence: string;
  crafterName: string;
  crafterAvatar: string;
};

type TagHeadLine = {
  alias: string;
  name: string;
  category: string;
  uri: string;
  isWinner: boolean;
  uuid: string;
};

type FcpFixedPrice = {
  hasFcpFixedPrice: boolean;
  price: number;
};

type Trip = {
  id: number;
  title: string;
  destination: string;
  images: ImageUrls[];
  productAnimation: null | string;
  days: number;
  url: string;
  map: MapImage;
  highlights: Highlight[];
  includes: string[];
  priceDetail: PriceDetail;
  tags: Tag[];
  crafterDetail: CrafterDetail;
  hasPrivateTour: boolean;
  hasSoloTraveller: boolean;
  headLine: string;
  tagHeadLine: TagHeadLine[];
  isLandOnly: boolean;
  isValid: boolean;
  extraNights: number;
  isNew: boolean;
  isPromoted: boolean;
  isFlashSales: boolean;
  fcpFixedPrice: FcpFixedPrice;
};

type FeaturedMultiMarket = Trip[];

export type {
  ImageUrls,
  MapImage,
  Highlight,
  PriceDetail,
  Tag,
  CrafterDetail,
  TagHeadLine,
  FcpFixedPrice,
  Trip,
  FeaturedMultiMarket,
};
