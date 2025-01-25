import { useRef, useEffect } from 'react';

interface SoundEffectProps {
  src: string;
  volume?: number;
  playbackRate?: number;
}

const useSoundEffect = ({ src, volume = 0.6, playbackRate = 1 }: SoundEffectProps) => {
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!src) return;
    const shouldCreateNewAudio = !audio.current || audio.current.src !== src;

    if (shouldCreateNewAudio) {
      if (audio.current) {
        audio.current.pause();
        audio.current.currentTime = 0;
      }
      const newAudio = new Audio(src);
      newAudio.volume = volume;
      newAudio.playbackRate = playbackRate;
      audio.current = newAudio;
    } else {
      if (audio.current) {
        audio.current.volume = volume;
        audio.current.playbackRate = playbackRate;
      }
    }

    return () => {
      if (audio.current) {
        audio.current.pause();
        audio.current.currentTime = 0;
        audio.current = null;
      }
    };
  }, [src, volume, playbackRate]);

  return audio.current;
};

export default useSoundEffect;
