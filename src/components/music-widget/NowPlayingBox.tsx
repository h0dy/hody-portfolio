import Image from "next/image";
import AudioWave from "./AudioWave";

const NowPlayingBox = ({
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
      <a href={url} className="now-playing-box" target="_blank">
        <div className="size-60 relative">
          <Image
            alt="song"
            src={imageUrl}
            fill
            className="object-cover rounded"
            priority
          />
        </div>
        <div className="flex justify-between items-center w-full gap-x-1">
          <div className="flex flex-col">
            <p className="">{trackName}</p>
            <p className="text-muted-foreground">{trackArtist}</p>
          </div>
          <AudioWave />
        </div>
      </a>
    </div>
  );
};

export default NowPlayingBox;
