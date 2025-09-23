import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function MusicPlayer({ src }) {
  return (
    <ReactAudioPlayer
      src={src}
      autoPlay={true}
      controls
      muted={false}
      volume={0.1}
      className="w-full rounded-xl shadow-lg bg-orange-400"
      loop={true}
    />
  );
}
