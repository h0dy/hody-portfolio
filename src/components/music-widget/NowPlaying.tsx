"use client";

import albumCover from "@/../public/images/albumCover.png";
import useSWR from "swr";
import { Music } from "lucide-react";
import NowPlayingSkelton from "./NowPlayingSkelton";
import NowPlayingHorizontal from "./NowPlayingHorizontal";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const NowPlaying = () => {
  const { data, isLoading, error } = useSWR("/api/now-playing", fetcher, {
    refreshInterval: 10000,
  });
  if (isLoading || error) return <NowPlayingSkelton />;

  const track = data?.recenttracks?.track?.[0];
  const { artist, image, name, url } = track;
  const imageUrl = image[3]["#text"] || albumCover; 

  const trackName = name.length > 20 ? `${name.slice(0, 17)}...` : name;
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
      <NowPlayingHorizontal
        url={url}
        imageUrl={imageUrl}
        trackName={trackName}
        trackArtist={trackArtist}
      />
    </div>
  );
};

export default NowPlaying;
