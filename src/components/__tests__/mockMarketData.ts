import { Markets } from "../../api/responseTypes";

export const mockMarketsData: Markets = {
  id: 101,
  title: "Tropical Paradise",
  destination: "Bali",
  images: [
    {
      desktop: "bali_desktop.jpg",
      tablet: "bali_tablet.jpg",
      mobile: "bali_mobile.jpg",
      horizontal: "bali_horizontal.jpg",
      horizontalSmall: "bali_horizontal_small.jpg"
    }
  ],
  productAnimation: {}, // Replace with appropriate data
  days: 7,
  url: "https://example.com/bali-trip",
  map: {
    showImage: true,
    image: {
      desktop: "map_desktop.jpg",
      tablet: "map_tablet.jpg",
      mobile: "map_mobile.jpg"
    }
  },
  highlights: [
    { title: "Beachfront Resorts", url: "https://example.com/beachfront" },
    { title: "Jungle Trekking", url: "https://example.com/jungle" }
  ],
  includes: ["ACCOMMODATION", "ALL_FLIGHTS", "SOME_MEALS", "ACTIVITIES"],
  priceDetail: {
    fromPrice: 1500,
    fromPriceBeautify: "$1,500",
    discountSaved: 300,
    oldPriceBeautify: "$1,800",
    pricingPercentage: 17,
    pricePerNight: "$215",
    oldPrice: 1800
  },
  tags: [
    {
      alias: "adventure",
      name: "Adventure",
      description: "Action-packed activities.",
      categoryName: "Activity",
      uri: "https://example.com/adventure",
      tagId: "tag-01"
    },
    {
      alias: "relaxation",
      name: "Relaxation",
      description: "Peaceful and calming experiences.",
      categoryName: "Leisure",
      uri: "https://example.com/relaxation",
      tagId: "tag-02"
    }
  ],
  crafterDetail: {
    crafterSentence: "Curated by our expert, John Doe.",
    crafterName: "John Doe",
    crafterAvatar: "john_doe_avatar.jpg"
  },
  hasPrivateTour: true,
  hasSoloTraveller: false,
  headLine: "Explore the beauty of Bali",
  tagHeadLine: [
    {
      alias: "bestseller",
      name: "Best Seller",
      category: "Popularity",
      uri: "https://example.com/bestseller",
      isWinner: true,
      uuid: "uuid-01"
    }
  ],
  isLandOnly: false,
  isValid: true,
  extraNights: 2,
  isNew: true,
  isPromoted: false,
  isFlashSales: true,
  fcpFixedPrice: {
    hasFcpFixedPrice: true,
    price: 1400
  }
};
