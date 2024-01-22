import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trip } from "@/api/featureMultiMarket";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { IconSelector } from "@/lib/Icons";

const ratio = 324 / 750;
const width = 500;
const height = width * ratio;

export default function TripCard({ trip }: { trip: Trip }) {
  console.log(trip);
  const {
    title,
    destination,
    images,
    tags,
    highlights,
    hasPrivateTour,
    hasSoloTraveller,
    includes,
    priceDetail: {
      pricingPercentage,
      oldPriceBeautify,
      fromPriceBeautify,
      pricePerNight,
    },
  } = trip;
  const highlightsSplit = highlights.slice(0, 5);
  console.log(includes);
  return (
    <>
      <div className="flex w-full items-center justify-between bg-white p-4 shadow-lg rounded-3xl">
        <Image
          alt={title}
          src={images[0].mobile}
          width={width}
          height={height}
          objectFit="cover"
        />
        <div className="flex flex-col justify-between px-4">
          <div>
            <h2 className="text-lg font-semibold">{destination} </h2>
            <h1 className="mt-2  text-xl font-bold">{title} </h1>
            <div className="flex gap-2">
              <ul className="text-sm mb-4">
                {highlightsSplit.map(({ title }) => (
                  <li key={title}>
                    <IconSelector option="LOCATION" />

                    {title}
                  </li>
                ))}
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
                    <li key={title}>
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
              <Tooltip key={tagId} disableHoverableContent>
                <TooltipTrigger>
                  <Badge>{name}</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{description}</p>
                </TooltipContent>
              </Tooltip>
            ))}

            <Badge>Nature</Badge>
            <Badge>Honeymoon</Badge>
            <Badge>Couples</Badge>
            <Badge>Safari</Badge>
            <Badge>Spring</Badge>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between h-full">
          <div>
            <span className="text-md font-bold text-red-600">
              -{pricingPercentage}%
            </span>
            <div className="flex items-baseline space-x-2">
              <span className="text-xs font-medium text-gray-400 line-through">
                {oldPriceBeautify}
              </span>
            </div>
            <div className="flex ">
              <span className="flex text-xl font-bold">
                {fromPriceBeautify}
              </span>
            </div>
            <span className="block text-right text-xs font-medium text-gray-500 text-nowrap">
              Per night: {pricePerNight}
            </span>
          </div>

          <Button className="mt-4 bg-black text-white">See trip</Button>
        </div>
      </div>
      {/*
      <Card className="w-full flex flex-row">
        <div className="w-1/2 relative">
          <Image
            alt={imageAlt}
            src={imageSrc}
            width={width}
            height={height}
            objectFit="cover"
          />
        </div>
        <div className="w-1/2">
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <Badge variant="secondary">{discount}</Badge>
            </div>
            <ul className="text-sm mb-4">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <div className="text-sm">{accommodations}</div>
              <div className="text-right">
                <p className="text-lg font-semibold">{price}</p>
                <p className="text-sm text-gray-500 line-through">{oldPrice}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>See trip</Button>
          </CardFooter>
        </div>
      </Card>
    */}
    </>
  );
}
