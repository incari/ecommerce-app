import { render, screen } from "@testing-library/react";
import { PriceDeals } from "../PriceDeals";
import "@testing-library/jest-dom";

describe("PriceDeals Component", () => {
  const priceDetail = {
    pricingPercentage: 20,
    oldPriceBeautify: "$300",
    fromPriceBeautify: "$240",
    pricePerNight: "$120",
    fromPrice: 123,
    discountSaved: 20,
    oldPrice: 300
  };
  const highlightText = "240";

  test("renders the price details correctly", () => {
    render(
      <PriceDeals
        priceDetail={priceDetail}
        highlightText={highlightText}
      />
    );

    // Check if the pricing percentage is rendered
    expect(screen.getByText("-20%")).toBeInTheDocument();

    // Check if the old price is rendered
    expect(screen.getByText("$300")).toBeInTheDocument();

    // Check if the discounted price is highlighted
    expect(screen.getByText("$240")).toHaveClass("YourHighlightClass");

    // Check if the price per night is rendered
    expect(screen.getByText("Per night: $120")).toBeInTheDocument();
  });

  test("does not highlight when highlightText does not match", () => {
    render(
      <PriceDeals
        priceDetail={priceDetail}
        highlightText="500"
      />
    );

    // Check that the discounted price is not highlighted
    expect(screen.getByText("$240")).not.toHaveClass("YourHighlightClass");
  });
});
