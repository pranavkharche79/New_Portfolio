import ReactPlayer from "react-player";

interface Props {
  url: string;
}

export default function VideoPlayer({ url }: Props) {
  return (
    <div className="relative w-full h-full">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        light
        pip
        stopOnUnmount
        fallback={
          <div className="flex items-center justify-center h-full bg-gray-900 text-white/60 text-sm">
            Loading video player…
          </div>
        }
      />
    </div>
  );
}
