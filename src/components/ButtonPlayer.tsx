import { useEffect, useState, useRef } from "preact/hooks"; 
import Tracks from "@/data/tracks.json";

export default function ButtonPlayer({ track }: { track: any }) {

    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement | undefined>(
        typeof Audio !== "undefined" ? new Audio("") : undefined
      );
    const trackUrl = Tracks.find((t: any) => t.title === track.toLowerCase())?.url;
  
    const playAudio = async () => {
      const audio = audioRef.current 
        audio && (audio.src = trackUrl || "");
  
        isPlaying
        ? audioRef.current?.play()
        : audioRef.current?.pause()
    }
    
    const runVynil = () => {
      const vynil = document.querySelector('.music-player-container');
      isPlaying
      ? vynil?.classList.add('is-playing')
      : vynil?.classList.remove('is-playing')
    }

    const togglePlayback = () => {
      setIsPlaying(!isPlaying);
    }
  
    useEffect(() => {
      playAudio();
      runVynil();
    }, [isPlaying, trackUrl]);

    return (
        <button onClick={togglePlayback} className="bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center">
            {isPlaying ? "Pause" : "Play"}
        </button>
    );
}
