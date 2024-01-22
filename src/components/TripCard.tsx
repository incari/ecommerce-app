import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trip } from "@/api/featureMultiMarket";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

function LocateIcon(props) {
  return (
    <svg
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="#454545"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path
          clip-rule="evenodd"
          d="m11.5178 4.01471c1.9428 1.94281 1.9428 5.09273 0 7.03549l-2.68884 2.6888c-.45782.4579-1.2001.4579-1.65792 0l-2.68881-2.6888c-1.9428-1.94276-1.9428-5.09268 0-7.03549 1.94281-1.9428 5.09273-1.9428 7.03557 0z"
          fill-rule="evenodd"
        ></path>
        <path d="m9.64067 6.8219-1.95153 1.94833-.94695-.94375"></path>
      </g>
    </svg>
  );
}

function Flights(props) {
  return (
    <svg
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m14.52 17.213c.542.309.73.999.42 1.541l-4.056 7.098h1.25c.036 0 .071-.016.095-.043l7.314-8.359c.411-.469 1.124-.517 1.594-.106s.517 1.124.106 1.594l-7.314 8.359c-.453.518-1.107.814-1.795.814h-2.115c-.626 0-1.205-.333-1.52-.875s-.317-1.21-.006-1.754l4.485-7.849c.309-.542.999-.73 1.541-.42z"></path>
      <path d="m1.77 9.966c.214-.274.542-.434.89-.434h3.766c.378 0 .73.189.94.503l2.176 3.263h16.971c2.704 0 4.896 2.192 4.896 4.896 0 2.01-1.63 3.64-3.64 3.64h-9.573c-.624 0-1.129-.506-1.129-1.129s.506-1.129 1.129-1.129h9.573c.763 0 1.381-.619 1.381-1.381 0-1.456-1.181-2.637-2.637-2.637h-17.576c-.378 0-.73-.189-.94-.503l-2.176-3.263h-1.715l.905 3.618c.096.385-.017.792-.297 1.073l-.335.335 2.306 1.73c.891.668 1.975 1.03 3.089 1.03h2.75c.624 0 1.129.506 1.129 1.129s-.506 1.129-1.129 1.129h-2.75c-1.603 0-3.162-.52-4.444-1.481l-3.348-2.511c-.262-.196-.426-.497-.449-.823s.096-.647.328-.879l.803-.803-1.1-4.401c-.084-.337-.009-.695.205-.969z"></path>
      <path d="m9.598 6.641c.314-.542.893-.875 1.52-.875h2.115c.688 0 1.342.297 1.795.814l6.216 7.104c.411.469.363 1.183-.106 1.594s-1.183.363-1.594-.106l-6.216-7.104c-.024-.027-.059-.043-.095-.043h-1.25l3.339 5.843c.309.542.121 1.232-.42 1.541s-1.231.121-1.541-.42l-3.768-6.593c-.311-.544-.309-1.212.006-1.754z"></path>
    </svg>
  );
}
function Transfers(props) {
  return (
    <svg
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m9.037 25.072c0-.624.506-1.129 1.129-1.129h10.698c.624 0 1.129.506 1.129 1.129s-.506 1.129-1.129 1.129h-10.698c-.624 0-1.129-.506-1.129-1.129z"></path>
      <path d="m22.747 24.345c-.416 0-.754.337-.754.754s.337.754.754.754c.416 0 .754-.337.754-.754s-.337-.754-.754-.754zm-3.012.754c0-1.664 1.349-3.013 3.013-3.013s3.013 1.349 3.013 3.013-1.349 3.013-3.013 3.013-3.013-1.349-3.013-3.013z"></path>
      <path d="m8.283 24.345c-.416 0-.754.337-.754.754s.337.754.754.754.754-.337.754-.754c0-.416-.337-.754-.754-.754zm-3.013.754c0-1.664 1.349-3.013 3.013-3.013s3.013 1.349 3.013 3.013-1.349 3.013-3.013 3.013-3.013-1.349-3.013-3.013z"></path>
      <path d="m2.787 16.939c0-.624.506-1.129 1.129-1.129h24.843c.624 0 1.129.506 1.129 1.129s-.506 1.129-1.129 1.129h-24.843c-.624 0-1.129-.506-1.129-1.129z"></path>
      <path d="m20.236 8.277c.624 0 1.129.506 1.129 1.129v7.533c0 .624-.506 1.129-1.129 1.129s-1.129-.506-1.129-1.129v-7.533c0-.624.506-1.129 1.129-1.129z"></path>
      <path d="m11.449 8.277c.624 0 1.129.506 1.129 1.129v7.533c0 .624-.506 1.129-1.129 1.129s-1.129-.506-1.129-1.129v-7.533c0-.624.506-1.129 1.129-1.129z"></path>
      <path d="m25.384 20.705c0-.624.506-1.129 1.129-1.129h2.511c.624 0 1.129.506 1.129 1.129s-.506 1.129-1.129 1.129h-2.511c-.624 0-1.129-.506-1.129-1.129z"></path>
      <path d="m6.1 10.535c-.582 0-1.054.472-1.054 1.054v12.38h1.354c.624 0 1.129.506 1.129 1.129s-.506 1.129-1.129 1.129h-1.392c-1.227 0-2.221-.994-2.221-2.221v-12.418c0-1.83 1.483-3.313 3.313-3.313h17.625c2.154 0 4.055 1.408 4.683 3.469l1.535 5.037c.141.462.213.943.213 1.427v4.352c0 2.01-1.63 3.64-3.64 3.64h-1.883c-.624 0-1.129-.506-1.129-1.129s.506-1.129 1.129-1.129h1.883c.763 0 1.381-.619 1.381-1.381v-4.352c0-.26-.039-.519-.114-.768l-1.535-5.037c-.338-1.11-1.362-1.868-2.522-1.868h-17.625z"></path>
    </svg>
  );
}

export function Accommodations(props) {
  return (
    <svg
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m6.431 18.068c-.762 0-1.38.618-1.38 1.38v5.02c0 .069.056.125.125.125h22.588c.069 0 .125-.056.125-.125v-5.02c0-.762-.618-1.38-1.38-1.38h-20.078zm-3.639 1.38c0-2.01 1.629-3.639 3.639-3.639h20.078c2.01 0 3.639 1.629 3.639 3.639v5.02c0 1.317-1.067 2.384-2.384 2.384h-22.588c-1.317 0-2.384-1.067-2.384-2.384z"></path>
      <path d="m10.196 8.029c-1.455 0-2.635 1.18-2.635 2.635v6.275c0 .624-.506 1.129-1.129 1.129s-1.129-.506-1.129-1.129v-6.274c0-2.703 2.191-4.894 4.894-4.894h12.549c2.703 0 4.894 2.191 4.894 4.894v6.274c0 .624-.506 1.129-1.129 1.129s-1.129-.506-1.129-1.129v-6.274c0-1.455-1.18-2.635-2.635-2.635h-12.549z"></path>
      <path d="m27.765 24.593c.624 0 1.129.506 1.129 1.129v2.51c0 .624-.506 1.129-1.129 1.129s-1.129-.506-1.129-1.129v-2.51c0-.624.506-1.129 1.129-1.129z"></path>
      <path d="m5.176 24.593c.624 0 1.129.506 1.129 1.129v2.51c0 .624-.506 1.129-1.129 1.129s-1.129-.506-1.129-1.129v-2.51c0-.624.506-1.129 1.129-1.129z"></path>
      <path d="m9.067 14.429c0-2.01 1.629-3.639 3.639-3.639h1.255c2.01 0 3.639 1.629 3.639 3.639s-1.629 3.639-3.639 3.639h-1.255c-2.01 0-3.639-1.629-3.639-3.639zm3.639-1.381c-.762 0-1.38.618-1.38 1.38s.618 1.38 1.38 1.38h1.255c.762 0 1.38-.618 1.38-1.38s-.618-1.38-1.38-1.38z"></path>
      <path d="m15.341 14.429c0-2.01 1.629-3.639 3.639-3.639h1.255c2.01 0 3.639 1.629 3.639 3.639s-1.629 3.639-3.639 3.639h-1.255c-2.01 0-3.639-1.629-3.639-3.639zm3.639-1.381c-.762 0-1.38.618-1.38 1.38s.618 1.38 1.38 1.38h1.255c.762 0 1.38-.618 1.38-1.38s-.618-1.38-1.38-1.38z"></path>
    </svg>
  );
}
export function Activities(props) {
  return (
    <svg
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m16.47 19.574c.624 0 1.129.506 1.129 1.129v7.529c0 .624-.506 1.129-1.129 1.129s-1.129-.506-1.129-1.129v-7.529c0-.624.506-1.129 1.129-1.129z"></path>
      <path d="m14.086 28.233c0-.624.506-1.129 1.129-1.129h2.51c.624 0 1.129.506 1.129 1.129s-.506 1.129-1.129 1.129h-2.51c-.624 0-1.129-.506-1.129-1.129z"></path>
      <path d="m4.419 19.865c.463-.418 1.177-.381 1.595.081 1.228 1.361 2.976 2.137 4.809 2.137s3.58-.776 4.809-2.137c.418-.463 1.132-.499 1.595-.081s.499 1.132.081 1.595c-1.657 1.835-4.013 2.882-6.485 2.882s-4.829-1.047-6.485-2.882c-.418-.463-.381-1.177.082-1.595z"></path>
      <path d="m15.714 19.865c.463-.418 1.177-.381 1.595.081 1.228 1.361 2.976 2.137 4.809 2.137s3.58-.776 4.809-2.137c.418-.463 1.132-.499 1.595-.081s.499 1.132.081 1.595c-1.657 1.835-4.013 2.882-6.485 2.882s-4.829-1.047-6.485-2.882c-.418-.463-.382-1.177.082-1.595z"></path>
      <path d="m4.047 20.703c0-.624.506-1.129 1.129-1.129h.125c.624 0 1.129.506 1.129 1.129v7.529c0 .624-.506 1.129-1.129 1.129h-.125c-.624 0-1.129-.506-1.129-1.129z"></path>
      <path d="m2.792 28.233c0-.624.506-1.129 1.129-1.129h2.51c.624 0 1.129.506 1.129 1.129s-.506 1.129-1.129 1.129h-2.51c-.624 0-1.129-.506-1.129-1.129z"></path>
      <path d="m27.765 19.574c.624 0 1.129.506 1.129 1.129v7.529c0 .624-.506 1.129-1.129 1.129s-1.129-.506-1.129-1.129v-7.529c0-.624.506-1.129 1.129-1.129z"></path>
      <path d="m25.381 28.233c0-.624.506-1.129 1.129-1.129h2.51c.624 0 1.129.506 1.129 1.129s-.506 1.129-1.129 1.129h-2.51c-.624 0-1.129-.506-1.129-1.129z"></path>
      <path d="m6.557 7.527c0-1.663 1.348-3.012 3.012-3.012h13.804c1.663 0 3.012 1.348 3.012 3.012v7.529c0 1.663-1.348 3.012-3.012 3.012h-13.804c-1.663 0-3.012-1.348-3.012-3.012zm3.012-.753c-.416 0-.753.337-.753.753v7.529c0 .416.337.753.753.753h13.804c.416 0 .753-.337.753-.753v-7.529c0-.416-.337-.753-.753-.753z"></path>
    </svg>
  );
}

export function Meals(props) {
  return (
    <svg
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m6.427 16.185c-.07 0-.126.056-.126.126v3.766c0 3.536 2.867 6.403 6.403 6.403h2.511c3.536 0 6.403-2.867 6.403-6.403v-3.766c0-.07-.056-.126-.126-.126zm-2.385.126c0-1.317 1.068-2.385 2.385-2.385h15.065c1.317 0 2.385 1.068 2.385 2.385v3.766c0 4.784-3.878 8.662-8.662 8.662h-2.511c-4.784 0-8.662-3.878-8.662-8.662v-3.766z"></path>
      <path d="m17.575 4.194c.452-.43 1.167-.413 1.597.039 1.253 1.315 1.253 3.381 0 4.696-.421.443-.421 1.138 0 1.581.43.452.413 1.167-.039 1.597s-1.167.413-1.597-.039c-1.252-1.315-1.252-3.381 0-4.696.422-.443.422-1.138 0-1.581-.43-.452-.413-1.167.039-1.597z"></path>
      <path d="m13.181 4.194c.452-.43 1.167-.413 1.597.039 1.252 1.315 1.252 3.381 0 4.696-.422.443-.422 1.138 0 1.581.43.452.413 1.167-.039 1.597s-1.167.413-1.597-.039c-1.252-1.315-1.252-3.381 0-4.696.422-.443.422-1.138 0-1.581-.43-.452-.413-1.167.039-1.597z"></path>
      <path d="m8.787 4.194c.452-.43 1.167-.413 1.597.039 1.252 1.315 1.252 3.381 0 4.696-.422.443-.422 1.138 0 1.581.43.452.413 1.167-.039 1.597s-1.167.413-1.597-.039c-1.252-1.315-1.252-3.381 0-4.696.422-.443.422-1.138 0-1.581-.43-.452-.413-1.167.039-1.597z"></path>
      <path d="m19.735 15.056c0-.624.506-1.129 1.129-1.129h3.27c1.264 0 2.475.502 3.369 1.395s1.396 2.105 1.396 3.369c0 2.807-1.941 5.242-4.677 5.868l-2.317.53c-.608.139-1.214-.241-1.353-.849s.241-1.214.849-1.353l2.317-.53c1.71-.391 2.922-1.912 2.922-3.666 0-.665-.264-1.302-.734-1.772s-1.107-.734-1.772-.734h-3.27c-.624 0-1.129-.506-1.129-1.129z"></path>
    </svg>
  );
}
type IconOptions =
  | "ACCOMMODATION"
  | "ALL_FLIGHTS"
  | "ALL_TRANSFERS"
  | "SOME_MEALS"
  | "ACTIVITIES";

const IconSelector = (option: IconOptions) => {
  console.log("opt", option);
  switch (option) {
    case "ACCOMMODATION":
      return <Accommodations className="inline-block" height={16} width={16} />;
    case "ALL_FLIGHTS":
      return <Flights className="inline-block" height={16} width={16} />;
    case "ALL_TRANSFERS":
      return <Transfers className="inline-block" height={16} width={16} />;
    case "SOME_MEALS":
      return <Meals className="inline-block" height={16} width={16} />;
    case "ACTIVITIES":
      return <Activities className="inline-block" height={16} width={16} />;
    default:
      null;
  }
};

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
                    <LocateIcon className="inline-block" />

                    {title}
                  </li>
                ))}
                {highlights.length > highlightsSplit.length
                  ? `+ ${highlights.length - highlightsSplit.length} more`
                  : ""}
              </ul>
              <ul className="text-sm mb-4">
                {includes.map((item) => (
                  <li key={title}>
                    {IconSelector(item)}
                    {item.split("_").join(" ").toLocaleLowerCase()}
                  </li>
                ))}
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
