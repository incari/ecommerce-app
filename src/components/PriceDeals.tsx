import Highlighter from "react-highlight-words";
import { PriceDetail } from "../api/responseTypes";

export const PriceDeals = ({
  priceDetail,
  highlightText
}: {
  priceDetail: PriceDetail;
  highlightText: string;
}) => {
  const {
    pricingPercentage,
    oldPriceBeautify,
    fromPriceBeautify,
    pricePerNight
  } = priceDetail;
  return (
    <>
      <span className="text-md font-bold bg-amber-300 rounded-full text-black w-fit p-1">
        -{pricingPercentage}%
      </span>
      <div className="flex">
        <span className="text-xs font-medium text-gray-400 line-through">
          {oldPriceBeautify}
        </span>
      </div>
      <div className="flex ">
        <span className="flex text-xl font-bold">
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[highlightText]}
            autoEscape={true}
            textToHighlight={fromPriceBeautify}
          />
        </span>
      </div>
      <span className="block text-left lg:text-right text-xs font-medium text-gray-500 text-nowrap ">
        Per night: {pricePerNight}
      </span>
    </>
  );
};
