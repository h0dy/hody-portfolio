"use client";

import AudioWave from "./AudioWave";
import Image from "next/image";
import albumCover from "@/../public/images/albumCover.png";
import useSWR from "swr";
import { Music } from "lucide-react";
import NowPlayingSkelton from "./NewPlayingSkelton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const NowPlaying = () => {
  const { data, isLoading } = useSWR("/api/now-playing", fetcher, {
    refreshInterval: 10000,
  });
  if (isLoading) return <NowPlayingSkelton />;

  const track = data.recenttracks.track[0];
  const { artist, image, name, url } = track;
  const imageUrl = image[3]["#text"] || albumCover;

  const trackName = name.length > 21 ? `${name.slice(0, 17)}...` : name;
  const trackArtist =
    artist["#text"].length > 17
      ? `${artist["#text"].slice(0, 17)}...`
      : artist["#text"];

  return (
    <div className="">
      <div className="flex gap-x-2 items-center mb-4">
        <Music />
        <p className="text-xl font-semibold">Listening to</p>
      </div>
      <div className="">
        <a href={url} className="now-playing-card" target="_blank">
          <div className="size-14 relative">
            <Image
              alt="song"
              src={imageUrl}
              fill
              className="object-cover rounded"
              priority
            />
          </div>
          <div className="flex flex-col w-52">
            <p className="max-sm:text-sm">{trackName}</p>
            <p className="text-muted-foreground max-sm:text-xs">
              {trackArtist}
            </p>
          </div>
          <AudioWave />
        </a>
      </div>
    </div>
  );
};

export default NowPlaying;
