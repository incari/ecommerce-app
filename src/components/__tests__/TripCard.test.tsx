import { render, screen } from "@testing-library/react";
import { TripCard } from "../TripCard";
import { mockMarketsData } from "./mockMarketData";

describe("TripCard Component", () => {
  test("renders TripCard with mock data", () => {
    render(
      <TripCard
        trip={mockMarketsData}
        highlightText="Trip"
      />
    );

    expect(screen.getByText("Bali")).toBeInTheDocument();
    expect(screen.getByText("Tropical Paradise")).toBeInTheDocument();

    // Check highlights
    expect(screen.getByText("Beachfront Resorts")).toBeInTheDocument();
    expect(screen.getByText("Jungle Trekking")).toBeInTheDocument();

    // Check tags
    expect(screen.getByText(/Accommodation/i)).toBeInTheDocument();
    expect(screen.getByText(/All flights/i)).toBeInTheDocument();
    expect(screen.getByText(/Some meals/i)).toBeInTheDocument();
    expect(screen.getByText(/Activities/i)).toBeInTheDocument();

    // Check if price details are rendered
    expect(screen.getByText("$1,500")).toBeInTheDocument(); // From Price
    expect(screen.getByText("Per night: $215")).toBeInTheDocument(); // Price per night

    // Check if badges are rendered
    expect(screen.getByText("GROUP TOURS")).toBeInTheDocument();
    expect(screen.getByText("Relaxation")).toBeInTheDocument();

    expect(screen.getByText("See trip")).toBeInTheDocument();
  });
});
