import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { IconSelector } from "@/lib/Icons";
import Highlighter from "react-highlight-words";
import { Markets } from "../api/responseTypes";
import { PriceDeals } from "./PriceDeals";
import { useState } from "react";

const ratio = 324 / 750;
const width = 500;
const height = width * ratio;

// Should be the Trip as type but I needed more type to proper type this component
export function TripCard({
  trip,
  highlightText
}: {
  trip: Markets;
  highlightText: string;
}) {
  const {
    title,
    destination,
    images,
    tags,
    highlights,
    hasSoloTraveller,
    includes,
    priceDetail
  } = trip;
  const highlightsSplit = highlights.slice(0, 5);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const src = isHovered ? images[0].desktop : images[1]?.desktop;

  return (
    <>
      <div
        className="layout grid grid-cols-12 bg-white shadow-lg rounded-3xl w-full p-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <section className="order-1 lg:order-1 col-span-12 row-span-2 lg:col-span-6 bg-slate-600 m-auto">
          <Image
            alt={title}
            src={src}
            width={width}
            height={height}
          />
        </section>
        <section className="order-3 lg:order-2 col-span-12 row-span-2  lg:col-span-5  flex flex-col justify-between px-2">
          <div>
            <h2 className="text-lg font-semibold">{destination} </h2>
            <h1 className="mt-2  text-xl font-bold">
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[highlightText]}
                autoEscape={true}
                textToHighlight={title}
              />
            </h1>
            <div className="flex gap-2">
              <ul className="text-sm mb-4">
                {highlightsSplit.map(
                  ({ title }: { title: string }, index: number) => (
                    <li key={title + index}>
                      <IconSelector option="LOCATION" />

                      {title}
                    </li>
                  )
                )}
                {highlights.length > highlightsSplit.length
                  ? `+ ${highlights.length - highlightsSplit.length} more`
                  : ""}
              </ul>
              <ul className="text-sm mb-4">
                {includes.map((item) => {
                  const label =
                    item[0] +
                    item.slice(1).split("_").join(" ").toLocaleLowerCase();

                  return (
                    <li key={item}>
                      <IconSelector option={item} />
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">GROUP TOURS</Badge>
            {hasSoloTraveller && (
              <Badge variant="secondary">SOLO TRAVELER</Badge>
            )}
            {tags.map(({ name, description, tagId }) => (
              <Tooltip
                key={tagId}
                disableHoverableContent
              >
                <TooltipTrigger style={{ cursor: "auto" }}>
                  <Badge>{name}</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </section>
        <section className="order-2 lg:order-3 col-span-4 col-start-1 lg:col-start-12  h-full max-w-full mx-2  flex flex-col gap-1 m-2">
          <PriceDeals
            priceDetail={priceDetail}
            highlightText={highlightText}
          />
        </section>
        <section className="order-4 lg:order-4 col-span-12  lg:col-start-12 lg:row-start-2 max-w-full m-auto lg:mb-0 lg:mr-0">
          <Button className="mt-4 bg-black text-white">See trip</Button>

          {/*     
        Should have a routing
        <Link href={`/${id}`}>
          <Button className="mt-4 bg-black text-white">See trip</Button>
        </Link> */}
        </section>
      </div>
    </>
  );
}
