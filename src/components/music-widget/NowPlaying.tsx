import { fetchNowPlayingAction } from "@/utils/actions";
import AudioWave from "./AudioWave";
import Image from "next/image";
import albumCover from "@/../public/images/albumCover.png";
import { Music } from "lucide-react";

const NowPlaying = async () => {
  const data = await fetchNowPlayingAction();

  const track = data.recenttracks.track[0];
  const { artist, image, name, url } = track;
  const imageUrl = image[3]["#text"];

  const trackName = name.length > 21 ? `${name.slice(0, 17)}...` : name;
  const trackArtist =
    artist["#text"].length > 17 ? `${artist["#text"].slice(0, 17)}...` : artist;
  return (
    <div className="">
      <div className="flex gap-x-2 items-center mb-4">
        <Music />
        <p className="text-xl font-semibold">Listening to</p>
      </div>
      <a href={url} className="" target="_blank">
        <div className="now-playing-card">
          <div className="size-14 relative">
            <Image
              alt="song"
              src={imageUrl || albumCover}
              fill
              className="object-cover rounded"
              priority
            />
          </div>
          <div className="flex flex-col w-52">
            <p className="max-sm:text-sm">{trackName}</p>
            {/* <p className="text-muted-foreground">{artist["#text"]}</p> */}
            <p className="text-muted-foreground max-sm:text-xs">
              {trackArtist}
            </p>
          </div>
          <AudioWave />
        </div>
      </a>
    </div>
  );
};

export default NowPlaying;
