import Image from "next/image";
import React from "react";
import AudioWave from "./AudioWave";

const NowPlayingHorizontal = ({
  url,
  imageUrl,
  trackName,
  trackArtist,
}: {
  url: string;
  imageUrl: string;
  trackName: string;
  trackArtist: string;
}) => {
  return (
    <div className="">
      <a href={url} className="now-playing-card" target="_blank">
        <div className="size-14 mr-5 relative">
          <Image
            alt="song"
            src={imageUrl}
            fill
            className="object-cover rounded"
            priority
          />
        </div>
        <div className="flex flex-col grow mr-5">
          <p className="">{trackName}</p>
          <p className="text-muted-foreground">{trackArtist}</p>
        </div>
        <AudioWave />
      </a>
    </div>
  );
};

export default NowPlayingHorizontal;
