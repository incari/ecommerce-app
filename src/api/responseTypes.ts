type BreadcrumbItem = {
  url: string;
  title: string;
  class: string;
};

type Breadcrumb = BreadcrumbItem[];

type HeroImage = {
  image: string;
  desktop: string;
  tablet: string;
  mobile: string;
};

type Hero = {
  shortDescription: string;
  images: HeroImage;
  priceHeader: string;
  percentageHeader: string;
  isDiscount: boolean;
};

type Image = {
  desktop: string;
  tablet: string;
  mobile: string;
  horizontal?: string;
  horizontalSmall?: string;
};

type Highlight = {
  title: string;
  url: string;
};

type Tag = {
  alias: string;
  name: string;
  description: string;
  categoryName: string;
  uri: string;
  tagId: string;
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

type Includes =
  | "ACCOMMODATION"
  | "ALL_FLIGHTS"
  | "ALL_TRANSFERS"
  | "SOME_MEALS"
  | "ACTIVITIES"
  | "LOCATION";

type Markets = {
  id: number;
  title: string;
  destination: string;
  images: Image[];
  productAnimation: any; // Replace 'any' with the appropriate type if known
  days: number;
  url: string;
  map: {
    showImage: boolean;
    image: Image;
  };
  highlights: Highlight[];
  includes: Includes[];
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

type DestinationsKeys =
  | "featuredMonoMarket"
  | "featuredMultiMarket"
  | "monoMarket"
  | "multiMarket";

type Destinations = {
  featuredMonoMarket: Markets[] | [];
  featuredMultiMarket: Markets[] | [];
  monoMarket: Markets[] | [];
  multiMarket: Markets[] | [];
};

type Response = {
  name: string;
  flag: string;
  type: string;
  id: number;
  slug: string;
  descriptionIcon: string;
  mapUrl: string;
  longDescription: string;
  breadcrumb: Breadcrumb;
  hero: Hero;
  destinations: Destinations;
};
export type { Response, DestinationsKeys, Destinations, Markets };
